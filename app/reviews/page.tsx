import type { Metadata } from "next";
import { Star, Quote, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what fleet managers, banking institutions, and private aircraft owners say about Now Fleet Service.",
};

const reviews = [
  {
    name: "Marcus T.",
    title: "Fleet Operations Manager",
    company: "First Capital Armored",
    quote:
      "Now Fleet Service has completely changed our fleet maintenance. Our armored trucks look professional at every stop. Reliable, thorough, and easy to work with — exactly what we needed from a long-term partner.",
    rating: 5,
  },
  {
    name: "Sandra L.",
    title: "Director of Operations",
    company: "Regional Banking Group",
    quote:
      "We've used other services before, but nothing compares to the attention to detail. They understand our security needs and never disrupt our fleet schedule. The results are consistently excellent.",
    rating: 5,
  },
  {
    name: "James R.",
    title: "Private Aircraft Owner",
    company: "Independent",
    quote:
      "Had my Cessna Citation cleaned before a client flight and the results were outstanding. Immaculate finish, professional crew, and they were done on time. This is exactly what private aviation cleaning should look like.",
    rating: 5,
  },
  {
    name: "David K.",
    title: "VP of Branch Operations",
    company: "Cornerstone Federal Credit Union",
    quote:
      "Our branch managers were noticing how much cleaner our fleet looked. We've been on a monthly program with Now Fleet Service for over a year — highly recommend for any financial institution managing their own vehicles.",
    rating: 5,
  },
  {
    name: "Michelle P.",
    title: "Corporate Fleet Manager",
    company: "PremierTrans Group",
    quote:
      "Scheduling is seamless, pricing is fair, and the work is quality. They always show up when they say they will and we've never had to send a vehicle back for a redo. That kind of consistency is hard to find.",
    rating: 5,
  },
  {
    name: "Robert C.",
    title: "Director of Security Operations",
    company: "National Security Transport",
    quote:
      "The team understands the unique scheduling challenges we face with armored fleet operations. They work around us, not the other way around. That level of flexibility — combined with excellent results — keeps us coming back.",
    rating: 5,
  },
  {
    name: "Thomas A.",
    title: "Private Charter Operator",
    company: "Skyline Charter Aviation",
    quote:
      "I've tried multiple cleaning services for our aircraft and nobody has matched the level of care from Now Fleet Service. They treat the surface right, use the correct products, and leave the aircraft looking sharp for clients.",
    rating: 5,
  },
  {
    name: "Karen H.",
    title: "Operations Coordinator",
    company: "Metro Area Credit Union",
    quote:
      "Easy to book, great communication, and reliable service every single time. The team is professional, respectful of our facility, and always leaves the fleet looking great. We've referred them to two other local credit unions.",
    rating: 5,
  },
  {
    name: "Brian M.",
    title: "Fleet Supervisor",
    company: "Consolidated Armored Services",
    quote:
      "Their attention to detail on the door seams and glass panels alone makes them worth it. Most services skip the fine work — Now Fleet Service doesn't. Every vehicle comes back looking like it just came out of the shop.",
    rating: 5,
  },
];

const overallStats = [
  { value: "5.0", label: "Average Rating", sub: "Based on client reviews" },
  { value: "100%", label: "Would Recommend", sub: "Client satisfaction rate" },
  { value: "98%", label: "Client Retention", sub: "Ongoing service accounts" },
  { value: "200+", label: "Services Completed", sub: "Vehicles and aircraft cleaned" },
];

export default function ReviewsPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Client Testimonials"
        title="Trusted by Fleet Managers"
        titleHighlight="& Aviation Clients"
        subtitle="Read what our clients say about the reliability, quality, and professionalism of Now Fleet Service."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      {/* Overall Rating Bar */}
      <section className="bg-graphite border-y border-gold/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {overallStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-softwhite font-body font-semibold text-sm mb-0.5">
                  {stat.label}
                </p>
                <p className="text-muted/60 font-body text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="section-pad bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Review"
            title="What Our Clients"
            titleHighlight="Experience"
          />
          <div className="premium-card p-10 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] blur-[60px] rounded-full"
              style={{ background: "#C8A96B" }}
            />
            <Quote size={52} className="text-gold/15 mb-6" fill="rgba(200,169,107,0.04)" />
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="font-display text-xl md:text-2xl text-softwhite/90 leading-relaxed italic mb-8">
              &ldquo;Now Fleet Service has completely changed our fleet maintenance. Our armored trucks look professional at every stop.
              Reliable, thorough, and easy to work with — exactly what we needed from a long-term partner. They understand our
              security constraints and work around our schedule without issue. The results speak for themselves every time.&rdquo;
            </blockquote>
            <div className="divider-gold mb-6"></div>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-richblack font-display font-bold"
                style={{ background: "linear-gradient(135deg, #C8A96B, #A8843E)" }}
              >
                MT
              </div>
              <div>
                <p className="text-softwhite font-body font-semibold">Marcus T.</p>
                <p className="text-muted/70 font-body text-sm">Fleet Operations Manager, First Capital Armored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="All Reviews"
            title="Heard From"
            titleHighlight="Our Clients"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <TestimonialCard key={review.name} {...review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-14 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-body font-semibold tracking-[0.2em] uppercase mb-8">
            Why Clients Trust Us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle, text: "Consistent, reliable results on every visit" },
              { icon: CheckCircle, text: "Scheduling that respects your operations" },
              { icon: CheckCircle, text: "Professional service from start to finish" },
            ].map((item) => (
              <div
                key={item.text}
                className="premium-card p-5 flex items-center gap-3"
              >
                <item.icon size={18} className="text-gold flex-shrink-0" />
                <p className="text-muted font-body text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Satisfied Clients"
        subtitle="Experience the Now Fleet Service difference. Request a quote and see the results for yourself."
        variant="gold"
      />
    </div>
  );
}
