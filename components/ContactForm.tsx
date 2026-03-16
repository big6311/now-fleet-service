"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Armored Truck Fleet Washing",
  "Commercial Fleet Exterior Cleaning",
  "Private Aircraft Exterior Cleaning",
  "Recurring Fleet Maintenance",
  "Detail-Focused Exterior Cleaning",
  "Other / Not Sure Yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-card p-10 text-center"
      >
        <CheckCircle2 size={52} className="text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-softwhite mb-3">
          Message Received
        </h3>
        <p className="text-muted font-body">
          Thank you for reaching out. We&rsquo;ll review your request and respond
          promptly with the next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className="premium-input"
          />
        </div>
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your company or institution"
            className="premium-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="premium-input"
          />
        </div>
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(555) 000-0000"
            className="premium-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Service Needed <span className="text-gold">*</span>
          </label>
          <select required className="premium-input appearance-none cursor-pointer">
            <option value="" className="bg-graphite">
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-graphite">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
            Fleet Size or Aircraft Type
          </label>
          <input
            type="text"
            placeholder="e.g. 12 armored trucks, Cessna Citation"
            className="premium-input"
          />
        </div>
      </div>

      <div>
        <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
          Preferred Date / Schedule
        </label>
        <input type="date" className="premium-input" />
      </div>

      <div>
        <label className="block text-muted/80 text-xs font-body font-semibold uppercase tracking-wider mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your service needs and we'll get back to you promptly with the next steps."
          className="premium-input resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full justify-center py-4 text-sm"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            Send Message
            <Send size={14} />
          </>
        )}
      </button>

      <p className="text-muted/40 text-xs font-body text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
