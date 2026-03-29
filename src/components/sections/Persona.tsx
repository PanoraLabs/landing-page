"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const personas = [
  {
    role: "Petani",
    id: "01",
    name: "Petani & pekebun",
    desc: "Akses langsung ke pasar dengan harga yang jelas dan terjamin. Bantuan subsidi untuk kebutuhan produksi melalui aplikasi.",
    capabilities: [
      "Pendaftaran hasil panen",
      "Penukaran kupon subsidi",
      "Pembiayaan dengan jaminan digital",
      "Koneksi langsung ke pembeli",
    ],
  },
  {
    role: "Koperasi",
    id: "02",
    name: "Koperasi & gudang",
    desc: "Manajemen stok dengan sertifikat digital. Pelacakan anggota dan administrasi subsidi terintegrasi.",
    capabilities: [
      "Penerbitan sertifikat gudang",
      "Manajemen anggota & subsidi",
      "Jejak audit digital",
      "Integrasi sistem keuangan",
    ],
  },
  {
    role: "Pengirim",
    id: "03",
    name: "Penyedia logistik",
    desc: "Pemantauan armada real-time dengan verifikasi sensor. Klaim asuransi otomatis jika terjadi masalah.",
    capabilities: [
      "Pelacakan GPS & suhu",
      "Klaim asuransi otomatis",
      "Optimasi rute",
      "Penilaian reputasi digital",
    ],
  },
  {
    role: "Pembeli",
    id: "04",
    name: "Pembeli enterprise",
    desc: "Sumber komoditas terverifikasi dari seluruh Indonesia. Harga real-time berdasarkan data pasar.",
    capabilities: [
      "Pencarian pasokan multi-wilayah",
      "Harga terverifikasi data pasar",
      "Pelacakan pengiriman live",
      "Tagihan otomatis",
    ],
  },
];

export function Persona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="persona" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[80px] lg:py-[120px] bg-[#F9FAFB]"
    >
      {/* Section Header */}
      <motion.div 
        className="mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-[#111827]" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">
            Pengguna jaringan
          </span>
        </div>
        {/* H2 - SYNE, ALL CAPS */}
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827]">
          EMPAT KATEGORI PENGGUNA
        </h2>
      </motion.div>

      {/* Section Divider */}
      <div className="h-[2px] bg-[#FF6B00] mb-12" />

      {/* Persona Grid - 2x2 on desktop */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#111827]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {personas.map((persona, index) => (
          <motion.div
            key={persona.id}
            className="bg-white p-6 lg:p-8 hover:bg-[#F3F4F6] transition-colors"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + 0.08 * index }}
          >
            {/* Role & ID */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#FF6B00]">
                {persona.role}
              </span>
              <span className="font-[family-name:var(--font-syne)] text-[40px] font-bold text-[#E5E7EB] leading-none">
                {persona.id}
              </span>
            </div>

            {/* Name - Inter, sentence case */}
            <h3 className="font-[family-name:var(--font-inter)] text-base font-semibold text-[#111827] mb-3 tracking-[-0.01em]">
              {persona.name}
            </h3>

            {/* Description - Inter, sentence case */}
            <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#374151] leading-[1.6] mb-6">
              {persona.desc}
            </p>

            {/* Capabilities */}
            <div className="border-t border-[#E5E7EB] pt-4">
              <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mb-3">
                Kemampuan utama
              </div>
              <ul className="space-y-2">
                {persona.capabilities.map((cap, i) => (
                  <li 
                    key={i}
                    className="font-[family-name:var(--font-inter)] text-[12px] text-[#374151] flex items-start gap-2"
                  >
                    <span className="text-[#FF6B00] flex-shrink-0 text-[10px] mt-0.5">→</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
