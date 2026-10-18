# DigoIT Global — Corporate Website

A professional, responsive, multi-page corporate website for **DigoIT Solution PVT LTD**
(brand: *DigoIT Global* — *"Innovate. Transform. Succeed."*).

Built with **React + JavaScript**, **Vite**, and **React Router**.

## Run it locally

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server
npm run dev
```

Vite prints a local URL (default **http://localhost:5173**). Open it in your browser.
The dev server has hot reload, so edits appear instantly.

### Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built dist/ locally to check it
```

## Routes / pages

| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about` |
| Services overview | `/services` (with anchors `#ai-ml`, `#sap`, `#iot`, `#erp`, `#security`) |
| Cloud Implementation & Migration (detail) | `/services/cloud-implementation-migration` |
| Contact Us | `/contact` |
| 404 (catch-all) | any unknown route |

## Project structure

```
index.html              Vite entry (mounts React)
vite.config.js
package.json
src/
  main.jsx              App bootstrap + BrowserRouter
  App.jsx               Routes
  index.css            Design system (tokens) + all styling
  data/services.js      Single source of truth: services + company details
  hooks/usePageMeta.js  Per-page <title> + meta description
  components/
    Layout.jsx          Header + <Outlet/> + Footer + BackToTop
    Header.jsx          Nav, services dropdown, mobile menu, active states
    Footer.jsx
    Logo.jsx            Text-based SVG DigoIT logo
    Icon.jsx            Inline SVG icon set
    ui.jsx              Reusable blocks: SectionHead, Split, Steps, CTABand, etc.
    ServiceCard.jsx
    BackToTop.jsx
    ScrollManager.jsx   Scroll-to-top / scroll-to-#hash on route change
  pages/
    Home.jsx  About.jsx  Services.jsx  CloudMigration.jsx  Contact.jsx  NotFound.jsx
```

The header and footer are single React components rendered inside `Layout`, so they
stay consistent across every route. Active nav state uses React Router's `NavLink`.

## Design tokens

Brand palette (CSS custom properties in `src/index.css`):

- Primary navy `#123B72` · Secondary blue `#2563A6` · Accent yellow `#FFC928`
- White `#FFFFFF` · Light background `#F5F8FC`
- Text `#1D2939` · Muted text `#667085`

## Notes / editable placeholders

- **Content** is sourced from the supplied company profile (services, delivery
  framework, industries, strengths) and verified contact details
  (Hyderabad office, `+91 7702480969`, `info@digoit.com`, `www.digoit.com`).
- **Logo**: no official logo asset was provided, so a clean text-based "DigoIT"
  treatment (`Logo.jsx`) is used. Replace it with the official asset when available.
- **Mission / Vision** on the About page are drawn from profile messaging and are
  marked as editable placeholders pending final approved copy.
- **Contact form**: validates in the browser and shows an honest demo success
  state. No backend/contact API exists in this repo, so it does **not** claim a
  message was actually sent. Wire the submit handler in `src/pages/Contact.jsx`
  to a real endpoint before going live.
- **Imagery**: royalty-free Unsplash photos used as section backgrounds, each with a
  navy gradient fallback so layouts stay readable even if an image fails to load.
- No vendor partnerships (AWS/Azure/Google Cloud/SAP, etc.) or certifications are
  claimed; add them once confirmed.

## Deployment note

Because the site uses client-side routing (`BrowserRouter`), configure your host to
serve `index.html` for unknown paths (SPA fallback) so deep links like
`/services/cloud-implementation-migration` work on refresh. Netlify, Vercel and
GitHub Pages (with a fallback) all support this.
