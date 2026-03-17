import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { MessageSquare, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Now Fleet Service — fleet washing, aircraft cleaning, scheduling, and how to get started.",
};

const faqGeneral = [
  {
    question: "What types of vehicles do you service?",
    answer:
      "We service armored trucks, commercial fleet vehicles (sedans, SUVs, vans, trucks), and private aircraft. Our primary specialization is armored vehicle fleets for financial institutions and private aircraft exterior cleaning, but we also serve commercial vehicle fleets of all sizes. If you have a vehicle type you're unsure about, reach out and we'll let you know if we can help.",
  },
  {
    question: "Do you offer recurring fleet wash services?",
    answer:
      "Yes — and we strongly recommend it for fleet operators. Our recurring maintenance programs allow us to set up a consistent service calendar (weekly, bi-weekly, monthly, or custom intervals) so your fleet is always clean without you having to manage the scheduling. Recurring clients also receive priority booking and locked-in pricing for their service contract.",
  },
  {
    question: "Do you service armored trucks for banks and financial institutions?",
    answer:
      "Absolutely — this is one of our core specializations. We understand the unique operational and security requirements of banking and financial institution fleets. We coordinate with your dispatch or fleet manager, work around your vehicle schedules, and can service vehicles at your facility or a secure designated location. We've worked with regional banks, credit unions, and armored transport companies.",
  },
  {
    question: "Do you service private aircraft?",
    answer:
      "Yes. We offer exterior cleaning services for business jets, turboprops, and private piston aircraft. We use only aviation-safe, non-abrasive cleaning products that are appropriate for aircraft surfaces, paint, seals, and glass. We can coordinate with your FBO or facility to service aircraft on the ground at a scheduled time that works for your operation.",
  },
  {
    question: "What geographic area do you serve?",
    answer:
      "We currently serve the Tri-State & Florida. For larger commercial accounts or aviation clients, we may be able to travel to your location depending on fleet size and service scope. Contact us with your location and we'll let you know if we can accommodate your needs.",
  },
];

const faqService = [
  {
    question: "How do I request a quote?",
    answer:
      "The easiest way is to fill out our quote request form on the Request a Quote page. You'll provide details about your fleet (vehicle types, approximate count, location) and your service needs. We'll follow up promptly with a tailored service plan and pricing. You can also call or email us directly if you prefer to discuss your needs right away.",
  },
  {
    question: "Do you work with commercial accounts?",
    answer:
      "Yes. We welcome commercial fleet accounts of all sizes — from small business fleets to large institutional vehicle programs. For ongoing commercial accounts, we set up service contracts with scheduled visits, consistent pricing, and a dedicated point of contact for your account management. Corporate billing arrangements are available.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use professional-grade, commercial cleaning products appropriate for each service type. For standard fleet vehicles, we use high-performance automotive soaps and pressure washing systems. For aircraft, we use aviation-approved cleaning products only — nothing that would compromise aircraft surfaces, seals, or paint finishes. We do not use household products or generic car-wash soaps for commercial fleet work.",
  },
  {
    question: "How long does a fleet wash take?",
    answer:
      "Service time depends on fleet size, vehicle type, and service level. A single vehicle can typically be completed in 30–60 minutes. For fleet accounts, we schedule appropriately to cover your full vehicle count within your operational window. We'll give you a realistic time estimate when setting up your service.",
  },
  {
    question: "Do I need to be present during the service?",
    answer:
      "Not necessarily. For established commercial accounts, we can coordinate access with your facility manager or dispatcher. For first-time services, we recommend having a point of contact available to show us your specific requirements and ensure everything meets your expectations. We always communicate before, during, and after service.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "Client satisfaction is our priority. If you're not happy with any aspect of our service, contact us immediately and we'll address it — whether that means a re-clean, an adjustment to our process, or a conversation about how we can meet your standards better. We stand behind our work.",
  },
];

const faqDiff = [
  {
    question: "What makes Now Fleet Service different from a standard car wash?",
    answer:
      "Standard car washes are designed for individual consumer vehicles and use generic products and automated equipment. We are a professional fleet service company — we use commercial-grade cleaning products, high-pressure rinsing systems, precision brushing methods, and a service model built for fleet operations. We understand scheduling, security requirements, and presentation standards in a way that consumer car washes don't.",
  },
  {
    question: "Are you insured and professional?",
    answer:
      "Yes. We carry appropriate business insurance for commercial fleet and aviation cleaning operations. Our service is delivered by professionals who take their work seriously and represent Now Fleet Service with the same standards we deliver to your vehicles.",
  },
  {
    question: "Can I see examples of your work before booking?",
    answer:
      "Yes — visit our Gallery page to see examples of fleet and aircraft cleaning work. We're actively adding photography as we document our client projects. You're also welcome to contact us and ask for references from current fleet clients who can speak directly to our service quality.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Everything you need to know about our services, process, and how to get started."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section-pad bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* General */}
          <div className="mb-14">
            <SectionHeading
              eyebrow="General Questions"
              title="About Our"
              titleHighlight="Services"
              subtitle="Common questions about the types of services we offer."
            />
            <div className="premium-card p-8">
              <FAQAccordion items={faqGeneral} />
            </div>
          </div>

          {/* Service & Process */}
          <div className="mb-14">
            <SectionHeading
              eyebrow="Service & Process"
              title="Scheduling &"
              titleHighlight="Booking"
              subtitle="How we work, what to expect, and how to get started."
            />
            <div className="premium-card p-8">
              <FAQAccordion items={faqService} />
            </div>
          </div>

          {/* Differentiators */}
          <div className="mb-14">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Now Fleet"
              titleHighlight="Difference"
            />
            <div className="premium-card p-8">
              <FAQAccordion items={faqDiff} />
            </div>
          </div>

          {/* Still have questions */}
          <div className="premium-card p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
              <MessageSquare size={26} className="text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-softwhite mb-3">
              Still Have Questions?
            </h3>
            <p className="text-muted font-body text-sm leading-relaxed mb-7 max-w-md mx-auto">
              If you didn&rsquo;t find the answer you were looking for, reach out directly. We&rsquo;re happy to discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+11234567890" className="btn-gold">
                <Phone size={14} />
                Call Us
              </a>
              <Link href="/contact" className="btn-ghost">
                <Mail size={14} />
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Request a quote today and we'll respond with a tailored service plan for your fleet or aircraft."
        variant="gold"
      />
    </div>
  );
}
