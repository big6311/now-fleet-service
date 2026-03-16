import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our portfolio of armored truck fleet washing, commercial vehicle cleaning, and private aircraft exterior detailing work.",
};

export default function GalleryPage() {
  return (
    <div className="bg-charcoal">
      <PageHero
        eyebrow="Our Work"
        title="Fleet & Aircraft"
        titleHighlight="Gallery"
        subtitle="A portfolio of exterior cleaning work across armored vehicles, commercial fleets, and private aircraft."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Main Gallery */}
      <section className="section-pad bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent Work"
            title="Project"
            titleHighlight="Showcase"
            subtitle="Browse our work by category — use the filters below to narrow by service type."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section-pad bg-richblack relative">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Transformations"
            title="Before &"
            titleHighlight="After"
            subtitle="Drag the handle to reveal the transformation on a recent armored fleet cleaning project."
          />

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-softwhite mb-2">
                Armored Truck — Full Exterior Detail
              </h3>
              <p className="text-muted font-body text-sm mb-5">
                20-vehicle bank fleet. Heavily soiled from road grime and extended service intervals.
              </p>
              <BeforeAfterSlider height={380} />
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-softwhite mb-2">
                Commercial Fleet — Monthly Maintenance Wash
              </h3>
              <p className="text-muted font-body text-sm mb-5">
                Corporate fleet of 18 vehicles. Monthly recurring maintenance program.
              </p>
              <BeforeAfterSlider
                height={380}
                beforeLabel="Before Service"
                afterLabel="After Service"
              />
            </div>
          </div>

          <p className="text-muted/40 text-xs font-body text-center mt-6 italic">
            Replace placeholders with actual before/after photography for maximum client impact.
          </p>
        </div>
      </section>

      {/* Photo Note */}
      <section className="py-12 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="premium-card p-8">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-softwhite mb-3">
              Work In Progress Gallery
            </h3>
            <p className="text-muted font-body text-sm leading-relaxed">
              This gallery currently shows representative categories. As we photograph our ongoing client work,
              real project photography will replace these placeholders. We&rsquo;re committed to showing you
              exactly what our service looks like in action.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        subtitle="Request a quote and let us bring the same results to your fleet or aircraft."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
