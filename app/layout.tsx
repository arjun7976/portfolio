import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arjun Prajapat - AI & DevOps Engineer',
  description: 'Final-year BCA (AI & Data Science) student building privacy-first AI systems. Skilled in Docker, Linux, Jenkins, Python, and GenAI technologies.',
  keywords: 'AI Engineer, DevOps, Machine Learning, Docker, Jenkins, Python, Artificial Intelligence, GenAI, LangChain',
  authors: [{ name: 'Arjun Prajapat' }],
  creator: 'Arjun Prajapat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arjunprajapat.dev',
    title: 'Arjun Prajapat - AI & DevOps Engineer',
    description: 'Engineering Intelligent Solutions with AI, DevOps & Purpose',
    siteName: 'Arjun Prajapat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arjun Prajapat - AI & DevOps Engineer',
    description: 'Engineering Intelligent Solutions with AI, DevOps & Purpose',
    creator: '@arjun__dev',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}