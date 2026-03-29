"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroStats = [
  { num: "34+", label: "Provinsi Aktif" },
  { num: "180K", label: "Petani Terdaftar" },
  { num: "Rp 2.1T", label: "Volume Transaksi" },
  { num: "99.9%", label: "Uptime On-Chain" },
];

const dataCards = [
  { label: "Transaksi Aktif", value: "2.4K", unit: "On-chain today", position: "top-[5%] right-[-30px]" },
  { label: "Stok Terpantau", value: "18K", unit: "Ton komoditas", position: "bottom-[15%] left-[-20px]" },
  { label: "Waktu Finalisasi", value: "0.4s", unit: "Solana blockchain", position: "top-[42%] right-[-10px]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-[60px] pt-[120px] pb-20 lg:pb-[80px] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 80% at 70% 50%, rgba(45, 90, 39, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse 40% 60% at 20% 80%, rgba(212, 160, 23, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 80% 40% at 50% 10%, rgba(44, 31, 14, 0.8) 0%, transparent 70%)
            `
          }}
        />
      </div>

      {/* Animated grid */}
      <div 
        className="absolute inset-0 animate-grid-drift pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 160, 23, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 160, 23, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex items-center gap-3 mb-8"
          variants={fadeUp}
        >
          <span className="w-10 h-[1px] bg-[#7ab648]" />
          <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase text-[#7ab648]">
            Backbone Digital Pangan Nasional
          </span>
        </motion.div>

        <motion.h1 
          className="font-[var(--font-playfair)] text-[clamp(48px,5vw,76px)] font-black leading-[1.05] mb-3"
          variants={fadeUp}
        >
          Satu Ekosistem.
          <br />
          <em className="text-[#d4a017] not-italic">Seluruh</em>
          <br />
          <span className="[-webkit-text-stroke:1px_#c8b67a] text-transparent">
            Rantai Pangan.
          </span>
        </motion.h1>

        <motion.p 
          className="text-base md:text-[17px] font-light text-[#c8b67a] leading-[1.7] max-w-[480px] my-6"
          variants={fadeUp}
        >
          PANORA menyatukan arus barang, arus uang, dan arus data
          dalam satu infrastruktur blockchain — menghubungkan petani,
          koperasi, transporter, dan pembeli di seluruh Nusantara.
        </motion.p>

        <motion.div 
          className="flex gap-4 items-center flex-wrap"
          variants={fadeUp}
        >
          <Button variant="default" size="lg" asChild>
            <a href="#daftar">Bergabung Sekarang</a>
          </Button>
          <a 
            href="#cara-kerja" 
            className="flex items-center gap-2 text-[#c8b67a] font-[var(--font-dm-mono)] text-xs tracking-wide no-underline hover:text-[#f5e6c0] transition-colors group"
          >
            Lihat Cara Kerja
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      {/* Map Visualization - Hidden on mobile */}
      <motion.div 
        className="relative z-10 hidden lg:flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <div className="relative w-full max-w-[560px]">
          <svg
            className="w-full drop-shadow-[0_0_40px_rgba(212,160,23,0.15)]"
            viewBox="0 0 560 280"
            fill="none"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Sumatra */}
            <path
              d="M30 140 Q50 110 80 100 Q110 95 130 110 Q150 120 160 140 Q165 155 155 165 Q140 170 120 168 Q90 165 60 160 Q35 155 30 140Z"
              fill="rgba(45,90,39,0.6)"
              stroke="rgba(212,160,23,0.5)"
              strokeWidth="1"
            />
            {/* Java */}
            <path
              d="M180 155 Q210 148 250 145 Q290 143 320 148 Q340 152 345 160 Q342 168 320 172 Q285 175 250 173 Q215 170 185 165 Q178 162 180 155Z"
              fill="rgba(45,90,39,0.7)"
              stroke="rgba(212,160,23,0.5)"
              strokeWidth="1"
            />
            {/* Kalimantan */}
            <path
              d="M270 70 Q300 55 340 50 Q380 48 410 60 Q430 72 435 90 Q437 110 420 125 Q400 138 370 140 Q340 138 315 125 Q288 110 275 90 Q268 80 270 70Z"
              fill="rgba(45,90,39,0.5)"
              stroke="rgba(212,160,23,0.4)"
              strokeWidth="1"
            />
            {/* Sulawesi */}
            <path
              d="M400 95 Q420 85 435 90 Q445 100 440 115 Q435 125 425 128 Q415 130 408 120 Q400 110 400 95Z M440 105 Q455 95 465 100 Q470 112 460 120 Q450 125 442 118 Q438 112 440 105Z"
              fill="rgba(45,90,39,0.5)"
              stroke="rgba(212,160,23,0.4)"
              strokeWidth="1"
            />
            {/* Papua */}
            <path
              d="M460 130 Q490 118 520 120 Q545 125 548 140 Q546 158 525 165 Q500 170 478 162 Q462 150 460 130Z"
              fill="rgba(45,90,39,0.5)"
              stroke="rgba(212,160,23,0.4)"
              strokeWidth="1"
            />
            {/* Bali/NTT */}
            <path
              d="M350 160 Q358 155 370 157 Q375 163 368 168 Q358 170 350 166 Q346 163 350 160Z M375 162 Q388 158 395 163 Q397 170 388 173 Q378 174 375 168Z"
              fill="rgba(45,90,39,0.5)"
              stroke="rgba(212,160,23,0.4)"
              strokeWidth="1"
            />

            {/* Connection lines with animation */}
            <motion.line
              x1="115" y1="140" x2="260" y2="158"
              stroke="rgba(212,160,23,0.25)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line
              x1="260" y1="145" x2="350" y2="95"
              stroke="rgba(74,140,65,0.25)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.line
              x1="360" y1="95" x2="490" y2="148"
              stroke="rgba(212,160,23,0.2)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Node dots */}
            <g filter="url(#glow)">
              <circle cx="115" cy="140" r="5" fill="#7ab648" opacity="0.9" />
              <circle cx="260" cy="158" r="5" fill="#d4a017" opacity="0.9" />
              <circle cx="360" cy="95" r="5" fill="#7ab648" opacity="0.9" />
              <circle cx="490" cy="148" r="4" fill="#d4a017" opacity="0.7" />
              <circle cx="360" cy="163" r="3" fill="#7ab648" opacity="0.7" />
              <circle cx="430" cy="107" r="3" fill="#c0612a" opacity="0.7" />
            </g>

            {/* Pulse rings */}
            <motion.circle
              cx="115" cy="140" r="5"
              fill="none"
              stroke="#7ab648"
              strokeWidth="1"
              opacity="0.6"
              animate={{
                r: [5, 18],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.circle
              cx="260" cy="158" r="5"
              fill="none"
              stroke="#d4a017"
              strokeWidth="1"
              opacity="0.6"
              animate={{
                r: [5, 18],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.7,
              }}
            />
            <motion.circle
              cx="360" cy="95" r="5"
              fill="none"
              stroke="#7ab648"
              strokeWidth="1"
              opacity="0.6"
              animate={{
                r: [5, 16],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.2,
              }}
            />

            {/* Labels */}
            <text x="80" y="192" fill="rgba(200,182,122,0.4)" fontSize="8" fontFamily="monospace" letterSpacing="1">SUMATRA</text>
            <text x="230" y="188" fill="rgba(200,182,122,0.4)" fontSize="8" fontFamily="monospace" letterSpacing="1">JAWA</text>
            <text x="335" y="48" fill="rgba(200,182,122,0.4)" fontSize="8" fontFamily="monospace" letterSpacing="1">KALIMANTAN</text>
            <text x="460" y="182" fill="rgba(200,182,122,0.4)" fontSize="8" fontFamily="monospace" letterSpacing="1">PAPUA</text>
          </svg>

          {/* Floating data cards */}
          {dataCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`absolute ${card.position} bg-[rgba(44,31,14,0.9)] border border-[rgba(212,160,23,0.3)] backdrop-blur-xl p-4 min-w-[150px] ${i === 0 ? 'animate-float' : i === 1 ? 'animate-float-delay-1' : 'animate-float-delay-2'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
            >
              <div className="absolute top-[-1px] left-5 w-10 h-[2px] bg-[#d4a017]" />
              <div className="font-[var(--font-dm-mono)] text-[9px] tracking-[0.2em] uppercase text-[#7ab648] mb-1">
                {card.label}
              </div>
              <div className="font-[var(--font-playfair)] text-[28px] font-bold text-[#f0be2a] leading-none">
                {card.value}
              </div>
              <div className="text-[11px] text-[#c8b67a] mt-0.5">
                {card.unit}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 border-t border-[rgba(245,230,192,0.06)] grid grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="p-6 md:p-7 border-r border-[rgba(245,230,192,0.06)] last:border-r-0 hover:bg-[rgba(245,230,192,0.06)] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
          >
            <div className="font-[var(--font-playfair)] text-[clamp(28px,3vw,36px)] font-bold text-[#f0be2a] leading-none">
              {stat.num}
            </div>
            <div className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#c8b67a] mt-1.5">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
