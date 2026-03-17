"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo.png/image0.png"
                  alt="Now Fleet Services Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <div>
                <div className="text-softwhite font-display font-semibold text-base leading-tight tracking-wide">
                  Now Fleet
                </div>
                <div className="text-gold text-[10px] font-body tracking-[0.18em] uppercase">
                  Services
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold active"
                      : "text-muted hover:text-softwhite"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/quote"
                className="hidden lg:inline-flex btn-gold text-xs"
              >
                Request a Quote
                <ChevronRight size={14} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-muted hover:text-gold transition-colors p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-4 border-b border-gold/10 font-display text-xl ${
                      pathname === link.href ? "text-gold" : "text-softwhite"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-gold/50" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/quote" className="btn-gold w-full justify-center">
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
