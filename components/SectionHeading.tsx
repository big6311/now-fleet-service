"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-richblack" : "text-softwhite"
        }`}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gold-gradient">{titleHighlight}</span>
        )}
      </motion.h2>
      {eyebrow && (
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="gold-line inline-block origin-left mb-4"
          style={{ display: centered ? "block" : "block", margin: centered ? "0 auto 16px" : "0 0 16px" }}
        />
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`font-body text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-graphite" : "text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
