# SABBIR — Personal Portfolio

A futuristic, production-oriented portfolio website for **Sabbir Hossain**,
WordPress Web Designer & Front-End Developer.

**Design system:** Neural Blue — digital experiences built with precision.
Deep-space backgrounds, electric blue / laser cyan accents, Space Grotesk
display type with Inter body text, and a restrained, purposeful motion system.

## Tech stack

- **React 19** + **Vite 8** (JavaScript only — `.jsx` components, `.js` data/utils)
- **Tailwind CSS v4** (via `@tailwindcss/vite`) + CSS custom properties for design tokens
- **React Router DOM 7** — home, project case-study pages, 404
- **Framer Motion 14** — hero sequence, scroll reveals, timeline, menu animation
- **Lucide React** — icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server (http://localhost:5173)
npm run dev

# 3. Production build (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
sabbir-portfolio/
├── public/               favicon.svg, robots.txt, images/
├── src/
│   ├── assets/images/    local image assets (add real screenshots here)
│   ├── components/       Navbar, Footer, Button, cards, form, cursor…
│   ├── sections/         Hero, Projects, Services, About, Skills,
│   │                     Process, Trust, Contact
│   ├── pages/            Home, ProjectDetails, NotFound
│   ├── data/             projects.js, services.js, skills.js
│   ├── hooks/            useScrollReveal.js
│   ├── utils/            constants.js (site + contact configuration)
│   ├── styles/           index.css (tokens), animations.css, components.css
│   ├── App.jsx           router + layout
│   └── main.jsx          entry point
├── index.html            SEO / Open Graph metadata + fonts
└── vite.config.js
```

## Configuration

All site-wide values live in **`src/utils/constants.js`**:

| Setting                   | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `SITE`                    | Name, brand, title, intro, contact email, location                      |
| `AVAILABILITY`             | Availability dot + label in the navbar, hero and contact sections       |
| `CONTACT_ENDPOINT`        | Contact form delivery endpoint (see below)                              |
| `NAV_LINKS`, `SOCIALS`    | Navigation structure and social profiles                                |
| `PROJECT_TYPES`, budgets  | Contact form select options                                             |

### Contact form delivery (important)

A static frontend **cannot send email by itself**. The form supports two modes:

1. **Mailto fallback (default, `CONTACT_ENDPOINT = ""`)** — submitting opens the
   visitor's email client with the message pre-filled and addressed to
   `SITE.email`. The UI says exactly that; it never fakes a "sent" state.
2. **Endpoint mode** — set `CONTACT_ENDPOINT` to the URL of your own form
   backend or email-provider endpoint (e.g. a serverless function you control).
   The form POSTs JSON `{ name, email, projectType, budget, details }` and shows
   genuine success/error states based on the response.

Never put private API keys in client-side code. A honeypot field is included
for basic spam resistance.

## Content notes

- **Projects** (`src/data/projects.js`): the four entries (Meyeghor, BD Budget
  Beauty, Barqialaat, Choose Your Fresh) are flagged `placeholder: true`.
  Their visuals are CSS-composed previews — **not real screenshots** — and no
  live URLs or results are claimed. To finalise a case study: add real
  screenshots under `public/images/`, set `liveUrl`, write the confirmed
  overview, and set `placeholder: false`.
- **Trust section**: no testimonials are displayed because none were supplied;
  the section states working standards instead ("What You Can Expect").
- **About**: contains no invented degrees, employers, awards or statistics —
  only the stated 3+ years of WordPress experience.

## Deployment

The site is a static SPA. Build with `npm run build`, then deploy the `dist/`
folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages,
or a traditional web host).

- **SPA routing:** configure the host to rewrite unknown paths to
  `index.html` (Netlify: a `_redirects` file with `/* /index.html 200`;
  Vercel/Cloudflare handle this automatically for Vite SPAs; on Apache use a
  standard `mod_rewrite` fallback) so `/work/:slug` URLs work on refresh.
- After choosing a production domain, update the Open Graph/canonical values
  in `index.html` and add the sitemap URL to `public/robots.txt`.
- Set `VITE_SITE_URL` in your host's environment variables if you wire it into
  the metadata later (see `.env.example`).

## Accessibility & performance

- Semantic landmarks, skip-to-content link, visible focus rings, labelled
  form fields with inline errors, keyboard-friendly navigation and menus.
- `prefers-reduced-motion` is respected globally (Framer Motion `MotionConfig`
  plus CSS), pointer effects are disabled on touch devices, and the custom
  cursor ring never replaces the native cursor.
- Fonts load from Google Fonts with `preconnect`; all visuals are CSS/SVG,
  so there are no heavy image payloads by default.
