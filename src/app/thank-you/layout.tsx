import Header from "@/components/Header"


const ThankYouLayout = ({ children }: { children: React.ReactNode }) => {
    const year = new Date().getFullYear()
    return (
        <div className="h-[100vh]">
            <Header />
            {children}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 mb-4">
                        © {year} Auto Warranty Comparison. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500">
                        We earn commissions from brands listed on this site, which influences how listings are presented.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default ThankYouLayout