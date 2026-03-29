"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#pilar", label: "Ekosistem" },
  { href: "#cara-kerja", label: "Sistem" },
  { href: "#persona", label: "Pengguna" },
  { href: "#tech", label: "Infrastruktur" },
] as const;

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
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-4 flex items-center justify-between border-b transition-all duration-200 ${
          isScrolled
            ? "bg-[#F9FAFB]/95 border-[#E5E7EB]"
            : "bg-[#F9FAFB] border-[#E5E7EB]"
        }`}
      >
        {/* Logo Image */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="Panora"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation - Inter, sentence case */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[12px] font-medium tracking-[0.02em] text-[#6B7280] no-underline hover:text-[#111827] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Inter, sentence case */}
        <div className="hidden lg:block">
          <a
            href="#daftar"
            className="inline-flex items-center justify-center h-9 px-5 bg-[#FF6B00] text-white font-[family-name:var(--font-inter)] text-[11px] font-semibold tracking-[0.02em] no-underline hover:bg-[#E55F00] transition-colors duration-150"
          >
            Minta akses
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#111827] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu - Inter, sentence case */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 bg-[#F9FAFB] border-b border-[#E5E7EB] lg:hidden"
          >
            <div className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[13px] font-medium tracking-[0.02em] text-[#6B7280] no-underline hover:text-[#111827] transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#daftar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-10 px-5 bg-[#FF6B00] text-white font-[family-inter] text-[11px] font-semibold tracking-[0.02em] no-underline hover:bg-[#E55F00] transition-colors duration-150 mt-3"
              >
                Minta akses
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
