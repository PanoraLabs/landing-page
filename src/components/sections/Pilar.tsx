"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const pilars = [
  {
    number: "01",
    name: "Panora-Match",
    color: "#7ab648",
    headline: "Demand-Supply Engine",
    description: "Algoritma cerdas yang mendeteksi lonjakan permintaan di satu titik dan mencocokannya dengan jadwal panen petani di titik lain. Real-time, akurat, tanpa perantara.",
    features: [
      "State Compression untuk ribuan data panen",
      "Cross-region matching otomatis",
      "Notifikasi real-time ke petani & pembeli",
      "Harga transparan berbasis oracle Pyth",
    ],
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
        <path d="M8 26 Q18 14 26 18 Q34 22 44 10" stroke="#7ab648" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="18" r="4" fill="rgba(122,182,72,0.2)" stroke="#7ab648" strokeWidth="1.5" />
        <path d="M12 40 L40 40" stroke="rgba(122,182,72,0.3)" strokeWidth="1" strokeDasharray="3,3" />
        <circle cx="12" cy="34" r="3" fill="#7ab648" opacity="0.7" />
        <circle cx="40" cy="34" r="3" fill="#7ab648" opacity="0.7" />
        <path d="M12 34 Q26 28 40 34" stroke="#7ab648" strokeWidth="1.5" strokeDasharray="4,3" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Panora-Pay",
    color: "#d4a017",
    headline: "Financing & Smart Subsidy",
    description: "Mengubah hasil panen di gudang menjadi pNFT yang dapat dijadikan jaminan pinjaman DeFi. Subsidi input tani tersalurkan sebagai SPL Token hanya ke kios resmi terverifikasi.",
    features: [
      "Tokenized Warehouse Receipt (pNFT)",
      "Integrasi protokol DeFi mitra",
      "Closed-loop subsidy via SPL Token",
      "Agunan berbasis nilai panen real-time",
    ],
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
        <rect x="10" y="18" width="32" height="22" rx="2" stroke="#d4a017" strokeWidth="1.5" fill="rgba(212,160,23,0.08)" />
        <path d="M18 18V14C18 10.7 20.7 8 24 8H28C31.3 8 34 10.7 34 14V18" stroke="#d4a017" strokeWidth="1.5" />
        <circle cx="26" cy="29" r="4" fill="rgba(212,160,23,0.2)" stroke="#d4a017" strokeWidth="1.5" />
        <path d="M26 33V37" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 24 L44 24 M38 28 L42 28" stroke="rgba(212,160,23,0.4)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Panora-Log",
    color: "#c0612a",
    headline: "Smart Logistics",
    description: "Data sensor IoT (suhu & GPS) tersinkronisasi ke blockchain. Kerusakan suhu otomatis memicu klaim asuransi. Transporter bisa tawarkan ruang kembali untuk efisiensi muatan.",
    features: [
      "Proof of Integrity via IoT on-chain",
      "Asuransi otomatis smart contract",
      "Backload Optimization (return trip)",
      "Pelacakan real-time suhu & lokasi",
    ],
    icon: (
      <svg viewBox="0 0 52 52" fill="none" className="w-full h-full">
        <rect x="6" y="28" width="28" height="14" rx="2" stroke="#c0612a" strokeWidth="1.5" fill="rgba(192,97,42,0.08)" />
        <circle cx="14" cy="44" r="4" stroke="#c0612a" strokeWidth="1.5" />
        <circle cx="28" cy="44" r="4" stroke="#c0612a" strokeWidth="1.5" />
        <path d="M34 36 L40 28 L46 28 L46 42 L34 42" stroke="#c0612a" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="40" cy="44" r="4" stroke="#c0612a" strokeWidth="1.5" />
        <path d="M20 28 L20 22 Q20 18 26 18 Q32 18 32 22" stroke="rgba(192,97,42,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="16" r="3" fill="rgba(192,97,42,0.3)" stroke="#c0612a" strokeWidth="1" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Pilar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="pilar" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[120px]"
    >
      {/* Background text */}
      <div className="absolute top-[60px] right-[60px] font-[var(--font-playfair)] text-[clamp(60px,10vw,100px)] font-black text-[rgba(245,230,192,0.03)] tracking-tight pointer-events-none select-none hidden lg:block">
        ECOSYSTEM
      </div>

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
              Tiga Pilar Utama
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(36px,3.5vw,54px)] font-black leading-[1.1]">
            Infrastruktur
            <br />
            <em className="text-[#d4a017] not-italic">Pangan Digital</em>
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] text-[#c8b67a] leading-[1.7]">
          Tiga modul terintegrasi yang bekerja bersama memangkas
          inefisiensi di seluruh rantai pasok pangan Indonesia.
        </p>
      </motion.div>

      {/* Pilar Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] bg-[rgba(212,160,23,0.1)]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {pilars.map((pilar) => (
          <motion.div
            key={pilar.number}
            variants={itemVariants}
            className="group bg-[#2c1f0e] p-11 md:p-14 relative overflow-hidden cursor-pointer hover:bg-[#3d2c12] transition-colors duration-300"
          >
            {/* Hover line */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
              style={{ backgroundColor: pilar.color }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Number */}
            <span 
              className="absolute top-5 right-[30px] font-[var(--font-playfair)] text-[80px] font-black leading-none opacity-[0.04] text-[#f5e6c0]"
            >
              {pilar.number}
            </span>

            {/* Icon */}
            <div className="w-[52px] h-[52px] mb-8 relative">
              {pilar.icon}
            </div>

            {/* Name */}
            <div 
              className="font-[var(--font-dm-mono)] text-xs tracking-[0.2em] uppercase mb-2"
              style={{ color: pilar.color }}
            >
              {pilar.name}
            </div>

            {/* Headline */}
            <h3 className="font-[var(--font-playfair)] text-[26px] font-bold mb-5 leading-[1.2]">
              {pilar.headline.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#c8b67a] leading-[1.75] mb-8">
              {pilar.description}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 list-none">
              {pilar.features.map((feature, i) => (
                <li 
                  key={i}
                  className="font-[var(--font-dm-mono)] text-[11px] text-[rgba(200,182,122,0.7)] flex items-center gap-2"
                >
                  <span style={{ color: pilar.color }}>→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
