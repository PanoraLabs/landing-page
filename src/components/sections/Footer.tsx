"use client";

const footerLinks = {
  platform: [
    { label: "Mesin pencocok", href: "#" },
    { label: "Sistem pembayaran", href: "#" },
    { label: "Modul logistik", href: "#" },
    { label: "Dokumentasi API", href: "#" },
  ],
  participants: [
    { label: "Portal petani", href: "#" },
    { label: "Dashboard koperasi", href: "#" },
    { label: "Aplikasi pengirim", href: "#" },
    { label: "Antarmuka pembeli", href: "#" },
  ],
  company: [
    { label: "Tentang", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Mitra", href: "#" },
    { label: "Kontak", href: "#" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] px-4 sm:px-6 md:px-[60px] py-10 sm:py-12 lg:py-16 bg-[#F9FAFB]">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-16 mb-10 sm:mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <a href="#" className="inline-block mb-4">
            {/* Logo - SYNE, ALL CAPS */}
            <span className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-extrabold tracking-[0.02em] text-[#111827]">
              PANORA
            </span>
          </a>
          <p className="font-[family-name:var(--font-inter)] text-[12px] sm:text-[13px] text-[#6B7280] leading-[1.6] max-w-[280px] mb-4">
            Infrastruktur rantai pasok pangan nasional. Transaksi terverifikasi blockchain di seluruh Indonesia.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#10B981]" />
            <span className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-[#6B7280]">
              Beroperasi
            </span>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-3 sm:mb-4">
            Platform
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {footerLinks.platform.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[12px] sm:text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Participants */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-3 sm:mb-4">
            Pengguna
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {footerLinks.participants.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[12px] sm:text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-3 sm:mb-4">
            Perusahaan
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[12px] sm:text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#E5E7EB] pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
        <p className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] text-[#9CA3AF]">
          © 2025 Panora. Hak cipta dilindungi.
        </p>
        <p className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] text-[#9CA3AF]">
          Solana · Anchor · Metaplex
        </p>
      </div>
    </footer>
  );
}
