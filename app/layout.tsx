import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/Folifod-icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/Folifod-icon.png" />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
