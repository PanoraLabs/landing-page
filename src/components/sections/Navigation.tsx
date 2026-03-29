"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#pilar", label: "Ekosistem" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#persona", label: "Untuk Siapa" },
  { href: "#tech", label: "Teknologi" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-5 flex items-center justify-between border-b transition-all duration-300 ${
          isScrolled
            ? "bg-[#1a1208]/95 border-[rgba(245,230,192,0.12)] backdrop-blur-xl"
            : "bg-gradient-to-b from-[rgba(26,18,8,0.95)] to-transparent border-[rgba(245,230,192,0.06)]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <motion.div
            className="w-9 h-9 bg-[#d4a017] hex-clip flex items-center justify-center text-[#1a1208] font-bold text-sm animate-hex-pulse"
            whileHover={{ scale: 1.05 }}
          >
            P
          </motion.div>
          <span className="font-[var(--font-playfair)] text-xl font-bold tracking-[0.12em] text-[#f5e6c0] hidden sm:inline">
            PANORA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.15em] uppercase text-[#c8b67a] no-underline hover:text-[#f0be2a] transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
          <Button variant="nav" size="sm" asChild>
            <a href="#daftar">Mulai Sekarang</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#f5e6c0] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[#1a1208]/98 border-b border-[rgba(245,230,192,0.12)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-dm-mono)] text-sm tracking-[0.15em] uppercase text-[#c8b67a] no-underline hover:text-[#f0be2a] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="nav" size="default" asChild className="mt-4">
                <a href="#daftar" onClick={() => setIsMobileMenuOpen(false)}>
                  Mulai Sekarang
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
