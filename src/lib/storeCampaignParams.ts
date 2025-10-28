export const storeCampaignParams = () => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);

    // Extract campaign-related parameters
    const gclid = urlParams.get("gclid");
    const gadSource = urlParams.get("gad_source");
    const gadCampaignId = urlParams.get("gad_campaignid");
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");
    const utmTerm = urlParams.get("utm_term");
    const utmContent = urlParams.get("utm_content");

    // Construct a campaign data object
    const campaignData = {
        gclid,
        gadSource,
        gadCampaignId,
        utmSource,
        utmMedium,
        utmCampaign,
        utmTerm,
        utmContent,
    };

    // Only store if at least one parameter is present
    if (Object.values(campaignData).some(Boolean)) {
        localStorage.setItem("campaign_data", JSON.stringify(campaignData));
    }
};
