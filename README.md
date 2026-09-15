# Build an Unforgettable Brand

Personal coaching website for Ahmad Jamal, helping founders and full-time
professionals build a memorable brand around a business they're growing
alongside their day job.

Built with React, Vite, and a persistent Three.js scene (via
react-three-fiber and drei) that morphs as visitors scroll through the
page — hero, about, coaching programs, process, results, and contact.

## Stack

- React 19 + Vite
- `three`, `@react-three/fiber`, `@react-three/drei` for the 3D scene
- `framer-motion` for scroll-triggered content animation
- Plain CSS (no framework) for layout and theming

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL to view the site.

## Build

```bash
npm run build
npm run preview
```

## Before launch

- Replace the placeholder testimonials in `src/sections/Testimonials.jsx`
  with real client quotes.
- Wire `src/sections/Contact.jsx` up to a real email/CRM provider
  (Formspree, ConvertKit, a Calendly embed, etc.) — it currently only
  simulates a submission.
- Update the contact email in `src/sections/Contact.jsx`.
