import type { Metadata } from "next";
import { Truck, Shield, Plane, RefreshCw, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium fleet and aircraft exterior cleaning services — armored trucks, commercial fleets, private aircraft, and recurring maintenance programs.",
};

const services = [
  {
    id: "armored-trucks",
    icon: Truck,
    eyebrow: "Core Service",
    title: "Armored Truck Fleet Washing",
    description:
      "We specialize in professional exterior cleaning for armored vehicle fleets serving banks, credit unions, and financial institutions. Our service is structured around your security protocols and operational schedules.",
    longDescription:
      "Armored trucks are among the most visible assets your institution operates. They represent your organization at every stop — from branch locations to public roadways. Dirty, poorly maintained vehicles undermine the professional image that financial institutions depend on. Our armored truck fleet washing service is designed specifically for the unique needs of security vehicle operations: we coordinate with your dispatch, work within your scheduling constraints, and deliver consistent, immaculate results every time.",
    benefits: [
      "Scheduled service around your fleet's operational calendar",
      "Secure on-site service at your facility",
      "Full exterior wash including door panels, glass, and trim",
      "Fleet account pricing for ongoing service contracts",
      "Undercarriage rinse to remove road grime and corrosive materials",
      "Professional-grade soaps safe for all exterior surfaces",
    ],
    idealFor: "Banks, credit unions, financial institutions, and armored transport companies",
    accent: "from-[#1A1200] to-richblack",
    iconBg: "bg-gold/10",
  },
  {
    id: "commercial-fleet",
    icon: Shield,
    eyebrow: "Commercial Service",
    title: "Commercial Fleet Exterior Cleaning",
    description:
      "Full exterior cleaning programs for commercial vehicle fleets of any size. We service fleets on a one-time or recurring basis with flexible scheduling that works around your operations.",
    longDescription:
      "A clean fleet signals professionalism. Whether you operate 5 vehicles or 50, your fleet is a rolling representation of your business. Our commercial fleet cleaning service handles vehicles of all sizes — sedans, SUVs, vans, trucks, and specialized vehicles — with the same thorough, professional approach. We build custom service plans based on your fleet size, vehicle types, and how often service is needed to maintain your standards.",
    benefits: [
      "Scalable service for any fleet size",
      "Flexible weekly, bi-weekly, or monthly scheduling",
      "Consistent results across your entire fleet",
      "Corporate account billing available",
      "Environmentally responsible cleaning methods",
      "Service at your facility or designated location",
    ],
    idealFor: "Corporate fleets, delivery companies, government agencies, and commercial operators",
    accent: "from-graphite to-richblack",
    iconBg: "bg-gold/10",
  },
  {
    id: "aircraft",
    icon: Plane,
    eyebrow: "Aviation Service",
    title: "Private Aircraft Exterior Cleaning",
    description:
    "Coming soon — Now Fleet Services is expanding into premium exterior cleaning for private aircraft. Contact us to get on our priority list.",
    longDescription:
      "Now Fleet Services is actively expanding into private aircraft exterior cleaning. With over 20 years of fleet maintenance experience, we are developing specialized aviation cleaning programs for business jets, turboprops, and private aircraft. If you are interested in being one of our first aviation clients, contact us today to discuss your needs and get priority scheduling when we launch.",
    benefits: [
      "Aviation-safe, non-abrasive cleaning products only",
      "Full fuselage exterior wash and rinse",
      "Wing surface and leading edge cleaning",
      "Landing gear bay exterior cleaning",
      "Window and windscreen surface care",
      "FBO-compatible service scheduling",
    ],
    idealFor: "Private aircraft owners, charter operators, flight departments, and FBO clients",
    accent: "from-[#001A1A] to-richblack",
    iconBg: "bg-gold/10",
  },
  {
    id: "recurring",
    icon: RefreshCw,
    eyebrow: "Maintenance Program",
    title: "Recurring Fleet Maintenance Washes",
    description:
      "Structured recurring wash programs for fleet operators who need consistent, scheduled service without the hassle of booking each visit individually.",
    longDescription:
      "Our recurring maintenance programs are designed for fleet managers who want professional results on a set schedule without the administrative overhead. We set up a recurring service calendar aligned with your fleet's needs — weekly, bi-weekly, monthly, or custom intervals — and handle the rest. You get consistent, clean vehicles without managing the details yourself. Ideal for banks, commercial operators, and clients with ongoing presentation requirements.",
    benefits: [
      "Set-it-and-forget-it scheduling",
      "Priority booking for recurring clients",
      "Consistent quality maintained across every visit",
      "Locked-in pricing for ongoing contracts",
      "Flexible program adjustments as your fleet changes",
      "Dedicated point of contact for account management",
    ],
    idealFor: "Fleet managers, banking institutions, and any business with ongoing presentation requirements",
    accent: "from-[#0A0F1A] to-richblack",
    iconBg: "bg-gold/10",
  },
  {
    id: "detail",
    icon: Sparkles,
    eyebrow: "Premium Detail",
    title: "Detail-Focused Exterior Cleaning",
    description:
      "For clients who need more than a basic wash — our detail-focused exterior cleaning service addresses seam lines, trim, panels, glass, and all the surfaces that define the overall appearance of a vehicle or aircraft.",
    longDescription:
      "Some vehicles need more than a rinse. Our detail-focused exterior cleaning is a comprehensive service that goes beyond the basic wash to address every visible surface — door seams, trim moldings, glass edges, chrome accents, panel transitions, and the areas that standard washing misses. This service is ideal for vehicles preparing for important appearances, client-facing fleet assets, and aircraft that require presentation-level cleanliness.",
    benefits: [
      "Comprehensive surface-level exterior cleaning",
      "Attention to seams, trim lines, and panel edges",
      "Streak-free glass and mirror treatment",
      "Chrome and metal surface cleaning",
      "Ideal as preparation for events or inspections",
      "Available as a standalone or add-on service",
    ],
    idealFor: "High-profile fleet assets, aircraft before client flights, and vehicles requiring presentation-level results",
    accent: "from-[#1A0A00] to-richblack",
    iconBg: "bg-gold/10",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Our Services"
        title="Professional Cleaning for"
        titleHighlight="Every Asset"
        subtitle="From armored bank fleets to private aircraft — we deliver specialized exterior cleaning programs built around your operations and standards."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services List */}
      <section className="section-pad bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="premium-card overflow-hidden"
              >
                <div className={`grid lg:grid-cols-5 gap-0`}>
                  {/* Visual accent */}
                  <div
                    className={`lg:col-span-1 bg-gradient-to-br ${service.accent} flex items-center justify-center p-10 min-h-[200px]`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-3">
                        <service.icon size={28} className="text-gold" />
                      </div>
                      <p className="text-gold text-[10px] font-body font-semibold uppercase tracking-widest">
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4 p-8 lg:p-10">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-softwhite mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted font-body text-sm leading-relaxed mb-4">
                      {service.longDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <p className="text-gold text-xs font-body font-semibold uppercase tracking-wider mb-3">
                          Service Includes
                        </p>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-muted text-sm font-body"
                            >
                              <CheckCircle
                                size={14}
                                className="text-gold flex-shrink-0 mt-0.5"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-gold text-xs font-body font-semibold uppercase tracking-wider mb-3">
                          Ideal For
                        </p>
                        <p className="text-muted font-body text-sm leading-relaxed bg-gold/5 border border-gold/15 rounded-xl p-4">
                          {service.idealFor}
                        </p>
                        <div className="mt-5">
                          <Link href="/quote" className="btn-gold text-xs">
                            Request a Quote
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Simple"
            titleHighlight="Process"
            subtitle="Getting your fleet serviced is straightforward. Here's what to expect."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Request a Quote", desc: "Fill out our quick quote form with your fleet details and preferred schedule." },
              { step: "02", title: "We Confirm Details", desc: "We review your request and follow up with a tailored service plan and pricing." },
              { step: "03", title: "We Show Up & Clean", desc: "Our team arrives on schedule and delivers a thorough, professional service." },
              { step: "04", title: "Ongoing Service", desc: "Set up a recurring program so your fleet is always clean without the hassle." },
            ].map((item) => (
              <div key={item.step} className="premium-card p-7 relative">
                <p className="font-display text-5xl font-bold text-gold/10 absolute top-5 right-5 leading-none select-none">
                  {item.step}
                </p>
                <p className="text-gold text-xs font-body font-semibold uppercase tracking-wider mb-3">
                  Step {item.step}
                </p>
                <h3 className="font-display text-lg font-semibold text-softwhite mb-3">
                  {item.title}
                </h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Schedule Service?"
        subtitle="Contact us today to discuss your fleet's needs and receive a custom quote."
        variant="gold"
      />
    </div>
  );
}
