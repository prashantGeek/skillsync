import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillSync - Transform Your Team with Expert-Led Courses",
  description: "Upskill your workforce with 25,000+ expert-led courses. Join 15,000+ companies worldwide that trust SkillSync for professional development.",
  keywords: "online learning, corporate training, professional development, upskilling, business courses",
  icons: {
    icon: '/brain-icon.svg',
    shortcut: '/brain-icon.svg',
    apple: '/brain-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
