"use client";

import {
  motion,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const heroStats = [
  { num: 34, suffix: "", label: "Provinsi" },
  { num: 180, suffix: "K+", label: "Petani terdaftar" },
  { num: 2.1, suffix: "T", label: "Volume transaksi (IDR)", decimals: 1 },
  { num: 99.9, suffix: "%", label: "Operasional", decimals: 1 },
];

const systemMetrics = [
  { label: "Transaksi aktif", value: 2847, suffix: "", unit: "Hari ini" },
  {
    label: "Stok terpantau",
    value: 18.4,
    suffix: "K",
    unit: "Ton",
    decimals: 1,
  },
  {
    label: "Waktu penyelesaian",
    value: 0.4,
    suffix: "s",
    unit: "Rata-rata",
    decimals: 1,
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 1500;
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (value - startValue) * easeOut;
        
        setDisplayValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, hasAnimated]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString("id-ID");

  return (
    <span ref={ref}>
      {formattedValue}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 items-start px-6 md:px-[60px] pt-[140px] pb-0">
      {/* Content - Left aligned, dominant */}
      <motion.div
        className="relative z-10 lg:col-span-7 pt-4 sm:pt-8 lg:pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Label - Inter, sentence case */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-[#111827]" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">
            Infrastruktur rantai pasok pangan nasional
          </span>
        </div>

        {/* Headline - Satoshi (Space Grotesk), lowercase, geometric, authoritative */}
        <h1 className="font-[family-name:var(--font-satoshi)] text-[clamp(28px,6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] text-[#111827] mb-6 sm:mb-8 lowercase">
          satu ekosistem
          <br />
          seluruh rantai pangan
        </h1>

        {/* Description - Inter, sentence case, generous line height */}
        <p className="font-[family-name:var(--font-inter)] text-[14px] sm:text-[15px] text-[#374151] leading-[1.6] max-w-[440px] mb-8 sm:mb-10">
          PANORA menyatukan arus barang, arus uang, dan arus data dalam satu
          infrastruktur blockchain — menghubungkan petani, koperasi,
          transporter, dan pembeli di seluruh Nusantara.
        </p>

        {/* CTAs - Minimal, rectangular */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-12 sm:mb-20">
          <a
            href="#daftar"
            className="inline-flex items-center justify-center h-12 sm:h-11 px-6 sm:px-7 bg-[#FF6B00] text-white font-[family-name:var(--font-inter)] text-[12px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#E55F00] transition-colors duration-150"
          >
            Bergabung sekarang
          </a>
          <a
            href="#cara-kerja"
            className="inline-flex items-center justify-center h-12 sm:h-11 px-6 sm:px-7 border border-[#111827] text-[#111827] font-[family-name:var(--font-inter)] text-[12px] sm:text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-[#111827] hover:text-white transition-colors duration-150"
          >
            Lihat cara kerja
          </a>
        </div>
      </motion.div>

      {/* System Metrics Panel - Data module style */}
      <motion.div
        className="relative z-10 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="border border-[#111827] bg-white">
          {/* Module Header */}
          <div className="border-b border-[#E5E7EB] px-5 py-4 flex items-center justify-between bg-[#F3F4F6]">
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#6B7280]">
              Status sistem
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#10B981]" />
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#6B7280]">
                Beroperasi
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="divide-y divide-[#E5E7EB]">
            {systemMetrics.map((metric) => (
              <div key={metric.label} className="px-5 py-4">
                <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mb-1">
                  {metric.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-satoshi)] text-[28px] font-bold text-[#111827] leading-none">
                    <AnimatedNumber
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                    />
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#9CA3AF]">
                    {metric.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Module Footer */}
          <div className="border-t border-[#E5E7EB] px-5 py-3 bg-[#F3F4F6]">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.05em] text-[#6B7280]">
                Solana mainnet
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.05em] text-[#111827]">
                v2.1.4
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Bar - Full width, structured grid */}
      <motion.div
        className="col-span-full border-t border-[#111827] mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 sm:px-6 py-6 sm:py-8 lg:px-8 lg:py-10 border-r border-[#E5E7EB] last:border-r-0 hover:bg-[#F3F4F6] transition-colors ${
                i >= 2 ? "border-t lg:border-t-0 border-[#E5E7EB]" : ""
              }`}
            >
              <div className="font-[family-name:var(--font-satoshi)] text-[clamp(24px,5vw,40px)] font-bold text-[#111827] leading-none tracking-[-0.02em]">
                <AnimatedNumber
                  value={stat.num}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
