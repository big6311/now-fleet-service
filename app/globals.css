@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Barlow:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --richblack: #0A0A0A;
  --charcoal: #111317;
  --graphite: #1A1F26;
  --softwhite: #F5F5F2;
  --muted: #B7BCC5;
  --gold: #C8A96B;
  --deepgold: #A8843E;
  --goldlight: #DEC28A;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--charcoal);
  color: var(--softwhite);
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Gold divider line */
.gold-line {
  display: block;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #C8A96B, #A8843E);
  border-radius: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #111317;
}
::-webkit-scrollbar-thumb {
  background: #C8A96B;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #A8843E;
}

/* Selection color */
::selection {
  background: rgba(200, 169, 107, 0.3);
  color: #F5F5F2;
}

/* Noise texture overlay mixin */
.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.04;
  z-index: 0;
}

/* Premium card style */
.premium-card {
  background: linear-gradient(145deg, #1A1F26 0%, #111317 100%);
  border: 1px solid rgba(200, 169, 107, 0.12);
  border-radius: 1rem;
  box-shadow: 0 4px 40px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.premium-card:hover {
  border-color: rgba(200, 169, 107, 0.3);
  box-shadow: 0 8px 60px rgba(0,0,0,0.7), 0 0 40px rgba(200, 169, 107, 0.1);
  transform: translateY(-2px);
}

/* Gold button */
.btn-gold {
  background: linear-gradient(135deg, #C8A96B 0%, #A8843E 100%);
  color: #0A0A0A;
  font-weight: 600;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 0.375rem;
  padding: 0.75rem 1.75rem;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-gold:hover {
  background: linear-gradient(135deg, #DEC28A 0%, #C8A96B 100%);
  box-shadow: 0 0 40px rgba(200, 169, 107, 0.35);
  transform: translateY(-1px);
}

/* Ghost button */
.btn-ghost {
  background: transparent;
  color: var(--gold);
  font-weight: 600;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 0.375rem;
  padding: 0.75rem 1.75rem;
  border: 1px solid rgba(200, 169, 107, 0.45);
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-ghost:hover {
  background: rgba(200, 169, 107, 0.08);
  border-color: var(--gold);
  box-shadow: 0 0 30px rgba(200, 169, 107, 0.1);
}

/* Input field */
.premium-input {
  background: rgba(26, 31, 38, 0.8);
  border: 1px solid rgba(200, 169, 107, 0.2);
  border-radius: 0.5rem;
  color: #F5F5F2;
  padding: 0.875rem 1rem;
  font-family: 'Barlow', sans-serif;
  font-size: 0.95rem;
  width: 100%;
  transition: all 0.2s ease;
  outline: none;
}

.premium-input:focus {
  border-color: rgba(200, 169, 107, 0.6);
  box-shadow: 0 0 20px rgba(200, 169, 107, 0.1);
}

.premium-input::placeholder {
  color: #6B7280;
}

/* Section padding */
.section-pad {
  padding: 6rem 0;
}

@media (max-width: 768px) {
  .section-pad {
    padding: 4rem 0;
  }
}

/* Gold text gradient */
.text-gold-gradient {
  background: linear-gradient(135deg, #DEC28A 0%, #C8A96B 50%, #A8843E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtle grid background */
.bg-grid {
  background-image: 
    linear-gradient(rgba(200, 169, 107, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 169, 107, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Before/After slider */
.slider-handle {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #C8A96B, #A8843E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;
  box-shadow: 0 0 20px rgba(200, 169, 107, 0.5), 0 4px 20px rgba(0,0,0,0.5);
  z-index: 10;
  user-select: none;
}

/* Page hero gradient */
.page-hero-bg {
  background: linear-gradient(180deg, #0A0A0A 0%, #111317 60%, #1A1F26 100%);
}

/* Divider */
.divider-gold {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200, 169, 107, 0.3), transparent);
}

/* Nav link underline */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.25s ease;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* FAQ accordion */
.faq-item {
  border-bottom: 1px solid rgba(200, 169, 107, 0.12);
  transition: all 0.2s ease;
}

/* Logo placeholder circle */
.logo-circle {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #C8A96B, #A8843E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #0A0A0A;
  font-size: 1rem;
  flex-shrink: 0;
}
