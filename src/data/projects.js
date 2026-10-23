/* ---------------------------------------------------------------------------
   Project data.
   Entries flagged `placeholder: true` use CSS-composed preview visuals and
   summary copy that must be replaced with real screenshots, verified live
   URLs and confirmed case-study details before being presented as final.
   Never invent live URLs, outcomes or client results here.
--------------------------------------------------------------------------- */

export const PROJECT_CATEGORIES = ["All", "WooCommerce", "eCommerce"];

export const projects = [
  {
    slug: "meyeghor",
    index: "001",
    title: "Meyeghor",
    category: "WooCommerce",
    type: "WooCommerce eCommerce",
    description:
      "An online store built on WooCommerce with a clean product catalogue, structured category browsing and a streamlined checkout flow designed for everyday shoppers.",
    overview: [
      "Meyeghor is an eCommerce project built with WordPress and WooCommerce. The focus of the build was a clear store structure: an organised product catalogue, readable product pages and a checkout flow that stays simple on both mobile and desktop.",
      "The layout was implemented responsively from the ground up, with careful attention to product imagery areas, category navigation and the small details that make a store feel trustworthy — consistent spacing, legible typography and obvious calls to action.",
    ],
    scope: ["WooCommerce store setup", "Product catalogue structure", "Responsive storefront design", "Checkout flow configuration"],
    tags: ["WordPress", "WooCommerce", "Elementor", "Responsive Design"],
    liveUrl: "",
    placeholder: true,
    visual: {
      gradient: "linear-gradient(135deg, #16224a 0%, #0b1020 58%, #1b1035 100%)",
      accent: "#4F7CFF",
      motif: "storefront",
    },
  },
  {
    slug: "bd-budget-beauty",
    index: "002",
    title: "BD Budget Beauty",
    category: "eCommerce",
    type: "eCommerce Website",
    description:
      "A beauty products storefront with browsable collections, promotional sections and a mobile-first shopping experience tailored to value-conscious customers.",
    overview: [
      "BD Budget Beauty is an eCommerce storefront for beauty products. The build centred on making a large, price-sensitive catalogue easy to browse: collection-based navigation, clear offer sections and product cards that surface the essentials at a glance.",
      "The interface was designed mobile-first, since most shoppers arrive from phones and social links, and then scaled up gracefully to tablet and desktop layouts.",
    ],
    scope: ["Storefront design & build", "Collection & category pages", "Mobile-first responsive layout", "Offer / promotion sections"],
    tags: ["WordPress", "WooCommerce", "CSS3", "Mobile-First"],
    liveUrl: "",
    placeholder: true,
    visual: {
      gradient: "linear-gradient(135deg, #241239 0%, #0b1020 55%, #0e2a3f 100%)",
      accent: "#8B5CF6",
      motif: "beauty",
    },
  },
  {
    slug: "barqialaat",
    index: "003",
    title: "Barqialaat",
    category: "WooCommerce",
    type: "WooCommerce Website",
    description:
      "A WooCommerce website with a structured product presentation, considered typography and a calm, premium browsing experience across devices.",
    overview: [
      "Barqialaat is a WooCommerce project where presentation quality was the priority: generous whitespace, a disciplined type hierarchy and product layouts that let the items carry the page.",
      "The site was built with WordPress and WooCommerce, configured for straightforward day-to-day management, and tested across common viewport sizes so the experience stays consistent from phone to widescreen.",
    ],
    scope: ["WooCommerce build", "Product page design", "Typography & layout system", "Cross-device testing"],
    tags: ["WordPress", "WooCommerce", "Elementor", "UI Design"],
    liveUrl: "",
    placeholder: true,
    visual: {
      gradient: "linear-gradient(135deg, #0d2b3d 0%, #0b1020 55%, #16224a 100%)",
      accent: "#48E5FF",
      motif: "catalog",
    },
  },
  {
    slug: "choose-your-fresh",
    index: "004",
    title: "Choose Your Fresh",
    category: "eCommerce",
    type: "eCommerce Website",
    description:
      "A fresh-food eCommerce experience with category-led shopping, clear product information and an ordering flow designed to feel quick and effortless.",
    overview: [
      "Choose Your Fresh is an eCommerce website for fresh food shopping. The design leads with categories, so visitors can get from the homepage to a relevant product in as few steps as possible.",
      "Product information is presented plainly — what it is, what it costs, how to order — and the whole flow was implemented responsively with performance in mind, keeping pages light for slower connections.",
    ],
    scope: ["eCommerce design & build", "Category-led navigation", "Product information design", "Responsive implementation"],
    tags: ["WordPress", "WooCommerce", "JavaScript", "Responsive Design"],
    liveUrl: "",
    placeholder: true,
    visual: {
      gradient: "linear-gradient(135deg, #0f2e22 0%, #0b1020 55%, #16224a 100%)",
      accent: "#34D399",
      motif: "fresh",
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
