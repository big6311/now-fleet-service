"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
  height = 420,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => {
    dragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-gold/15 cursor-ew-resize select-none"
      style={{ height }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* BEFORE — full width bg */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1A1F26 0%, #0A0A0A 100%)",
        }}
      >
        {/* Simulated dirty truck — placeholder visual */}
        <div className="text-center opacity-60">
          <div className="text-6xl mb-3">🚚</div>
          <p className="text-muted/50 font-body text-xs uppercase tracking-widest">
            Before Cleaning
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-2 rounded-full bg-muted/10"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* AFTER — clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            width: `${100 / (position / 100)}%`,
            background: "linear-gradient(135deg, #2A2015 0%, #1A1200 100%)",
          }}
        >
          {/* Simulated clean truck */}
          <div className="text-center">
            <div className="text-6xl mb-3">✨</div>
            <p className="text-gold/70 font-body text-xs uppercase tracking-widest">
              After Cleaning
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-16 h-2 rounded-full bg-gold/20"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-gold/60 z-10"
        style={{ left: `${position}%` }}
      ></div>

      {/* Handle */}
      <div
        className="slider-handle"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <ChevronsLeftRight size={18} className="text-richblack" />
      </div>

      {/* Labels */}
      <div
        className="absolute top-4 left-4 z-20 bg-richblack/70 backdrop-blur-sm border border-gold/20 rounded px-3 py-1"
      >
        <span className="text-muted text-xs font-body font-semibold uppercase tracking-wider">
          {beforeLabel}
        </span>
      </div>
      <div
        className="absolute top-4 right-4 z-20 bg-richblack/70 backdrop-blur-sm border border-gold/20 rounded px-3 py-1"
      >
        <span className="text-gold text-xs font-body font-semibold uppercase tracking-wider">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
