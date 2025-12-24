import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SocialWidget from "@/components/SocialWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumina Dental | Modern Family Dentistry",
  description: "Experience pain-free, advanced dental care in a relaxing environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800`}>
        {children}
        <SocialWidget />
      </body>
    </html>
  );
}
