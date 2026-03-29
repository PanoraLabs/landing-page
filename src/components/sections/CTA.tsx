"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const accessTypes = [
  { label: "Petani", desc: "Petani & pekebun" },
  { label: "Koperasi", desc: "Gudang & koperasi" },
  { label: "Pengirim", desc: "Penyedia logistik" },
  { label: "Pembeli", desc: "Pembelian perusahaan" },
] as const;

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="daftar" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[80px] lg:py-[120px] bg-[#F9FAFB]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
        {/* Left Column - Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#111827]" />
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">
              Permintaan akses
            </span>
          </div>
          {/* H2 - SYNE, ALL CAPS */}
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827] mb-6">
            AKSES PLATFORM
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#374151] leading-[1.6] max-w-[400px]">
            Bergabung dengan pengguna terverifikasi di infrastruktur rantai pasok pangan Indonesia.
          </p>
        </motion.div>

        {/* Right Column - Access Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Access Types List */}
          <div className="border border-[#111827] bg-white">
            {accessTypes.map((type, index) => (
              <motion.a
                key={type.label}
                href="#"
                className={`flex items-center justify-between px-6 py-5 hover:bg-[#F3F4F6] transition-colors group ${
                  index !== accessTypes.length - 1 ? "border-b border-[#E5E7EB]" : ""
                }`}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + 0.08 * index, duration: 0.3 }}
              >
                <div>
                  {/* H3 - Inter, sentence case */}
                  <h3 className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#111827] tracking-[-0.01em]">
                    {type.label}
                  </h3>
                  <div className="font-[family-name:var(--font-inter)] text-[12px] text-[#6B7280]">
                    {type.desc}
                  </div>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity">
                  Minta →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Enterprise Contact */}
          <div className="mt-6 border border-[#E5E7EB] px-6 py-4 bg-white">
            <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mb-1">
              Pertanyaan enterprise
            </div>
            <a 
              href="mailto:enterprise@panora.id"
              className="font-[family-name:var(--font-inter)] text-[14px] text-[#111827] hover:text-[#FF6B00] transition-colors"
            >
              enterprise@panora.id
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
