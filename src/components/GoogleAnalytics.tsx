'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                async
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17574840283"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17574840283');
                    `,
                }}
            />
            {/* Google tag (gtag.js) */}
            <Script
                async
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-YX05N3MGFH"
            />
            <Script
                id="google-analytics2"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-YX05N3MGFH');
                    `,
                }}
            />
        </>
    );
}
