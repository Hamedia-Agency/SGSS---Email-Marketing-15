import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Guard | Active 24/7 Hybrid Security & Incident Response",
  description:
    "Secure Guard unifies AI video surveillance with 24/7 active human verification, live deterrence, and rapid incident response to stop threats.",
  keywords: [
    "Hybrid Security",
    "Video Surveillance",
    "Live Security Response",
    "Active Deterrence",
    "Camera Monitoring",
    "Secure Guard",
    "Incident Response",
  ],
  openGraph: {
    title: "Secure Guard | Don't Just Detect Threats—Stop Them.",
    description:
      "Transform passive surveillance into an active, 24/7 incident response system with live human verification and real-time intervention.",
    type: "website",
    locale: "en_US",
    siteName: "Secure Guard Security Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Guard Hybrid Security Solutions",
    description:
      "Unifying advanced video monitoring with human expertise to stop security threats in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
