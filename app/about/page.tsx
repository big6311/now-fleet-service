import type { Metadata } from "next";
import { Shield, Clock, Star, Users, CheckCircle, Award, Target, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Now Fleet Service — our story, mission, and commitment to premium fleet and aircraft exterior cleaning.",
};

const values = [
  {
    icon: Shield,
    title: "Precision & Detail",
    desc: "Every vehicle and aircraft we clean is treated with the same high standard — no shortcuts, no overlooked surfaces.",
  },
  {
    icon: Clock,
    title: "Dependable Scheduling",
    desc: "We respect your operations. Our scheduling is consistent and reliable, so your fleet is always ready.",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    desc: "We measure our success by how your fleet looks when we're done. Immaculate results every time.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    desc: "We build lasting relationships with fleet managers and clients who need a service they can count on.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    desc: "Your needs drive our process. We adapt to your fleet's schedule, size, and specific requirements.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    desc: "Professional-grade products and methods that protect your assets while delivering superior cleanliness.",
  },
];

const milestones = [
  { year: "2024", event: "Founded Now Fleet Services LLC, bringing over 20 years of hands-on fleet maintenance and cleaning experience to every client we serve." },
  { year: "2025", event: "Expanded service offerings to commercial fleet operators and financial institutions across the Tri-State area and Florida." },
  { year: "2026", event: "Continuing to grow our client base and expanding into private aircraft exterior cleaning services." },
];

export default function AboutPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Our Story"
        title="Built on Precision,"
        titleHighlight="Driven by Standards"
        subtitle="Now Fleet Service was founded to deliver a higher level of care for the fleets and aircraft that represent your brand and operations."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* ─── MISSION ─── */}
      <section className="section-pad bg-charcoal relative overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] blur-[120px] rounded-full"
          style={{ background: "#C8A96B" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3">
                Our Mission
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-softwhite leading-tight mb-2">
                Exterior Cleaning at{" "}
                <span className="text-gold-gradient">Every Level</span>
              </h2>
              <span className="gold-line block mb-6"></span>
              <div className="space-y-5 text-muted font-body text-base leading-relaxed">
                <p>
                 Our mission at Now Fleet Services is to provide exceptional fleet maintenance 
                  and cleaning solutions that ensure armored vehicles and private aircraft operate 
                  safely, efficiently, and reliably. We strive to be a trusted partner to government 
                  and private organizations by delivering timely service, operational excellence, and 
                  unmatched attention to detail. 
                </p>
    
              </div>
            </div>

            {/* Owner section */}
            <div className="relative">
              <div className="premium-card p-8">
                <div
                  className="h-72 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #1A1F26 0%, #0A0A0A 100%)",
                  }}
                >
                  <div className="text-center opacity-40">
                    <div className="text-8xl mb-3">👤</div>
                    <p className="text-muted/50 text-xs uppercase tracking-widest font-body">
                      Owner Photo Placeholder
                    </p>
                  </div>
                </div>
                <div className="border-t border-gold/15 pt-5">
                  <p className="text-gold text-xs font-body font-semibold uppercase tracking-widest mb-1">
                    Founder & Owner
                  </p>
                  <h3 className="font-display text-xl font-bold text-softwhite mb-2">
                    [Owner Name]
                  </h3>
                  <p className="text-muted font-body text-sm leading-relaxed">
                    With years of experience in commercial fleet operations and
                    a passion for detail-oriented work, [Owner Name] founded Now
                    Fleet Service to provide the kind of professional,
                    dependable cleaning service that serious fleet operators and
                    aviation clients deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core"
            titleHighlight="Values"
            subtitle="Every decision we make is guided by these principles — from how we clean your vehicles to how we schedule your service."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <div
                key={val.title}
                className="premium-card p-7"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <val.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-softwhite mb-3">
                  {val.title}
                </h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-pad bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="How We've"
            titleHighlight="Grown"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-gold font-display font-bold text-[10px]">
                      {m.year.slice(-2)}
                    </span>
                  </div>
                  <div className="premium-card p-5 flex-1">
                    <p className="text-gold text-xs font-body font-semibold uppercase tracking-wider mb-1">
                      {m.year}
                    </p>
                    <p className="text-muted font-body text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STANDARDS ─── */}
      <section className="section-pad bg-graphite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3">
              Our Promise
            </p>
            <h2 className="font-display text-4xl font-bold text-softwhite mb-4">
              What You Can Always Expect
            </h2>
            <span className="gold-line mx-auto block mb-8"></span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Professional-grade cleaning products safe for your vehicles and aircraft",
                "Consistent results that meet commercial presentation standards",
                "Scheduling that works around your fleet operations",
                "Thorough cleaning from roof to undercarriage",
                "Respectful, professional service every visit",
                "Clear communication and easy quote process",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 premium-card p-4">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-muted font-body text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work With a Team That Cares About Your Fleet"
        subtitle="Let us show you what professional fleet care looks like. Contact us for a quote tailored to your needs."
      />
    </div>
  );
}
