import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Arjun Prajapat – Founder of Lifey – AI Emergency System',
  description: 'AI Emergency System – Saving lives faster than ever before.',
  keywords: 'AI Engineer, DevOps, Machine Learning, Docker, Jenkins, Python, Artificial Intelligence, GenAI, LangChain',
  authors: [{ name: 'Arjun Prajapat' }],
  creator: 'Arjun Prajapat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arjunprajapat.dev',
    title: 'Arjun Prajapat – Founder of Lifey – AI Emergency System',
    description: 'AI Emergency System – Saving lives faster than ever before.',
    siteName: 'Arjun Prajapat Portfolio',
    images: [
      {
        url: 'https://YOURDOMAIN.com/images/lifey-logo.png',
        width: 1200,
        height: 630,
        alt: 'Arjun Prajapat – Founder of Lifey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arjun Prajapat – Founder of Lifey – AI Emergency System',
    description: 'AI Emergency System – Saving lives faster than ever before.',
    creator: '@arjun__dev',
    images: ['https://YOURDOMAIN.com/images/lifey-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}