"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "gold";
}

export default function CTASection({
  title = "Ready to Elevate Your Fleet's Appearance?",
  subtitle = "Contact Now Fleet Service today for a customized cleaning plan tailored to your fleet size, schedule, and standards.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "Call Now",
  secondaryHref = "tel:+11234567890",
  variant = "dark",
}: CTASectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden section-pad ${
        variant === "gold"
          ? "bg-gold-gradient"
          : "bg-richblack"
      }`}
    >
      {/* Decorative */}
      {variant === "dark" && (
        <>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] opacity-[0.06] blur-[100px] rounded-full"
            style={{ background: "linear-gradient(135deg, #C8A96B, #A8843E)" }}
          />
          <div className="absolute inset-0 bg-grid opacity-20"></div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={`text-xs font-body font-semibold tracking-[0.2em] uppercase mb-4 ${
            variant === "gold" ? "text-richblack/60" : "text-gold"
          }`}
        >
          Get Started Today
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${
            variant === "gold" ? "text-richblack" : "text-softwhite"
          }`}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className={`font-body text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto ${
            variant === "gold" ? "text-richblack/70" : "text-muted"
          }`}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={primaryHref}
            className={`inline-flex items-center gap-2 justify-center font-body font-semibold text-xs tracking-[0.08em] uppercase rounded px-7 py-4 transition-all duration-250 ${
              variant === "gold"
                ? "bg-richblack text-gold hover:bg-graphite"
                : "btn-gold"
            }`}
          >
            {primaryLabel}
            <ChevronRight size={14} />
          </Link>
          <Link
            href={secondaryHref}
            className={`inline-flex items-center gap-2 justify-center font-body font-semibold text-xs tracking-[0.08em] uppercase rounded px-7 py-4 transition-all duration-250 ${
              variant === "gold"
                ? "border border-richblack/30 text-richblack hover:bg-richblack/10"
                : "btn-ghost"
            }`}
          >
            <Phone size={14} />
            {secondaryLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
