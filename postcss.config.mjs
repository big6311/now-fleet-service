"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  bg: string;
  icon: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Armored Trucks",
    title: "Bank Fleet — Full Exterior Detail",
    description: "Complete exterior wash of a 20-vehicle armored truck fleet for a regional banking institution.",
    bg: "from-graphite to-richblack",
    icon: "🚐",
  },
  {
    id: 2,
    category: "Armored Trucks",
    title: "Door Panel Deep Clean",
    description: "Precision cleaning of high-contact door panels and seam lines on armored transport vehicles.",
    bg: "from-[#1A1400] to-[#0A0A00]",
    icon: "🔍",
  },
  {
    id: 3,
    category: "Commercial Fleet",
    title: "Corporate Fleet — Quarterly Service",
    description: "Monthly exterior maintenance wash for a 35-vehicle corporate fleet operated by a financial firm.",
    bg: "from-[#1A1200] to-richblack",
    icon: "🚛",
  },
  {
    id: 4,
    category: "Aircraft",
    title: "Business Jet — Fuselage Cleaning",
    description: "Full exterior fuselage cleaning for a Cessna Citation series private aircraft.",
    bg: "from-[#001A1A] to-richblack",
    icon: "✈️",
  },
  {
    id: 5,
    category: "Aircraft",
    title: "Wing Surface Detailing",
    description: "Precision cleaning of wing leading edges and surface panels on a turboprop aircraft.",
    bg: "from-[#0A0F1A] to-richblack",
    icon: "🛩️",
  },
  {
    id: 6,
    category: "Before & After",
    title: "Armored Truck — Before & After",
    description: "Side-by-side transformation of a heavily soiled armored transport vehicle.",
    bg: "from-[#1A0A00] to-richblack",
    icon: "✨",
  },
  {
    id: 7,
    category: "Commercial Fleet",
    title: "Undercarriage Rinse Detail",
    description: "High-pressure undercarriage clean to remove road grime and corrosion-causing debris.",
    bg: "from-graphite to-charcoal",
    icon: "💦",
  },
  {
    id: 8,
    category: "Armored Trucks",
    title: "Glass & Mirror Detailing",
    description: "Streak-free exterior glass and mirror surfaces cleaned to presentation standards.",
    bg: "from-[#0A0A1A] to-richblack",
    icon: "🔆",
  },
  {
    id: 9,
    category: "Before & After",
    title: "Fleet Exterior — Oxidation Removal",
    description: "Exterior wash and surface treatment on paint-oxidized commercial fleet vehicles.",
    bg: "from-[#1A1A0A] to-richblack",
    icon: "🌟",
  },
];

const categories = ["All", "Armored Trucks", "Commercial Fleet", "Aircraft", "Before & After"];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-body font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? "bg-gold text-richblack"
                : "bg-graphite/80 text-muted border border-gold/15 hover:border-gold/40 hover:text-softwhite"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="premium-card overflow-hidden group cursor-pointer"
              onClick={() => setModalItem(item)}
            >
              {/* Image placeholder */}
              <div
                className={`relative h-52 bg-gradient-to-br ${item.bg} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-2 opacity-50 group-hover:opacity-70 transition-opacity">
                    {item.icon}
                  </div>
                  {/* Placeholder grid lines */}
                  <div
                    className="absolute inset-0 bg-grid opacity-20"
                  ></div>
                </div>
                <div className="absolute inset-0 bg-richblack/0 group-hover:bg-richblack/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-richblack/70 backdrop-blur-sm border border-gold/20 text-gold text-[10px] font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-softwhite text-base mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-xs font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-richblack/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-xl w-full premium-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`h-64 bg-gradient-to-br ${modalItem.bg} flex items-center justify-center relative`}
              >
                <div className="text-7xl opacity-40">{modalItem.icon}</div>
                <div className="absolute inset-0 bg-grid opacity-20"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-richblack/70 backdrop-blur-sm border border-gold/20 text-gold text-[10px] font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                    {modalItem.category}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-softwhite mb-3">
                  {modalItem.title}
                </h3>
                <p className="text-muted font-body text-sm leading-relaxed mb-5">
                  {modalItem.description}
                </p>
                <p className="text-muted/50 text-xs font-body italic">
                  Replace placeholder with actual project photography.
                </p>
              </div>
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-richblack/80 border border-gold/20 flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
