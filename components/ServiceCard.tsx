"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  index?: number;
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  index = 0,
  href = "/services",
}: ServiceCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block premium-card p-7 h-full group">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 group-hover:border-gold/40 transition-all duration-300">
            <Icon size={22} className="text-gold" />
          </div>
          <div className="flex-1 pt-1">
            <h3 className="font-display text-lg font-semibold text-softwhite leading-snug group-hover:text-gold transition-colors duration-200">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-muted font-body text-sm leading-relaxed mb-5">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-2 mb-5">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-muted/80 text-xs font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-1 text-gold text-xs font-body font-semibold tracking-wide uppercase group-hover:gap-2 transition-all duration-200">
          Learn More
          <ChevronRight size={13} />
        </div>
      </Link>
    </motion.div>
  );
}
