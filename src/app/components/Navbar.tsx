"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Sobre el Proyecto", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-lg border-b border-[#2e0068] shadow-[0_0_15px_#2e006850]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span
            className="text-2xl md:text-3xl font-extrabold tracking-widest"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              color: "#00D8FF",
              textShadow: "0 0 8px #00D8FF, 0 0 25px #00D8FF",
            }}
          >
            ARCADIAX
          </span>

          {/* línea brillante debajo del logo */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00D8FF] to-[#FF66CC] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "text-[#FF66CC]"
                    : "text-gray-300 hover:text-[#00D8FF]"
                }`}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                    active ? "w-full bg-[#FF66CC]" : "w-0 group-hover:w-full bg-[#00D8FF]"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00D8FF] hover:text-[#FF66CC] transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0014]/95 border-t border-[#2e0068] shadow-inner backdrop-blur-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#FF66CC]"
                    : "text-gray-300 hover:text-[#00D8FF]"
                }`}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
