"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Shield,
  Truck,
  Plane,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const trustPoints = [
  {
    icon: Shield,
    label: "Commercial-Grade Cleaning",
    desc: "Professional-grade soaps and equipment built for heavy-duty fleet work.",
  },
  {
    icon: Sparkles,
    label: "Detail-Oriented Process",
    desc: "Every surface, seam, and panel cleaned to exacting standards.",
  },
  {
    icon: Award,
    label: "Professional Appearance Standards",
    desc: "Your fleet reflects your brand — we make sure it looks the part.",
  },
  {
    icon: Plane,
    label: "Fleet & Aviation Focused",
    desc: "Specialized experience with armored vehicles and private aircraft.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Armored Truck Fleet Washing",
    description:
      "Specialized exterior cleaning for armored vehicle fleets serving banks, credit unions, and financial institutions. We understand the security and scheduling requirements of your operations.",
    benefits: ["Secure on-site service", "Scheduled recurring washes", "Fleet account pricing"],
  },
  {
    icon: Shield,
    title: "Commercial Fleet Cleaning",
    description:
      "Full exterior cleaning programs for commercial vehicle fleets of any size. We service fleets on a one-time or recurring basis with flexible scheduling.",
    benefits: ["Any fleet size welcome", "Flexible scheduling", "Consistent results"],
  },
  {
    icon: Plane,
    title: "Private Aircraft Exterior Cleaning",
    description:
      "Premium exterior washing for business jets, turboprops, and private aircraft. Surface-safe methods that protect aircraft finishes while delivering immaculate results.",
    benefits: ["Aviation-safe products", "Fuselage & wing cleaning", "FBO-compatible service"],
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    title: "Fleet Operations Manager",
    company: "First Capital Armored",
    quote:
      "Now Fleet Service has completely changed our maintenance schedule. Our armored trucks look professional at every stop. Reliable, thorough, and easy to work with — exactly what we needed.",
    rating: 5,
  },
  {
    name: "Sandra L.",
    title: "Director of Operations",
    company: "Regional Banking Group",
    quote:
      "We've used other services before, but nothing compares to the attention to detail. They understand our security needs and never disrupt our fleet schedule. Highly recommended.",
    rating: 5,
  },
  {
    name: "James R.",
    title: "Private Aircraft Owner",
    company: "Independent",
    quote:
      "Had my Cessna Citation cleaned before a client flight and the results were outstanding. Immaculate finish, professional crew, and they were done on time. Will be using them regularly.",
    rating: 5,
  },
];

const stats = [
  { value: "200+", label: "Vehicles Serviced" },
  { value: "98%", label: "Client Retention" },
  { value: "5★", label: "Average Rating" },
  { value: "3+", label: "Years Experience" },
];

const galleryPreviews = [
  { bg: "from-graphite to-richblack", icon: "🚐", label: "Armored Fleet Detail" },
  { bg: "from-[#1A1200] to-richblack", icon: "🚛", label: "Commercial Fleet Wash" },
  { bg: "from-[#001A1A] to-richblack", icon: "✈️", label: "Aircraft Exterior Clean" },
  { bg: "from-[#0A0F1A] to-richblack", icon: "✨", label: "Before & After" },
];

export default function HomePage() {
  return (
    <div className="bg-charcoal">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-richblack">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>

        {/* Gold glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] opacity-[0.08] blur-[120px] rounded-full"
          style={{ background: "linear-gradient(135deg, #C8A96B, #A8843E)" }}
        />

        {/* Decorative circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full opacity-40"></div>
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/8 rounded-full opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-gold/8 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                <span className="text-gold text-xs font-body font-semibold tracking-[0.15em] uppercase">
                  Premium Fleet & Aviation Cleaning
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.08] text-softwhite mb-6"
              >
                Professional Fleet{" "}
                <span className="text-gold-gradient">Cleaning</span> for
                Armored Vehicles & Private Aircraft
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted font-body text-lg leading-relaxed mb-10 max-w-xl"
              >
                Now Fleet Service delivers premium exterior cleaning solutions
                for armored truck fleets, commercial vehicles, and private
                aircraft. Our service is built on reliability, precision, and a
                commitment to immaculate results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/quote" className="btn-gold">
                  Request a Quote
                  <ChevronRight size={15} />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Schedule Service
                  <ArrowRight size={15} />
                </Link>
                <a href="tel:+(973) 405 1291" className="btn-ghost">
                  <Phone size={15} />
                  Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                {[
                  "Reliable Scheduling",
                  "Detail-Focused Service",
                  "Professional Results",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-gold" />
                    <span className="text-muted/80 text-sm font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Visual card stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* Main card */}
              <div className="premium-card p-8 relative">
                <div className="text-center py-8">
                  <div className="text-8xl mb-4 opacity-60">🚛</div>
                  <p className="text-muted/50 text-xs uppercase tracking-widest font-body">
                    Fleet Service Photo Placeholder
                  </p>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-charcoal border border-gold/25 rounded-xl px-5 py-3 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="text-gold fill-gold"
                        />
                      ))}
                    </div>
                    <span className="text-softwhite text-xs font-body font-semibold">
                      5-Star Rated Service
                    </span>
                  </div>
                </div>
                {/* Floating badge 2 */}
                <div className="absolute -top-4 -right-4 bg-gold rounded-xl px-4 py-2.5 shadow-gold">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-richblack" />
                    <span className="text-richblack text-xs font-body font-bold uppercase tracking-wide">
                      Trusted Since 2021
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="premium-card p-4 text-center"
                  >
                    <p className="text-gold font-display font-bold text-lg">
                      {s.value}
                    </p>
                    <p className="text-muted/70 text-[10px] font-body uppercase tracking-wide leading-tight mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent"></div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-graphite border-y border-gold/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <point.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-softwhite font-body font-semibold text-sm mb-0.5">
                    {point.label}
                  </p>
                  <p className="text-muted/70 text-xs font-body leading-snug">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-pad bg-charcoal relative overflow-hidden">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.04] blur-[100px] rounded-full"
          style={{ background: "#C8A96B" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="premium-card p-8 relative">
                <div
                  className="h-64 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1A1F26 0%, #0A0A0A 100%)",
                  }}
                >
                  <div className="text-center opacity-50">
                    <div className="text-7xl mb-3">🛡️</div>
                    <p className="text-muted/50 text-xs uppercase tracking-widest font-body">
                      Owner / Team Photo Placeholder
                    </p>
                  </div>
                </div>
                {/* Accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/8 border border-gold/15"></div>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3">
                About Now Fleet Service
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-softwhite leading-tight mb-2">
                A Higher Standard of{" "}
                <span className="text-gold-gradient">Fleet Care</span>
              </h2>
              <span className="gold-line block mb-6"></span>
              <p className="text-muted font-body text-base leading-relaxed mb-6">
                At Now Fleet Service, we deliver a higher standard of fleet care
                through professional-grade soaps, precision brushing methods,
                high-pressure rinsing, and close attention to the details others
                overlook. Every vehicle and aircraft we service is cleaned to
                reflect professionalism, reliability, and excellence.
              </p>
              <p className="text-muted font-body text-base leading-relaxed mb-8">
                Founded on the principles of dependability and precision, we
                serve banking institutions, commercial fleet operators, and
                private aviation clients who demand the best for their assets.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Dependable Scheduling" },
                  { icon: Sparkles, text: "Precision Detailing" },
                  { icon: Users, text: "Client-Focused Service" },
                  { icon: Award, text: "Premium Standards" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={16} className="text-gold flex-shrink-0" />
                    <span className="text-muted/90 text-sm font-body">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-gold">
                Learn Our Story
                <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="What We Do"
            title="Premium Services for"
            titleHighlight="Demanding Clients"
            subtitle="From armored bank fleets to private aircraft, we deliver consistent, professional exterior cleaning that keeps your assets looking their best."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                index={i}
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-ghost">
              View All Services
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER ─── */}
      <section className="section-pad bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof of Work"
            title="See the"
            titleHighlight="Difference"
            subtitle="Drag the slider to see a before-and-after transformation from a recent fleet cleaning service."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider height={420} />
            <p className="text-muted/40 text-xs font-body text-center mt-4 italic">
              Replace with actual before/after photography for maximum impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="section-pad bg-graphite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured"
            titleHighlight="Work Gallery"
            subtitle="A selection of recent fleet and aircraft cleaning projects."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {galleryPreviews.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="premium-card overflow-hidden group cursor-pointer"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${item.bg} flex items-center justify-center relative`}
                >
                  <div className="text-4xl opacity-40 group-hover:opacity-60 transition-opacity">
                    {item.icon}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-softwhite text-xs font-body font-semibold group-hover:text-gold transition-colors">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery" className="btn-ghost">
              View Full Gallery
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What Our Clients"
            titleHighlight="Say"
            subtitle="Trusted by fleet managers, banking institutions, and private aircraft owners."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-ghost">
              Read All Reviews
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title="Ready to Elevate Your Fleet's Appearance?"
        subtitle="Request a custom quote today and find out why fleet managers and aviation clients trust Now Fleet Service for consistent, professional results."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="(973) 405 1291"
        secondaryHref="tel:+(973) 405 1291"
      />
    </div>
  );
}
