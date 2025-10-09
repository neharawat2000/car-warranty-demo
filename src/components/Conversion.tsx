'use client';

import Script from 'next/script';

export default function Conversion() {
    return (
        <>
            <Script
                id="google-ads-conversion"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        if (typeof gtag === 'function') {
                            gtag('event', 'conversion', {'send_to': 'AW-17574840283/rHqbCOSSrKgbENuPq7xB'});
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'event': 'conversion',
                                'send_to': 'AW-17574840283/rHqbCOSSrKgbENuPq7xB'
                            });
                        }
                    `,
                }}
            />
        </>
    );
}
