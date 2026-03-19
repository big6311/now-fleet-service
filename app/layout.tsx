import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Now Fleet Services | Premium Fleet & Aircraft Exterior Cleaning",
    template: "%s | Now Fleet Services",
  },
  description:
    "Now Fleet Services delivers premium exterior cleaning for armored truck fleets, commercial vehicles, and private aircraft. Serving financial institutions and commercial clients with precision and reliability.",
  keywords: [
    "armored truck washing",
    "fleet cleaning",
    "commercial vehicle cleaning",
    "private aircraft exterior cleaning",
    "fleet wash service",
    "bank fleet washing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1ZS8BZK7PN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1ZS8BZK7PN');
          `}
        </Script>
      </head>
      <body className="bg-charcoal text-softwhite antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
