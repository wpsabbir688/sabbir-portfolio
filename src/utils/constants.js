/* ---------------------------------------------------------------------------
   Site-wide configuration.
   Edit these values in one place — components read from here.
--------------------------------------------------------------------------- */

export const SITE = {
  name: "Sabbir Hossain",
  brand: "SABBIR",
  brandLabel: "WordPress Developer",
  title: "WordPress Web Designer & Front-End Developer",
  tagline: "Neural Blue — Digital experiences built with precision",
  intro:
    "I design and develop modern WordPress websites that transform ideas into polished, responsive digital experiences.",
  experience: "3+ years",
  // Public contact email used by the mailto fallback of the contact form.
  email: "wpsabbir44@gmail.com",
  location: "Available for clients worldwide",
};

/* Availability indicator shown in the navbar / hero.
   Set `available` to false and change the label when fully booked. */
export const AVAILABILITY = {
  available: true,
  label: "Available for new projects",
};

/* ---------------------------------------------------------------------------
   CONTACT FORM DELIVERY
   A static frontend cannot send email by itself. Two supported modes:

   1) Endpoint mode (recommended): set CONTACT_ENDPOINT to the URL of your
      own form backend or email-provider endpoint (for example a serverless
      function or a form service endpoint you control). The form will POST
      JSON to it. Never put private API keys in this file or any client code.
   2) Mailto fallback (default): when CONTACT_ENDPOINT is empty, submitting
      the form opens the visitor's email client with the message pre-filled
      and addressed to SITE.email. No fake "sent" state is ever shown.
--------------------------------------------------------------------------- */
export const CONTACT_ENDPOINT = "";

export const NAV_LINKS = [
  { label: "Home", hash: "home", path: "/" },
  { label: "Work", hash: "work", path: "/work" },
  { label: "Services", hash: "services", path: "/services" },
  { label: "About", hash: "about", path: "/about" },
  { label: "Contact", hash: "contact", path: "/contact" },
];

/* Clean section routes: each renders the one-page Home scrolled to that
   section, so URLs read /contact instead of /#contact. */
export const SECTION_ROUTES = [
  { path: "/work", sectionId: "work" },
  { path: "/services", sectionId: "services" },
  { path: "/about", sectionId: "about" },
  { path: "/contact", sectionId: "contact" },
];

export const SOCIALS = [
  { label: "GitHub", url: "https://github.com/wpsabbir688" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/wpsabbir44/" },
];

export const PROJECT_TYPES = [
  "WordPress Website",
  "Figma to WordPress",
  "WooCommerce Store",
  "Website Redesign",
  "Other",
];

export const BUDGET_RANGES = [
  "Not sure yet",
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
];
