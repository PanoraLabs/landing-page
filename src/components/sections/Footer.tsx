"use client";

import { motion } from "framer-motion";

const footerLinks = {
  produk: [
    { label: "Panora-Match", href: "#" },
    { label: "Panora-Pay", href: "#" },
    { label: "Panora-Log", href: "#" },
    { label: "API & Integrasi", href: "#" },
  ],
  ekosistem: [
    { label: "App Petani", href: "#" },
    { label: "App Koperasi", href: "#" },
    { label: "App Transporter", href: "#" },
    { label: "App Pembeli B2B", href: "#" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Kemitraan", href: "#" },
    { label: "Kontak", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[rgba(245,230,192,0.06)] px-6 md:px-[60px] py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[60px]">
      {/* Brand */}
      <div>
        <a href="#" className="flex items-center gap-3 no-underline mb-4">
          <div className="w-9 h-9 bg-[#d4a017] hex-clip flex items-center justify-center text-[#1a1208] font-bold text-sm">
            P
          </div>
          <span className="font-[var(--font-playfair)] text-xl font-bold tracking-[0.12em] text-[#f5e6c0]">
            PANORA
          </span>
        </a>
        <p className="text-sm text-[#c8b67a] leading-[1.7] max-w-[280px] mb-7">
          Backbone Digital Pangan Nasional. Menyatukan arus barang,
          uang, dan data dalam satu ekosistem transparan berbasis
          Solana blockchain.
        </p>
        <div className="flex items-center gap-2 font-[var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-[rgba(200,182,122,0.5)]">
          <div className="w-2 h-2 bg-[#9945ff] rounded-full shadow-[0_0_8px_rgba(153,69,255,0.6)]" />
          Powered by Solana
        </div>
      </div>

      {/* Products */}
      <div>
        <h4 className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#c8b67a] mb-5">
          Produk
        </h4>
        <ul className="flex flex-col gap-3 list-none">
          {footerLinks.produk.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href}
                className="text-sm text-[rgba(200,182,122,0.6)] no-underline hover:text-[#d4a017] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Ecosystem */}
      <div>
        <h4 className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#c8b67a] mb-5">
          Ekosistem
        </h4>
        <ul className="flex flex-col gap-3 list-none">
          {footerLinks.ekosistem.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href}
                className="text-sm text-[rgba(200,182,122,0.6)] no-underline hover:text-[#d4a017] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#c8b67a] mb-5">
          Perusahaan
        </h4>
        <ul className="flex flex-col gap-3 list-none">
          {footerLinks.perusahaan.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href}
                className="text-sm text-[rgba(200,182,122,0.6)] no-underline hover:text-[#d4a017] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom */}
      <div className="col-span-full border-t border-[rgba(245,230,192,0.06)] pt-8 flex justify-between items-center flex-wrap gap-4">
        <p className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.1em] text-[rgba(200,182,122,0.35)]">
          © 2025 PANORA — Pangan Nusantara & Orkes Rantai Pasok. All rights reserved.
        </p>
        <p className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.1em] text-[rgba(200,182,122,0.35)]">
          Built on Solana · Powered by Anchor · Secured by Metaplex
        </p>
      </div>
    </footer>
  );
}
