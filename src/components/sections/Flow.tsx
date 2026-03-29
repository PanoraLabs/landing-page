"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const flowSteps = [
  {
    num: "01",
    title: "Petani daftar panen",
    desc: "Petani cukup memasukkan perkiraan hasil panen dan jadwalnya lewat aplikasi di ponsel. Datanya langsung tersimpan aman di sistem dan tidak bisa diubah sepihak.",
  },
  {
    num: "02",
    title: "Sertifikat panen digital",
    desc: "Panen masuk gudang ➔ Sertifikat digital terbit otomatis ➔ Siap jadi jaminan modal.",
  },
  {
    num: "03",
    title: "Panora-Match (Pencocokan otomatis)",
    desc: "Sistem pintar kami akan otomatis mempertemukan panen petani dengan pembeli. Transaksi dilakukan memakai patokan harga pasar yang terbaru dan adil.",
  },
  {
    num: "04",
    title: "Pengiriman terpantau",
    desc: "Sensor canggih yang memantau suhu barang selama di perjalanan. Jika ada barang yang rusak karena suhu tidak stabil, uang asuransi akan otomatis cair saat itu juga tanpa proses klaim yang ribet.",
  },
  {
    num: "05",
    title: "Pembayaran selesai",
    desc: "Barang diterima ➔ Uang cair otomatis ke rekening ➔ Kupon subsidi belanja aktif.",
  },
] as const;

export function Flow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="cara-kerja" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[80px] lg:py-[120px] bg-[#F3F4F6]"
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
            Alur sistem
          </span>
        </div>
        {/* H2 - SYNE, ALL CAPS */}
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827]">
          ALUR TRANSAKSI
        </h2>
      </motion.div>

      {/* Section Divider */}
      <div className="h-[2px] bg-[#FF6B00] mb-12" />

      {/* Pipeline Flow - Desktop Horizontal */}
      <motion.div 
        className="hidden lg:block"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid grid-cols-5 gap-0">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + 0.08 * index }}
            >
              {/* Connector line */}
              {index < flowSteps.length - 1 && (
                <div className="absolute top-8 left-full w-full h-[1px] bg-[#111827] z-0" />
              )}
              
              {/* Step Module */}
              <div className="border border-[#111827] bg-white relative z-10 h-full">
                {/* Step Header */}
                <div className="border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between bg-[#F9FAFB]">
                  <span className="font-[family-name:var(--font-syne)] text-base font-bold text-[#111827]">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <div className="px-4 py-5">
                  {/* H3 - Inter, sentence case */}
                  <h3 className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#111827] mb-2 tracking-[-0.01em] leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[12px] text-[#6B7280] leading-[1.5]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pipeline Flow - Mobile Vertical */}
      <motion.div 
        className="lg:hidden space-y-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {flowSteps.map((step, index) => (
          <motion.div
            key={step.num}
            className="border border-[#111827] bg-white"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + 0.08 * index }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-2 border-r border-[#E5E7EB] px-3 py-4 flex items-start justify-center bg-[#F9FAFB]">
                <span className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#111827]">
                  {step.num}
                </span>
              </div>
              <div className="col-span-10 px-4 py-4">
                <h3 className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#111827] mb-1 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[12px] text-[#6B7280] leading-[1.5]">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
