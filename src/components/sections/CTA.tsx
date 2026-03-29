"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ctaButtons = [
  { label: "Daftar sebagai Petani", variant: "default" as const },
  { label: "Daftar sebagai Koperasi", variant: "outline" as const },
  { label: "Daftar sebagai Transporter", variant: "outline" as const },
  { label: "Daftar sebagai Pembeli B2B", variant: "outline" as const },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="daftar" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[160px] text-center overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#7ab648] border border-[rgba(74,140,65,0.3)] px-5 py-2 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 bg-[#7ab648] rounded-full animate-blink" />
          Registrasi Terbuka
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="font-[var(--font-playfair)] text-[clamp(42px,5vw,72px)] font-black leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Jadilah Bagian
          <br />
          dari <em className="text-[#d4a017] not-italic">Revolusi</em>
          <br />
          Pangan Digital
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-[17px] text-[#c8b67a] max-w-[500px] mx-auto mb-15 leading-[1.7]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Bergabunglah dengan 180.000+ petani, koperasi, transporter, dan
          pembeli yang sudah membangun ekosistem pangan Nusantara bersama
          PANORA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {ctaButtons.map((btn, index) => (
            <motion.a
              key={btn.label}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className={`inline-flex items-center justify-center h-14 px-10 py-5 text-base font-medium whitespace-nowrap transition-all outline-none select-none ${
                btn.variant === "default"
                  ? "bg-[#d4a017] text-[#1a1208] hover:bg-[#f0be2a] btn-clip"
                  : "border border-[#d4a017]/50 text-[#c8b67a] hover:border-[#d4a017] hover:text-[#d4a017] btn-clip"
              }`}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
