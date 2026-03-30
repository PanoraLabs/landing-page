"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pilars = [
  {
    number: "01",
    name: "PANORA-MATCH",
    headline: "Mesin pencocok permintaan & pasokan",
    description: "Sistem otomatis yang mencocokkan jadwal panen di berbagai wilayah dengan pola permintaan dari pembeli.",
    capabilities: [
      "Pencocokan pesanan antar wilayah",
      "Penentuan harga berbasis data pasar",
      "Sinkronisasi stok real-time",
      "Pengaturan pengiriman otomatis",
    ],
  },
  {
    number: "02",
    name: "PANORA-PAY",
    headline: "Pembiayaan & penyelesaian",
    description: "Sertifikat digital untuk barang di gudang bisa digunakan sebagai jaminan untuk mendapatkan pinjaman. Bantuan subsidi juga diberikan melalui sistem yang terprogram dengan baik.",
    capabilities: [
      "Penerbitan sertifikat digital gudang",
      "Integrasi dengan sistem pembiayaan",
      "Penyaluran subsidi terkontrol",
      "Pelunasan instan saat barang sampai",
    ],
  },
  {
    number: "03",
    name: "PANORA-LOG",
    headline: "Pemantauan logistik",
    description: "Data dari sensor IoT langsung tersimpan di sistem. Jika suhu tidak stabil selama perjalanan, klaim asuransi akan diproses otomatis tanpa ribet.",
    capabilities: [
      "Verifikasi sensor tersimpan di sistem",
      "Klaim asuransi otomatis",
      "Optimasi rute pengiriman",
      "Pelacakan GPS real-time",
    ],
  },
];

export function Pilar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="pilar" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[80px] lg:py-[120px] bg-[#F9FAFB]"
    >
      {/* Section Header - Left aligned */}
      <motion.div 
        className="mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-[#111827]" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">
            Modul ekosistem
          </span>
        </div>
        {/* H2 - Satoshi, title case */}
        <h2 className="font-[family-name:var(--font-satoshi)] text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#111827]">
          Infrastruktur Terpadu
        </h2>
      </motion.div>

      {/* Section Divider - Solar Flare accent */}
      <div className="h-[2px] bg-[#FF6B00] mb-12" />

      {/* Pilar Modules - Strict data module style */}
      <motion.div 
        className="border border-[#111827] bg-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {pilars.map((pilar, index) => (
          <motion.div
            key={pilar.number}
            className={`grid grid-cols-1 lg:grid-cols-12 ${
              index !== pilars.length - 1 ? "border-b border-[#E5E7EB]" : ""
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + 0.08 * index }}
          >
            {/* Module Number & ID */}
            <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] bg-[#F3F4F6]">
              <div className="font-[family-name:var(--font-satoshi)] text-[48px] font-bold text-[#E5E7EB] leading-none">
                {pilar.number}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#FF6B00] mt-2">
                {pilar.name}
              </div>
            </div>

            {/* Headline & Description */}
            <div className="lg:col-span-4 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              {/* H3 - Inter, sentence case, semibold */}
              <h3 className="font-[family-name:var(--font-inter)] text-lg font-semibold text-[#111827] mb-3 tracking-[-0.01em]">
                {pilar.headline}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#374151] leading-[1.6]">
                {pilar.description}
              </p>
            </div>

            {/* Capabilities */}
            <div className="lg:col-span-6 p-6 lg:p-8">
              <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-4">
                Kemampuan
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pilar.capabilities.map((cap, i) => (
                  <div 
                    key={i}
                    className="font-[family-name:var(--font-inter)] text-[13px] text-[#374151] flex items-start gap-2"
                  >
                    <span className="text-[#FF6B00] flex-shrink-0 text-[10px] mt-1">→</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
