"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
  { label: "Smart Contract", name: "Anchor Framework", badge: "Solana", badgeColor: "#9945ff", badgeBorder: "rgba(153,69,255,0.4)" },
  { label: "Digital Asset", name: "Metaplex Core", badge: "On-Chain", badgeColor: "#7ab648", badgeBorder: "rgba(74,140,65,0.4)" },
  { label: "Price Oracle", name: "Pyth Network", badge: "Real-time", badgeColor: "#7ab648", badgeBorder: "rgba(74,140,65,0.4)" },
  { label: "Identity", name: "Solana Mobile Stack", badge: "dApp", badgeColor: "#9945ff", badgeBorder: "rgba(153,69,255,0.4)" },
  { label: "Data Layer", name: "State Compression", badge: "Low Cost", badgeColor: "#d4a017", badgeBorder: "rgba(212,160,23,0.4)" },
  { label: "Financing", name: "DeFi Protocol Mitra", badge: "DeFi", badgeColor: "#d4a017", badgeBorder: "rgba(212,160,23,0.4)" },
];

const txTypes = [
  "MATCH_ORDER",
  "MINT_pNFT",
  "REDEEM_SUB",
  "LOG_SENSOR",
  "SETTLE_PAY",
  "BACKLOAD_BID",
];

const txColors: Record<string, string> = {
  MATCH_ORDER: "#7ab648",
  MINT_pNFT: "#d4a017",
  REDEEM_SUB: "#d4a017",
  LOG_SENSOR: "#c0612a",
  SETTLE_PAY: "#7ab648",
  BACKLOAD_BID: "#c0612a",
};

interface BlockData {
  type1: string;
  type2: string;
  hash1: string;
  hash2: string;
}

function randHash() {
  return Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
}

export function Tech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [tps, setTps] = useState(3847);

  useEffect(() => {
    const buildViz = () => {
      const newBlocks: BlockData[] = [];
      for (let i = 0; i < 3; i++) {
        const t1 = txTypes[Math.floor(Math.random() * txTypes.length)];
        const t2 = txTypes[Math.floor(Math.random() * txTypes.length)];
        newBlocks.push({ type1: t1, type2: t2, hash1: randHash(), hash2: randHash() });
      }
      setBlocks(newBlocks);
    };

    buildViz();
    const interval = setInterval(buildViz, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps(3000 + Math.floor(Math.random() * 1500));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="tech" 
      ref={ref}
      className="relative px-6 md:px-[60px] py-[120px] bg-[#2c1f0e] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center"
    >
      {/* Left Column - Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-[#d4a017]">//</span>
          <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase text-[#7ab648]">
            Infrastruktur
          </span>
        </div>
        <h2 className="font-[var(--font-playfair)] text-[clamp(36px,3.5vw,54px)] font-black leading-[1.1] mb-6">
          Ditenagai
          <br />
          <em className="text-[#d4a017] not-italic">Solana</em>
        </h2>
        <p className="text-[15px] text-[#c8b67a] leading-[1.7] max-w-[400px] mb-12">
          Dipilih karena throughput 65.000 TPS dan biaya transaksi
          mendekati nol — memungkinkan ribuan petani bertransaksi
          tanpa hambatan biaya gas.
        </p>

        {/* Tech Stack Items */}
        <div className="flex flex-col gap-[2px]">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="group grid grid-cols-[140px_1fr_auto] items-center gap-6 px-7 py-6 bg-[#1a1208] border-l-2 border-transparent hover:bg-[#3d2c12] hover:border-l-[#d4a017] transition-all duration-[250ms]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.2em] uppercase text-[#c8b67a]">
                {tech.label}
              </span>
              <span className="font-[var(--font-playfair)] text-lg font-bold">
                {tech.name}
              </span>
              <span 
                className="font-[var(--font-dm-mono)] text-[9px] tracking-[0.15em] px-2.5 py-1 border"
                style={{ 
                  color: tech.badgeColor, 
                  borderColor: tech.badgeBorder 
                }}
              >
                {tech.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Column - Blockchain Visualization */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-[#d4a017]">//</span>
            <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase text-[#7ab648]">
              Live Blockchain Feed
            </span>
          </div>
        </div>

        {/* Blockchain Blocks */}
        <div className="flex flex-col gap-3 mb-6">
          {blocks.map((block, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              <motion.div 
                className="flex-1 p-4 bg-[#1a1208] border border-[rgba(245,230,192,0.12)] font-[var(--font-dm-mono)] text-[9px] text-[#c8b67a] tracking-[0.1em] hover:border-[#d4a017] hover:bg-[#3d2c12] hover:text-[#f0be2a] transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: rowIndex * 0.1 }}
              >
                <div style={{ color: txColors[block.type1] || "#7ab648", fontSize: '10px', letterSpacing: '0.1em' }}>
                  {block.type1}
                </div>
                <div className="text-[8px] text-[rgba(200,182,122,0.4)] mt-1.5 break-all">
                  {block.hash1}...{randHash()}
                </div>
              </motion.div>
              <motion.div 
                className="flex-1 p-4 bg-[#1a1208] border border-[rgba(245,230,192,0.12)] font-[var(--font-dm-mono)] text-[9px] text-[#c8b67a] tracking-[0.1em] hover:border-[#d4a017] hover:bg-[#3d2c12] hover:text-[#f0be2a] transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: rowIndex * 0.1 + 0.05 }}
              >
                <div style={{ color: txColors[block.type2] || "#7ab648", fontSize: '10px', letterSpacing: '0.1em' }}>
                  {block.type2}
                </div>
                <div className="text-[8px] text-[rgba(200,182,122,0.4)] mt-1.5 break-all">
                  {block.hash2}...{randHash()}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Network Status Card */}
        <div className="mt-6 p-5 border border-[rgba(245,230,192,0.12)] bg-[#1a1208]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.15em] uppercase text-[#c8b67a]">
              Network Status
            </span>
            <span className="flex items-center gap-1.5 font-[var(--font-dm-mono)] text-[10px] text-[#7ab648]">
              <span className="w-1.5 h-1.5 bg-[#7ab648] rounded-full animate-blink" />
              LIVE
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-[var(--font-dm-mono)] text-[9px] text-[rgba(200,182,122,0.4)] tracking-[0.15em] uppercase mb-1">
                TPS
              </div>
              <div className="font-[var(--font-playfair)] text-2xl font-bold text-[#f0be2a]">
                {tps.toLocaleString('id')}
              </div>
            </div>
            <div>
              <div className="font-[var(--font-dm-mono)] text-[9px] text-[rgba(200,182,122,0.4)] tracking-[0.15em] uppercase mb-1">
                Avg Fee
              </div>
              <div className="font-[var(--font-playfair)] text-2xl font-bold text-[#7ab648]">
                $0.0003
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
