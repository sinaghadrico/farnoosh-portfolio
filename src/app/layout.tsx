import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { site } from "@/content/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C10" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.description,
  applicationName: site.fullName,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Design Systems",
    "Interaction Design",
    "Portfolio",
    site.fullName,
    site.name,
  ],
  category: "design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: `${site.fullName} — ${site.role}`,
    title: `${site.fullName} — ${site.role}`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role}`,
    description: site.description,
    images: [site.ogImage],
    creator: `@${site.name.toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} id="site-jsonld" />
      </body>
    </html>
  );
}
