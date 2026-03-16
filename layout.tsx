import type { Metadata } from "next";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote for fleet washing, commercial vehicle cleaning, or private aircraft exterior cleaning from Now Fleet Service.",
};

const whyQuote = [
  {
    icon: Shield,
    title: "Tailored to Your Fleet",
    desc: "Every quote is customized based on your fleet size, vehicle types, and service frequency.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We respond to all quote requests within one business day — often same day.",
  },
  {
    icon: Award,
    title: "No Obligation",
    desc: "A quote is just a starting point. No pressure, no obligation until you decide to move forward.",
  },
];

export default function QuotePage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Get a Custom Quote"
        title="Request Your"
        titleHighlight="Fleet Service Quote"
        subtitle="Tell us about your fleet or aircraft and we'll provide a customized service plan and pricing tailored to your needs."
        breadcrumbs={[{ label: "Request a Quote" }]}
      />

      <section className="section-pad bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3">
                  Why Request a Quote
                </p>
                <h2 className="font-display text-3xl font-bold text-softwhite leading-tight mb-2">
                  Custom Pricing for Your Exact Needs
                </h2>
                <span className="gold-line block mb-5"></span>
                <p className="text-muted font-body text-sm leading-relaxed">
                  Fleet cleaning isn&rsquo;t one-size-fits-all. The size of your fleet, vehicle
                  types, service frequency, and facility access all factor into our service plan.
                  That&rsquo;s why every quote we provide is built specifically for you.
                </p>
              </div>

              <div className="space-y-4">
                {whyQuote.map((item) => (
                  <div key={item.title} className="premium-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-softwhite font-body font-semibold text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="text-muted/80 font-body text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to include */}
              <div className="premium-card p-6">
                <p className="text-gold text-xs font-body font-semibold uppercase tracking-wider mb-4">
                  To Get the Most Accurate Quote
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Number of vehicles or aircraft",
                    "Vehicle types (armored trucks, fleet cars, aircraft model)",
                    "Your location or facility address",
                    "Preferred service frequency",
                    "Any special scheduling requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted text-xs font-body">
                      <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="premium-card p-8 md:p-10">
                <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-2">
                  Quote Request Form
                </p>
                <h3 className="font-display text-2xl font-bold text-softwhite mb-1">
                  Tell Us About Your Needs
                </h3>
                <p className="text-muted font-body text-sm mb-7">
                  Complete the form below and we&rsquo;ll get back to you with a custom service plan and pricing.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
