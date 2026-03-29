"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const personas = [
  {
    role: "Persona 01",
    emoji: "🌾",
    name: "Petani",
    desc: "Akses langsung ke pasar, subsidi digital, dan pembiayaan berbasis hasil panen nyata tanpa agunan tradisional.",
    benefits: [
      "Daftarkan estimasi panen",
      "Terima voucher subsidi pupuk/benih",
      "Ajukan pinjaman via pNFT",
      "Langsung terhubung pembeli",
    ],
    cta: "Daftar Petani",
  },
  {
    role: "Persona 02",
    emoji: "🏛️",
    name: "Koperasi & Gudang",
    desc: "Kelola stok, tokenisasi aset fisik jadi instrumen keuangan digital, dan pantau seluruh anggota dalam satu dashboard.",
    benefits: [
      "Mint pNFT dari stok gudang",
      "Monitor anggota & subsidi",
      "Audit trail on-chain",
      "Integrasi DeFi langsung",
    ],
    cta: "Daftar Koperasi",
  },
  {
    role: "Persona 03",
    emoji: "🚛",
    name: "Transporter",
    desc: "Pantau armada real-time, otomatisasi klaim asuransi, dan maksimalkan pendapatan dengan Backload Optimizer.",
    benefits: [
      "IoT tracking suhu & GPS",
      "Klaim asuransi otomatis",
      "Backload trip optimization",
      "Rating & reputasi on-chain",
    ],
    cta: "Daftar Transporter",
  },
  {
    role: "Persona 04",
    emoji: "🏢",
    name: "Pembeli B2B",
    desc: "Akses langsung ke sumber komoditas terverifikasi, harga transparan berbasis oracle, dan jaminan kualitas dari IoT.",
    benefits: [
      "Browse supply seluruh Indonesia",
      "Harga real-time via Pyth oracle",
      "Tracking pengiriman live",
      "Invoice & pembayaran otomatis",
    ],
    cta: "Daftar Pembeli",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function Persona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="persona" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[120px]"
    >
      {/* Section Header */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[#d4a017]">//</span>
            <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase text-[#7ab648]">
              Komunitas PANORA
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(36px,3.5vw,54px)] font-black leading-[1.1]">
            Dibangun Untuk
            <br />
            <em className="text-[#d4a017] not-italic">Semua Pelaku</em>
          </h2>
        </div>
        <p className="max-w-[400px] text-[15px] text-[#c8b67a] leading-[1.7]">
          Satu platform, empat persona. Setiap pelaku rantai pasok
          mendapat antarmuka dan fitur yang dirancang khusus untuk
          kebutuhannya.
        </p>
      </motion.div>

      {/* Persona Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {personas.map((persona) => (
          <motion.div
            key={persona.role}
            variants={itemVariants}
            className="group border border-[rgba(245,230,192,0.12)] p-11 relative overflow-hidden transition-all duration-[350ms] hover:border-[rgba(212,160,23,0.5)] hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(135deg, rgba(44,31,14,0.5), rgba(26,18,8,0.8))',
            }}
          >
            {/* Role */}
            <div className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.25em] uppercase text-[#7ab648] mb-5">
              {persona.role}
            </div>

            {/* Emoji */}
            <span className="text-[44px] mb-5 block drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {persona.emoji}
            </span>

            {/* Name */}
            <h3 className="font-[var(--font-playfair)] text-[22px] font-bold mb-3">
              {persona.name}
            </h3>

            {/* Description */}
            <p className="text-[13px] text-[#c8b67a] leading-[1.7] mb-7">
              {persona.desc}
            </p>

            {/* Benefits */}
            <ul className="flex flex-col gap-2 list-none mb-7">
              {persona.benefits.map((benefit, i) => (
                <li 
                  key={i}
                  className="text-xs text-[rgba(200,182,122,0.8)] flex items-start gap-2"
                >
                  <span className="text-[#7ab648] flex-shrink-0 mt-0.5">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#daftar"
              className="inline-block mt-7 px-6 py-2.5 border border-[rgba(212,160,23,0.4)] text-[#d4a017] font-[var(--font-dm-mono)] text-[11px] tracking-[0.15em] uppercase no-underline hover:bg-[#d4a017] hover:text-[#1a1208] hover:border-[#d4a017] transition-all duration-200 btn-clip-sm"
            >
              {persona.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
