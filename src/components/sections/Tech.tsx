"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const techStack = [
  { category: "Smart Contract", technology: "Anchor Framework", status: "Produksi" },
  { category: "Aset Digital", technology: "Metaplex Core", status: "Produksi" },
  { category: "Oracle Harga", technology: "Pyth Network", status: "Produksi" },
  { category: "Identitas", technology: "Solana Mobile Stack", status: "Produksi" },
  { category: "Kompresi Data", technology: "State Compression", status: "Produksi" },
  { category: "Pembiayaan", technology: "DeFi Protocol Integration", status: "Produksi" },
] as const;

const networkMetrics = [
  { label: "TPS", value: 65000, prefix: "", suffix: "", decimals: 0, unit: "teoritis" },
  { label: "Biaya rata-rata", value: 0.00025, prefix: "$", suffix: "", decimals: 5, unit: "per transaksi" },
  { label: "Waktu blok", value: 400, prefix: "", suffix: "", decimals: 0, unit: "md" },
  { label: "Operasional", value: 99.9, prefix: "", suffix: "%", decimals: 1, unit: "" },
] as const;

function AnimatedNumber({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(latest).toLocaleString("id-ID"));
      }
    });
    return unsubscribe;
  }, [count, decimals]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function Tech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTps, setCurrentTps] = useState(3847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTps(3000 + Math.floor(Math.random() * 1500));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="tech" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[80px] lg:py-[120px] bg-[#111827]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px]">
        {/* Left Column - Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#9CA3AF]" />
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF]">
              Infrastruktur
            </span>
          </div>
          {/* H2 - Satoshi, title case */}
          <h2 className="font-[family-name:var(--font-satoshi)] text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-6">
            Blockchain Solana
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#9CA3AF] leading-[1.6] max-w-[400px] mb-10">
            Dipilih karena kapasitas 65.000 TPS dan biaya transaksi hampir nol. 
            Memungkinkan operasi frekuensi tinggi untuk ribuan pengguna bersamaan.
          </p>

          {/* Tech Stack Table - Data module style */}
          <div className="border border-[#374151]">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-[#374151] bg-[#1F2937]">
              <div className="col-span-4 px-4 py-3 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#9CA3AF]">
                Kategori
              </div>
              <div className="col-span-5 px-4 py-3 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#9CA3AF] border-l border-[#374151]">
                Teknologi
              </div>
              <div className="col-span-3 px-4 py-3 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#9CA3AF] border-l border-[#374151]">
                Status
              </div>
            </div>

            {/* Table Rows */}
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                className={`grid grid-cols-12 border-b border-[#374151] last:border-b-0 hover:bg-[#1F2937] transition-colors ${
                  index % 2 === 0 ? "bg-[#111827]" : "bg-[#0F1419]"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <div className="col-span-4 px-4 py-3 font-[family-name:var(--font-inter)] text-[12px] text-[#9CA3AF]">
                  {tech.category}
                </div>
                <div className="col-span-5 px-4 py-3 font-[family-name:var(--font-inter)] text-[13px] font-semibold text-white border-l border-[#374151]">
                  {tech.technology}
                </div>
                <div className="col-span-3 px-4 py-3 border-l border-[#374151]">
                  <span className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#10B981]">
                    <span className="w-1.5 h-1.5 bg-[#10B981]" />
                    {tech.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Network Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#9CA3AF]" />
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF]">
              Metrik jaringan
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="border border-[#374151] mb-8">
            <div className="grid grid-cols-2 divide-x divide-y divide-[#374151]">
              {networkMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="px-5 py-6 hover:bg-[#1F2937] transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.3 }}
                >
                  <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#9CA3AF] mb-2">
                    {metric.label}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-[family-name:var(--font-satoshi)] text-[28px] font-bold text-white tracking-[-0.02em]">
                      <AnimatedNumber 
                        value={metric.value} 
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#6B7280]">
                      {metric.unit}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Live TPS Monitor - Data module style */}
          <div className="border border-[#374151] p-6 bg-[#0F1419]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#9CA3AF]">
                Transaksi live
              </span>
              <span className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#10B981]">
                <span className="w-1.5 h-1.5 bg-[#10B981] animate-pulse" />
                Live
              </span>
            </div>
            <div className="font-[family-name:var(--font-satoshi)] text-[48px] font-bold text-white leading-none tracking-[-0.02em]">
              {currentTps.toLocaleString('id-ID')}
            </div>
            <div className="font-[family-name:var(--font-inter)] text-[11px] text-[#6B7280] mt-2">
              Transaksi per detik
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
