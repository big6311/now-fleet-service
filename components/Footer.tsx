import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Truck, Plane } from "lucide-react";

const services = [
  "Armored Truck Fleet Washing",
  "Commercial Fleet Cleaning",
  "Private Aircraft Exterior Cleaning",
  "Recurring Fleet Maintenance",
  "Detail-Focused Exterior Cleaning",
];

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request a Quote" },
];

const industries = [
  "Banking & Financial Institutions",
  "Armored Transport Companies",
  "Commercial Fleet Operators",
  "Private Aviation Clients",
  "Corporate Vehicle Fleets",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-richblack border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gold/50"
                style={{ background: "linear-gradient(135deg, #1A1F26, #0A0A0A)" }}
              >
                <span className="text-gold font-display font-bold text-sm">NFS</span>
              </div>
              <div>
                <div className="text-softwhite font-display font-semibold text-base leading-tight">
                  Now Fleet
                </div>
                <div className="text-gold text-[10px] tracking-[0.18em] uppercase font-body">
                  Service
                </div>
              </div>
            </Link>
            <p className="text-muted text-sm font-body leading-relaxed mb-6">
              Now Fleet Service provides professional exterior cleaning for armored truck fleets,
              commercial vehicles, and private aircraft with a commitment to precision,
              presentation, and dependable service.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer">
                <Shield size={14} className="text-gold/60" />
              </div>
              <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer">
                <Truck size={14} className="text-gold/60" />
              </div>
              <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer">
                <Plane size={14} className="text-gold/60" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-softwhite font-semibold text-base mb-5 relative">
              Quick Links
              <span className="gold-line mt-2 block"></span>
            </h3>
            <ul className="space-y-2.5">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-muted text-sm hover:text-gold transition-colors duration-200 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-softwhite font-semibold text-base mb-5 relative">
              Our Services
              <span className="gold-line mt-2 block"></span>
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-muted text-sm hover:text-gold transition-colors duration-200 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-softwhite font-semibold text-base mt-8 mb-4 relative">
              Industries Served
              <span className="gold-line mt-2 block"></span>
            </h3>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind} className="text-muted text-sm font-body flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold/30"></span>
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-softwhite font-semibold text-base mb-5 relative">
              Contact Us
              <span className="gold-line mt-2 block"></span>
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+11234567890"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={14} className="text-gold" />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-body mb-0.5">
                    Phone
                  </p>
                  <p className="text-softwhite text-sm group-hover:text-gold transition-colors">
                    (123) 456-7890
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@nowfleetservice.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={14} className="text-gold" />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-body mb-0.5">
                    Email
                  </p>
                  <p className="text-softwhite text-sm group-hover:text-gold transition-colors">
                    info@nowfleetservice.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-body mb-0.5">
                    Service Area
                  </p>
                  <p className="text-softwhite text-sm">
                    Metro Area &amp; Surrounding Regions
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/quote"
              className="btn-gold mt-6 w-full justify-center text-xs"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted/60 text-xs font-body">
            © {year} Now Fleet Service. All rights reserved.
          </p>
          <p className="text-muted/40 text-xs font-body text-center">
            Premium Fleet & Aircraft Exterior Cleaning Services
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-muted/60 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-muted/60 text-xs hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
