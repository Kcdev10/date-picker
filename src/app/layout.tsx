import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  weight: ["400", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

const inter = Inter({
  weight: ["400", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Date Picker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
