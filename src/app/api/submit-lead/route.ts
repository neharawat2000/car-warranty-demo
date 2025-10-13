import { NextRequest, NextResponse } from 'next/server'
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  vehicleMileage: string
  agreeToTerms: boolean
  source?: string
  timestamp: string
  ip_address?: string
  user_agent?: string
}

// Simulated database - in production, this would be a real database
const leads: LeadData[] = []

// Send lead via sandbox email (Ethereal)
async function sendLeadEmail(leadData: LeadData) {

  const subject = `Top 10 Auto Warranty New Submission from ${leadData.firstName} ${leadData.lastName}`

  const html = `
    <h2>New Lead Submission</h2>
    <p><strong>Timestamp:</strong> ${new Date(leadData.timestamp).toLocaleString()}</p>
    <h3>Contact</h3>
    <ul>
      <li><strong>Name:</strong> ${leadData.firstName} ${leadData.lastName}</li>
      <li><strong>Email:</strong> ${leadData.email}</li>
      <li><strong>Phone:</strong> ${leadData.phone}</li>
    </ul>
    <h3>Vehicle Information</h3>
    <ul>
      <li><strong>Vehicle Year:</strong> ${leadData.vehicleYear}</li>
      <li><strong>Vehicle Make:</strong> ${leadData.vehicleMake}</li>
      <li><strong>Vehicle Model:</strong> ${leadData.vehicleModel}</li>
      <li><strong>Vehicle Mileage:</strong> ${leadData.vehicleMileage}</li>
      <li><strong>Source:</strong> ${leadData.source}</li>
    </ul>
  `

  const options = {
    to: process.env.EMAIL_TO!,
    from: process.env.EMAIL_FROM!,
    subject: subject,
    html: html
  }

  try {
    const response = await sgMail.send(options);
    return response;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
}


function validateLeadData(data: Partial<LeadData>): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.vehicleYear) errors.push('Vehicle Year is required')
  if (!data.vehicleMake) errors.push('Vehicle Make is required')
  if (!data.vehicleModel) errors.push('Vehicle Model is required')
  if (!data.vehicleMileage) errors.push('Vehicle Mileage is required')
  if (!data.firstName?.trim()) errors.push('First name is required')
  if (!data.lastName?.trim()) errors.push('Last name is required')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation
  const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/
  if (!data.phone?.trim()) {
    errors.push('Phone number is required')
  } else {
    const cleanPhone = data.phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      errors.push('Please enter a valid phone number')
    }
  }

  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the lead data
    const validation = validateLeadData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    // Get user's IP address for Facebook Conversion API
    const userIp = request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const userAgent = request.headers.get('user-agent') || '';

    // Create lead object
    const leadData: LeadData = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      zipCode: body.zipCode,
      vehicleYear: body.vehicleYear,
      vehicleMake: body.vehicleMake,
      vehicleModel: body.vehicleModel,
      vehicleMileage: body.vehicleMileage,
      agreeToTerms: body.agreeToTerms,
      source: body.source,
      timestamp: new Date().toISOString(),
      ip_address: userIp,
      user_agent: userAgent
    }

    // Send sandbox email notification (non-blocking failure)
    try {
      await sendLeadEmail(leadData)
    } catch (emailErr) {
      console.error('Email send failed (sandbox):', emailErr)
      return NextResponse.json({
        success: false,
        message: 'Email send failed (sandbox)',
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    })

  } catch (error) {
    console.error('Error processing lead submission:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve leads (for admin/testing purposes)
// export async function GET() {
//   return NextResponse.json({
//     totalLeads: leads.length,
//     leads: leads.map(lead => ({
//       ...lead,
//       phone: lead.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'), // Format phone
//       score: calculateLeadScore(lead)
//     }))
//   })
// }
