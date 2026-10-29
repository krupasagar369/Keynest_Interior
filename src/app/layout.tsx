import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/siteConfig";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // Add metadataBase: new URL("https://your-domain.com") once the domain is known.
  title: {
    default: "KeyNest Interiors | Beautiful Spaces. Thoughtfully Designed.",
    template: "%s | KeyNest Interiors",
  },
  description: siteConfig.description,
  openGraph: {
    title: "KeyNest Interiors",
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#075B5B",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <MotionProvider>
          <EnquiryProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </EnquiryProvider>
        </MotionProvider>
      </body>
    </html>
  );
}