import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, Mulish } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PANORA — Backbone Digital Pangan Nasional",
  description: "PANORA menyatukan arus barang, arus uang, dan arus data dalam satu infrastruktur blockchain — menghubungkan petani, koperasi, transporter, dan pembeli di seluruh Nusantara.",
  keywords: ["blockchain", "food supply chain", "agriculture", "Indonesia", "Solana", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${dmMono.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a1208] text-[#f5e6c0] overflow-x-hidden grain-overlay">
        {children}
      </body>
    </html>
  );
}
