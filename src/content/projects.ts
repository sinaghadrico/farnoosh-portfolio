import type { Project } from "@/types";

/**
 * To add a project: copy an entry, change the slug (used in URL).
 * Leave `cover.src` undefined to render a styled placeholder.
 * Drop real images in /public/projects/<slug>/ and reference them as
 * "/projects/<slug>/cover.jpg".
 */
export const projects: Project[] = [
  {
    slug: "malek",
    title: "Malek",
    tagline:
      "Optimizing User Flows for Malek, a Property Tokenization Platform.",
    summary:
      "An end-to-end product design role on a blockchain-inspired fintech platform that lets people buy, trade, and swap micro-shares of property — with onboarding that earns trust quickly and a BNPL model that lowers the entry point for retail investors.",
    year: "2025 — 2026",
    client: "Malek",
    role: "Product Designer (Full-time, Remote)",
    duration: "1 year",
    team: ["In-house product, design & engineering team"],
    tags: ["Fintech", "Mobile & Web", "Convertion", "Product Thinking", "Design System"],
    tools: ["Figma", "FigJam", "Notion", "Maze"],
    featured: true,
    cover: {
      alt: "Malek fractional real-estate platform — investor and agent surfaces",
      ratio: "video",
      span: "full",
    },
    problem:
      "Real estate is a high-barrier asset class — expensive, slow, and largely inaccessible to retail investors. Malek's brief was to redesign that experience around fractional ownership: micro-units traded on a blockchain-inspired platform, with onboarding that earned trust quickly, and rewards that kept users coming back.",
    process: [
      {
        heading: "Discovery & onboarding research",
        body: "User interviews and iterative testing to find where prospective investors lost confidence — most consistently at KYC, asset comprehension, and the first trade. Every drop-off pointed at a moment where the platform asked for trust before it had earned it.",
      },
      {
        heading: "End-to-end user journeys",
        body: "Mapped flows for two distinct audiences: retail investors browsing and trading micro-shares, and real-estate agents managing inventory and pipeline. The two sides needed different defaults, different data, and different ways of measuring success.",
      },
      {
        heading: "Stepper, dashboards & design system",
        body: "Designed a step-by-step onboarding stepper that improved completion rates, dashboards that gave both users and agents a clear next action, and a design system the engineering team could extend without me in the room.",
      },
      {
        heading: "BNPL & tiered rewards",
        body: "Collaborated with product and engineering to ship Buy Now, Pay Later for property purchases, and a tiered referral system using proprietary reward tokens — with multipliers that increased based on user grading levels, driving acquisition and long-term loyalty.",
      },
    ],
    solution:
      "A platform where buying property feels closer to buying a stock — clearer onboarding, lower entry through BNPL, dashboards on both sides of the marketplace, and a referral-and-reward loop that turns first-time users into long-term participants.",
    results: [
      { label: "Surfaces designed", value: "Mobile + Web" },
      { label: "Audience segments", value: "Investors + Agents" },
      { label: "Payment models", value: "BNPL + Crypto-fiat" },
      { label: "Engagement loop", value: "Tiered token rewards" },
    ],
    gallery: [
      {
        alt: "Onboarding stepper reducing drop-offs at KYC and first-trade moments",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Investor dashboard showing portfolio of micro-share holdings",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Agent inventory and pipeline dashboard",
        ratio: "wide",
        span: "full",
      },
      {
        alt: "Tiered referral and reward token system with grading multipliers",
        ratio: "video",
        span: "wide",
      },
    ],
    link: { label: "View on Figma", href: "https://figma.com" },
  },
  {
    slug: "google-maps",
    title: "Google Maps",
    tagline: "Improving Navigation Trust in Unfamiliar Areas for Tourists on Google Maps.",
    summary:
      "A case study exploring how Google Maps could better serve travelers — with personalised directions, stronger visual hierarchy, and real-time updates that build trust and reduce reliance on third-party apps.",
    year: "2024",
    client: "Self-initiated case study",
    role: "UX/UI Designer",
    duration: "6 weeks",
    team: ["Solo case study"],
    tags: ["Transportation", "Mobile", "Retention", "UX Strategy", "Information Architecture"],
    tools: ["Figma", "FigJam", "Notion"],
    featured: true,
    cover: {
      src: "/projects/google-maps/cover.jpeg",
      alt: "Google Maps redesign for travelers — mobile screens",
      ratio: "video",
      span: "full",
    },
    problem:
      "Tourists in unfamiliar cities use Maps differently to locals — they second-guess routes, switch to other apps for transit and reviews, and lose trust the moment context goes missing. The same product is doing two jobs and quietly under-serving one of them.",
    process: [
      {
        heading: "User research",
        body: "Interviews with travelers across three city types — capital, coastal, and rural — alongside a desk-research review of the apps they reached for instead of Maps.",
      },
      {
        heading: "Journey mapping",
        body: "Mapped the tourist journey from arrival to departure to find the moments where trust breaks down. The pattern was consistent: transit handoffs, low-data zones, and decision-heavy intersections.",
      },
      {
        heading: "Concept exploration",
        body: "Sketched solutions around three principles — personalised directions, real-time data, and a stronger visual hierarchy under cognitive load.",
      },
      {
        heading: "UI & prototype",
        body: "Designed high-fidelity flows for the four highest-impact moments: first arrival, transit transfer, finding a place, and re-routing.",
      },
    ],
    solution:
      "Personalised routes that adapt to a traveler's pace, clearer hierarchy when many things compete for attention, and richer in-context information built into the map itself — so visitors don't have to leave Maps to feel oriented.",
    results: [
      { label: "Travelers interviewed", value: "9" },
      { label: "Journey maps produced", value: "4" },
      { label: "High-fidelity screens", value: "18" },
      { label: "Concept videos", value: "2" },
    ],
    gallery: [
      {
        alt: "Personalised route summary on arrival in a new city",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Transit transfer view with clearer next-step hierarchy",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Place detail view with traveler-focused context",
        ratio: "wide",
        span: "full",
      },
    ],
    link: { label: "View on Figma", href: "https://figma.com" },
  },
  {
    slug: "castbox",
    title: "Castbox",
    tagline: "Enhancing Community Engagement and Listener Interaction on Castbox.",
    summary:
      "A UX case study exploring why listeners face challenges interacting with the community section on Castbox. The project focused on redesigning the information architecture to improve clarity, streamline comment sharing, and encourage greater listener engagement through a more intuitive experience.",
    year: "2024",
    client: "Self-initiated case study",
    role: "UX/UI Designer",
    duration: "8 weeks",
    team: ["Solo case study"],
    tags: ["Media", "Mobile", "Behavioral Design", "UX Research", "Visual Hierarchy"],
    tools: ["Figma", "FigJam", "Maze", "Notion"],
    featured: true,
    cover: {
      src: "/projects/castbox/cover.jpeg",
      alt: "Castbox community section redesign — mobile screens",
      ratio: "video",
      span: "full",
    },
    problem:
      "Castbox listeners engage with podcasts but rarely with each other. Through desk research, surveys, and interviews, the community section surfaced as the primary friction point — features were unclear, the information architecture didn't reflect how people actually wanted to participate, and engagement had stalled.",
    process: [
      {
        heading: "Discovery & research",
        body: "I started by listening — desk research on the podcast space, a survey to a wider audience, and qualitative interviews with active listeners.",
        list: [
          "Reviewed competitive community patterns across podcast and audio apps.",
          "Ran a survey to surface the moments where engagement breaks down.",
          "Conducted user interviews to understand intent vs. behaviour.",
        ],
      },
      {
        heading: "Defining the problem",
        body: "Synthesised research into a clear problem statement and a small set of opportunities. Most pointed at the same thing: the community section was discoverable, but not legible.",
      },
      {
        heading: "Ideation & sketching",
        body: "Crazy 8s, brainstorming, and rapid sketching to explore directions before committing to a single one. I weighed each idea against feasibility and the existing IA.",
      },
      {
        heading: "Prototyping & feedback",
        body: "Brought the strongest direction into Figma as a high-fidelity prototype, validated with target users, and iterated on the parts they tripped over.",
      },
    ],
    solution:
      "A reorganised community section with clearer feature naming, a refined IA, and surface-level changes that invite listeners to participate without having to relearn the app. The redesign focuses on the moments that earn trust — first interaction, first reply, first follow.",
    results: [
      { label: "Users interviewed", value: "12" },
      { label: "Survey responses", value: "80+" },
      { label: "IA proposals tested", value: "2" },
      { label: "High-fidelity screens", value: "24" },
    ],
    gallery: [
      {
        alt: "Castbox community home screen with clearer feature hierarchy",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Discussion thread with renamed actions and clearer affordances",
        ratio: "portrait",
        span: "regular",
      },
      {
        alt: "Information architecture diagram comparing original and redesigned navigation",
        ratio: "wide",
        span: "full",
      },
      {
        alt: "Onboarding flow introducing the community section to new listeners",
        ratio: "video",
        span: "wide",
      },
    ],
    link: { label: "View on Figma", href: "https://figma.com" },
  },
  // {
  //   slug: "filimo-vod",
  //   title: "Filimo VOD Platform",
  //   tagline: "A team redesign of a streaming web app, end-to-end.",
  //   summary:
  //     "A three-month team project at Spiral Academy redesigning the Filimo VOD platform — covering UX and UI from research and persona work through to a documented design system.",
  //   year: "2023",
  //   client: "Spiral Academy course project",
  //   role: "UX/UI Designer (collaborator)",
  //   duration: "3 months",
  //   team: ["2 designers"],
  //   tags: ["VOD", "Web App", "Design System"],
  //   tools: ["Figma", "FigJam", "Notion"],
  //   featured: true,
  //   cover: {
  //     src: "/projects/filimo-vod/cover.jpeg",
  //     alt: "Filimo VOD platform redesign — mobile screen showcase",
  //     ratio: "video",
  //     span: "full",
  //   },
  //   problem:
  //     "Filimo's existing experience felt dated for a modern streaming audience. Our brief was to redesign the web app to better serve both the user's expectations and the platform's business goals — without losing the catalogue depth that made the product valuable in the first place.",
  //   process: [
  //     {
  //       heading: "Research & evaluation",
  //       body: "Usability testing on the existing product, surveys to a broader audience, and persona development to ground every later decision.",
  //     },
  //     {
  //       heading: "Architecture",
  //       body: "User flows and information architecture mapped against a redesigned content model — so the UI could be reorganised without losing access to the catalogue.",
  //     },
  //     {
  //       heading: "Wireframes & style",
  //       body: "Wireframing in low fidelity, followed by a style guide that defined typography, colour, spacing, and the small set of components every screen would lean on.",
  //     },
  //     {
  //       heading: "Final UI",
  //       body: "High-fidelity design balancing user needs against business goals — with an emphasis on browsing, personalisation, and the moment of pressing play.",
  //     },
  //   ],
  //   solution:
  //     "An updated VOD experience with clearer browsing, better personalisation, and a documented design system the team could continue to extend after the course handoff.",
  //   results: [
  //     { label: "Personas defined", value: "3" },
  //     { label: "Usability tests run", value: "5" },
  //     { label: "Screens designed", value: "40+" },
  //     { label: "Components in library", value: "60+" },
  //   ],
  //   gallery: [
  //     { alt: "Filimo home screen with personalised recommendations", ratio: "wide", span: "full" },
  //     { alt: "Catalogue browse view with refined filters", ratio: "portrait", span: "regular" },
  //     { alt: "Player and post-play surface", ratio: "portrait", span: "regular" },
  //   ],
  //   link: { label: "View on Figma", href: "https://figma.com" },
  // },
  // {
  //   slug: "food-delivery",
  //   title: "Food Delivery App",
  //   tagline: "Comparing, ordering, and tracking — a UI study in typography and grid.",
  //   summary:
  //     "A web UI for food takeaway: compare and filter restaurants, browse menus and reviews, complete payments, and track orders on a map. A focused study in typography, colour theory, and layout grids.",
  //   year: "2023",
  //   client: "Personal project",
  //   role: "UX/UI Designer",
  //   duration: "5 weeks",
  //   team: ["Solo project"],
  //   tags: ["E-commerce", "Web App", "UI Design"],
  //   tools: ["Figma"],
  //   featured: true,
  //   cover: {
  //     src: "/projects/food-delivery/cover.jpeg",
  //     alt: "Food delivery web app — desktop screen showcase",
  //     ratio: "video",
  //     span: "full",
  //   },
  //   problem:
  //     "Food delivery products often look the same — saturated, busy, hard to scan. I wanted to spend a focused sprint developing my eye for typography, colour, and grid systems, using a real product as the constraint.",
  //   process: [
  //     {
  //       heading: "Reference & strategy",
  //       body: "Reviewed leading food apps to understand which conventions were worth keeping and which were worth questioning.",
  //     },
  //     {
  //       heading: "Type & colour exploration",
  //       body: "Set the typographic system and colour palette before drawing screens — so the visual language led the layout, not the other way around.",
  //     },
  //     {
  //       heading: "Layout & components",
  //       body: "Designed the core flow around a strict 12-column grid with a small set of reusable components. Every screen had to justify itself against the system.",
  //     },
  //   ],
  //   solution:
  //     "A focused, restrained takeaway flow that earns its scale through type and rhythm rather than imagery — fast to scan, easy to reach the order, and quietly confident in its visual language.",
  //   results: [
  //     { label: "Screens designed", value: "22" },
  //     { label: "Components in library", value: "38" },
  //     { label: "Type sizes in scale", value: "6" },
  //     { label: "Colour tokens", value: "18" },
  //   ],
  //   gallery: [
  //     { alt: "Restaurant browse view with filters and category chips", ratio: "wide", span: "full" },
  //     { alt: "Menu detail with clear price hierarchy", ratio: "portrait", span: "regular" },
  //     { alt: "Order tracking view with map integration", ratio: "portrait", span: "regular" },
  //   ],
  //   link: { label: "View on Figma", href: "https://figma.com" },
  // },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
