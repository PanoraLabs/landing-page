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
    <footer className="border-t border-[#E5E7EB] px-6 md:px-[60px] py-12 lg:py-16 bg-[#F9FAFB]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 mb-12">
        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-4">
            {/* Logo - SYNE, ALL CAPS */}
            <span className="font-[family-name:var(--font-syne)] text-xl font-extrabold tracking-[0.02em] text-[#111827]">
              PANORA
            </span>
          </a>
          <p className="font-[family-name:var(--font-inter)] text-[13px] text-[#6B7280] leading-[1.6] max-w-[280px] mb-4">
            Infrastruktur rantai pasok pangan nasional. Transaksi terverifikasi blockchain di seluruh Indonesia.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#10B981]" />
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase text-[#6B7280]">
              Beroperasi
            </span>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-4">
            Platform
          </h4>
          <ul className="space-y-2">
            {footerLinks.platform.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Participants */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-4">
            Pengguna
          </h4>
          <ul className="space-y-2">
            {footerLinks.participants.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mb-4">
            Perusahaan
          </h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#E5E7EB] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#9CA3AF]">
          © 2025 Panora. Hak cipta dilindungi.
        </p>
        <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#9CA3AF]">
          Solana · Anchor · Metaplex
        </p>
      </div>
    </footer>
  );
}
