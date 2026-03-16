"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  rating?: number;
  index?: number;
}

export default function TestimonialCard({
  name,
  title,
  company,
  quote,
  rating = 5,
  index = 0,
}: TestimonialCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="premium-card p-7 flex flex-col"
    >
      {/* Quote icon */}
      <div className="mb-4">
        <Quote size={28} className="text-gold/25" fill="rgba(200,169,107,0.08)" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? "text-gold fill-gold" : "text-muted/30"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-muted font-body text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="divider-gold mb-5"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-richblack font-display font-bold text-sm flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #C8A96B, #A8843E)" }}
        >
          {initials}
        </div>
        <div>
          <p className="text-softwhite font-body font-semibold text-sm">{name}</p>
          <p className="text-muted/70 font-body text-xs">
            {title}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
