"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  centered?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  centered = true,
}: PageHeroProps) {
  return (
    <section className="relative page-hero-bg pt-40 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>

      {/* Gold accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.07] blur-[80px] rounded-full"
        style={{ background: "linear-gradient(135deg, #C8A96B, #A8843E)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 text-xs font-body text-muted/60 mb-8 ${
              centered ? "justify-center" : ""
            }`}
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-gold/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-muted/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={centered ? "text-center" : ""}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gold text-xs font-body font-600 tracking-[0.2em] uppercase mb-4"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-softwhite leading-tight mb-6"
          >
            {title}{" "}
            {titleHighlight && (
              <span className="text-gold-gradient">{titleHighlight}</span>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`text-muted font-body text-lg leading-relaxed max-w-2xl ${
                centered ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider-gold absolute bottom-0 left-0 right-0"></div>
    </section>
  );
}
