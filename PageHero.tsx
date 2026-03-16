import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Now Fleet Service | Premium Fleet & Aircraft Exterior Cleaning",
    template: "%s | Now Fleet Service",
  },
  description:
    "Now Fleet Service delivers premium exterior cleaning for armored truck fleets, commercial vehicles, and private aircraft. Serving financial institutions and commercial clients with precision and reliability.",
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
      <body className="bg-charcoal text-softwhite antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
