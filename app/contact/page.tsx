import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Now Fleet Service — call, email, or fill out our contact form to schedule service or request a quote.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(973) 405 1291",
    sub: "Available 24/7",
    href: "tel:+(973) 405 1291",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nowfleetservicesllc@gmail.com",
    sub: "Typically respond within 24 hours",
    href: "mailto:nowfleetservicesllc@gmail.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Tri-State & Florida",
    sub: "On-site fleet service at your facility",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7",
    sub: "Flexible for commercial fleet accounts",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        titleHighlight="Now Fleet Service"
        subtitle="Reach out to discuss your fleet or aircraft cleaning needs. We respond promptly and are happy to answer any questions."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-pad bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-3">
                  Contact Information
                </p>
                <h2 className="font-display text-3xl font-bold text-softwhite leading-tight mb-2">
                  Let&rsquo;s Talk About Your Fleet
                </h2>
                <span className="gold-line block mb-5"></span>
                <p className="text-muted font-body text-sm leading-relaxed">
                  Tell us about your service needs and we&rsquo;ll get back to you promptly
                  with the next steps. Whether you have a 5-vehicle fleet or 50,
                  we&rsquo;re ready to build a program that works for you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="premium-card p-5 flex items-start gap-4 hover:border-gold/30 transition-all group block"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                          <info.icon size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-muted/70 text-xs font-body uppercase tracking-wider mb-0.5">
                            {info.label}
                          </p>
                          <p className="text-softwhite font-body font-semibold text-sm group-hover:text-gold transition-colors">
                            {info.value}
                          </p>
                          <p className="text-muted/60 text-xs font-body mt-0.5">{info.sub}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="premium-card p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                          <info.icon size={18} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-muted/70 text-xs font-body uppercase tracking-wider mb-0.5">
                            {info.label}
                          </p>
                          <p className="text-softwhite font-body font-semibold text-sm">
                            {info.value}
                          </p>
                          <p className="text-muted/60 text-xs font-body mt-0.5">{info.sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick response note */}
              <div className="premium-card p-5 border-gold/20">
                <div className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-softwhite font-body font-semibold text-sm mb-1">
                      Quick Response Guarantee
                    </p>
                    <p className="text-muted/80 font-body text-xs leading-relaxed">
                      We respond to all quote requests and messages within one business day.
                      For urgent scheduling, calling is the fastest option.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="premium-card p-8 md:p-10">
                <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-2">
                  Send a Message
                </p>
                <h3 className="font-display text-2xl font-bold text-softwhite mb-1">
                  Request Information or Schedule Service
                </h3>
                <p className="text-muted font-body text-sm mb-7">
                  Fill out the form below and we&rsquo;ll get back to you promptly with the next steps.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl border border-gold/10 h-56 flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1A1F26, #0A0A0A)" }}
          >
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="text-center relative z-10">
              <MapPin size={32} className="text-gold/40 mx-auto mb-3" />
              <p className="text-muted/50 font-body text-sm">
                Service Area Map — Metro Area & Surrounding Regions
              </p>
              <p className="text-muted/30 text-xs font-body mt-1">
                Replace with embedded Google Map for your service area
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
