"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const flowSteps = [
  {
    num: "01",
    title: "Petani Daftar Panen",
    desc: "Estimasi volume, komoditas, dan jadwal panen tercatat on-chain via Solana Mobile Stack.",
  },
  {
    num: "02",
    title: "Koperasi Tokenisasi",
    desc: "Panen masuk gudang → mint pNFT sebagai Warehouse Receipt → siap jadi agunan DeFi.",
  },
  {
    num: "03",
    title: "Panora-Match",
    desc: "Engine mencocokkan supply petani dengan demand pembeli B2B berdasarkan harga oracle Pyth.",
  },
  {
    num: "04",
    title: "Logistik Termonitor",
    desc: "Sensor IoT merekam kondisi pengiriman. Anomali suhu langsung picu klaim asuransi otomatis.",
  },
  {
    num: "05",
    title: "Pembayaran Selesai",
    desc: "Konfirmasi penerimaan → pembayaran settle otomatis → subsidi voucher ter-redeem di kios resmi.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Flow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="cara-kerja" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[120px] bg-[#2c1f0e] overflow-hidden"
    >
      {/* Background decoration */}
      <div 
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
        }}
      />

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
              Alur Sistem
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(36px,3.5vw,54px)] font-black leading-[1.1]">
            Bagaimana
            <br />
            <em className="text-[#d4a017] not-italic">PANORA Bekerja</em>
          </h2>
        </div>
        <p className="max-w-[400px] text-[15px] text-[#c8b67a] leading-[1.7]">
          Dari ladang ke meja makan — setiap langkah tercatat,
          terverifikasi, dan transparan di atas blockchain Solana.
        </p>
      </motion.div>

      {/* Flow Steps */}
      <motion.div 
        className="relative mt-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Connecting line - visible on lg screens */}
        <div 
          className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #d4a017, #7ab648, #d4a017, transparent)',
            opacity: 0.4,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0">
          {flowSteps.map((step) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-5 relative group"
            >
              {/* Step number - hexagon */}
              <div 
                className="w-[72px] h-[72px] border border-[rgba(212,160,23,0.4)] hex-clip flex items-center justify-center mb-7 font-[var(--font-playfair)] text-2xl font-bold text-[#d4a017] relative bg-[#2c1f0e] group-hover:bg-[#d4a017] group-hover:text-[#1a1208] transition-all duration-300"
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-playfair)] text-base font-bold mb-2.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#c8b67a] leading-[1.6]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
