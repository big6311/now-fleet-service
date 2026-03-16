# Now Fleet Service — Premium Website

A production-quality multi-page website for **Now Fleet Service**, built with:

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (custom brand tokens)
- **Framer Motion** (subtle premium animations)
- **Lucide React** (icons)

## Brand Colors

| Token       | Hex       | Usage                            |
|-------------|-----------|----------------------------------|
| richblack   | `#0A0A0A` | Hero backgrounds, deep sections  |
| charcoal    | `#111317` | Main page background             |
| graphite    | `#1A1F26` | Card backgrounds, accents        |
| softwhite   | `#F5F5F2` | Primary text                     |
| muted       | `#B7BCC5` | Secondary text, body copy        |
| gold        | `#C8A96B` | Primary accent — buttons, icons  |
| deepgold    | `#A8843E` | Gradient endpoint, hover states  |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## File Structure

```
now-fleet-service/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + design system
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── gallery/page.tsx    # Gallery page
│   ├── reviews/page.tsx    # Reviews / Testimonials page
│   ├── faq/page.tsx        # FAQ page
│   ├── contact/page.tsx    # Contact page
│   └── quote/page.tsx      # Request a Quote page
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Full-width footer
│   ├── PageHero.tsx        # Reusable page header
│   ├── SectionHeading.tsx  # Animated section headings
│   ├── CTASection.tsx      # Dark/gold CTA sections
│   ├── ServiceCard.tsx     # Service feature cards
│   ├── TestimonialCard.tsx # Review cards
│   ├── FAQAccordion.tsx    # Animated FAQ accordion
│   ├── BeforeAfterSlider.tsx # Interactive drag slider
│   ├── ContactForm.tsx     # Premium contact form
│   └── GalleryGrid.tsx     # Filterable gallery + lightbox
└── public/
    └── logo.png            # ← Place your logo here
```

## Adding Your Logo

Replace the text placeholder in `components/Navbar.tsx` and `components/Footer.tsx`:

```tsx
// Current placeholder (Navbar.tsx ~line 55):
<div className="w-12 h-12 rounded-full ...">
  <span className="text-gold ...">NFS</span>
</div>

// Replace with:
import Image from "next/image";
<Image src="/logo.png" alt="Now Fleet Service" width={48} height={48} className="rounded-full" />
```

Do the same in `Footer.tsx`.

## Adding Real Photography

Replace the emoji/gradient placeholders in:
- `components/GalleryGrid.tsx` — gallery item backgrounds
- `components/BeforeAfterSlider.tsx` — before/after backgrounds
- `app/page.tsx` — hero visual card, gallery previews

Use Next.js `<Image>` for all photography:

```tsx
import Image from "next/image";
<Image
  src="/images/fleet-01.jpg"
  alt="Armored truck fleet cleaning"
  fill
  className="object-cover"
/>
```

Store images in `/public/images/`.

## Customization

### Contact Information
Update phone, email, and service area in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Owner Name
Replace `[Owner Name]` in `app/about/page.tsx` with the actual owner's name.

### Business Tagline / Copy
All copy is inline in each page file — easy to search and update.

## Deployment

```bash
# Vercel (recommended)
npx vercel

# Or static export
npm run build
```
