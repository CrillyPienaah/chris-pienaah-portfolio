import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christopher Crilly Pienaah | AI/ML Engineer & Product Strategist",
  description: "AI/ML Product Engineer building intelligent systems for underserved markets—from multi-agent clinical intelligence to verification-first real estate platforms. GPA: 3.97 (Analytics concentration), Northeastern University. Seeking roles at RBC, Scotiabank, TD, Manulife.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Product Strategy",
    "Multi-Agent Systems",
    "LangChain",
    "FastAPI",
    "Next.js",
    "Data Engineering",
    "HealthTech",
    "PropTech",
    "Toronto AI Engineer",
    "Northeastern University",
    "RBC Careers",
    "Scotiabank Jobs",
    "Manulife AI",
    "LuminaMed AI",
    "Daavi Platform",
    "Christopher Pienaah"
  ],
  authors: [{ name: "Christopher Crilly Pienaah" }],
  creator: "Christopher Crilly Pienaah",
  publisher: "Christopher Crilly Pienaah",
  
  // Open Graph (for social sharing - LinkedIn, Twitter, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://christopherpienaah.com",
    title: "Christopher Crilly Pienaah | AI/ML Engineer & Product Strategist",
    description: "Building production AI systems: LuminaMed (multi-agent clinical intelligence), Daavi (verification-first real estate), Hyperlocal Ad Optimizer. 4+ MVPs shipped.",
    siteName: "Christopher Crilly Pienaah Portfolio",
    images: [
      {
        url: "/og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "Christopher Crilly Pienaah - AI/ML Engineer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Christopher Crilly Pienaah | AI/ML Engineer",
    description: "Building intelligent systems for underserved markets. Multi-agent AI • Full-stack • Data Engineering",
    images: ["/og-image.png"],
    creator: "",
  },

  // Additional Meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add these when you have them)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Alternate languages (if you add multilingual support later)
  alternates: {
    canonical: "https://christopherpienaah.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional meta for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-24 min-h-screen flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}