import type { Project } from "@/types";

/**
 * To add a project: copy an entry, change the slug (used in URL).
 * Leave `cover.src` undefined to render a styled placeholder.
 * Drop real images in /public/projects/<slug>/ and reference them as
 * "/projects/<slug>/cover.jpg".
 */
export const projects: Project[] = [
  {
    slug: "helix-banking",
    title: "Helix Banking",
    tagline: "Reimagining mobile finance for a generation that grew up online.",
    summary:
      "A ground-up redesign of a mobile-first bank used by 1.2M customers across Europe — from onboarding to budgeting to the moment money moves.",
    year: "2024",
    client: "Helix Bank",
    role: "Lead Product Designer",
    duration: "10 months",
    team: ["1 Design Lead (me)", "2 Product Designers", "1 Researcher", "8 Engineers"],
    tags: ["Fintech", "Mobile App", "Design System"],
    tools: ["Figma", "Principle", "Maze", "Lookback"],
    featured: true,
    cover: {
      alt: "Helix Banking app screens arranged on a warm gradient backdrop",
      ratio: "video",
      span: "full",
    },
    problem:
      "Helix had outgrown the screens it shipped at launch. New products — savings vaults, group spending, FX transfers — were bolted onto a navigation built for a single checking account. Activation had plateaued and support volume was climbing.",
    process: [
      {
        heading: "Listening before drawing",
        body: "I spent the first six weeks in research with the team. We ran 24 customer interviews, shadowed three support agents for a week each, and read every survey response from the past year.",
        list: [
          "Synthesized 240+ pain points into seven journey themes.",
          "Mapped the existing IA against the new product roadmap to find conflicts early.",
          "Co-defined success metrics with product and engineering leadership.",
        ],
      },
      {
        heading: "Designing in systems",
        body: "Rather than redesigning screens, I started with primitives. We rebuilt the type scale, motion language, and component set so every team could ship consistent work without waiting on design.",
      },
      {
        heading: "Prototyping with real money",
        body: "We tested against live financial data in a sandboxed build. Every flow was validated with at least eight customers before development began, with an emphasis on first-time users and high-value account-holders.",
      },
    ],
    solution:
      "A new navigation grouped around intent — Spend, Save, Send, Grow — backed by a design system that doubled the team's shipping velocity. The redesign launched in three rolling phases over five months, with no measurable drop in DAU during transitions.",
    results: [
      { label: "Increase in feature activation", value: "+38%" },
      { label: "Reduction in support tickets", value: "−42%" },
      { label: "App Store rating after launch", value: "4.8 ★" },
      { label: "Design tokens shipped", value: "186" },
    ],
    gallery: [
      { alt: "Helix home screen with personalized greeting and balance card", ratio: "portrait", span: "regular" },
      { alt: "Spending insights view with category breakdown chart", ratio: "portrait", span: "regular" },
      { alt: "Component library overview from the redesigned design system", ratio: "wide", span: "full" },
      { alt: "Onboarding flow showing identity verification step", ratio: "video", span: "wide" },
    ],
    link: { label: "Visit Helix", href: "https://example.com" },
  },
  {
    slug: "foundry-cms",
    title: "Foundry CMS",
    tagline: "A content workspace where editors and engineers finally agree.",
    summary:
      "An end-to-end redesign of a headless CMS used by editorial teams at media companies, marketing orgs, and independent publishers.",
    year: "2024",
    client: "Foundry",
    role: "Product Designer",
    duration: "6 months",
    team: ["1 Designer (me)", "1 PM", "5 Engineers"],
    tags: ["SaaS", "Editor", "Design System"],
    tools: ["Figma", "ProseMirror", "Linear"],
    featured: true,
    cover: {
      alt: "Foundry editor with a long-form article in focus",
      ratio: "video",
      span: "full",
    },
    problem:
      "Foundry's editor felt powerful to engineers and overwhelming to writers. Editorial teams were exporting drafts into other tools to think, then pasting back in. The product was losing the room.",
    process: [
      {
        heading: "Diary studies with editors",
        body: "We recruited twelve editors across three customer segments and ran two-week diary studies. The patterns were clear: writers needed quiet, structure on demand, and trust in the autosave.",
      },
      {
        heading: "Two surfaces, one model",
        body: "I designed a writing mode that hid everything but the page, alongside a structured mode for production. Both read and write to the same content model, so switching costs nothing.",
      },
      {
        heading: "Shipped in the open",
        body: "We released changes weekly behind a flag and held a public office hour for customers. By the time the redesign was default-on, the loudest power users were already advocates.",
      },
    ],
    solution:
      "A focused, dual-mode editor with a redesigned media library, a faster publishing flow, and a workflow surface that finally fits the way teams actually move work through review.",
    results: [
      { label: "Writing-to-publish time", value: "−54%" },
      { label: "Net Promoter Score lift", value: "+22 pts" },
      { label: "Free-to-paid conversion", value: "+18%" },
      { label: "Active editors per workspace", value: "2.3×" },
    ],
    gallery: [
      { alt: "Foundry writing mode with distraction-free canvas", ratio: "wide", span: "full" },
      { alt: "Structured editor showing block-level controls", ratio: "portrait", span: "regular" },
      { alt: "Media library grid view with smart filters", ratio: "portrait", span: "regular" },
    ],
  },
  {
    slug: "atlas-travel",
    title: "Atlas Travel",
    tagline: "Booking, without the friction of booking.",
    summary:
      "A consumer travel app built around recommendations from people you actually trust — friends, family, and a small set of human curators.",
    year: "2023",
    client: "Atlas",
    role: "Founding Designer",
    duration: "9 months",
    team: ["Founder/CEO", "1 Designer (me)", "4 Engineers"],
    tags: ["Consumer", "Mobile App", "Brand"],
    tools: ["Figma", "Origami", "Notion"],
    featured: true,
    cover: {
      alt: "Atlas travel app cover with a curated guide to Lisbon",
      ratio: "video",
      span: "full",
    },
    problem:
      "Travel apps optimize for filling beds, not making memories. Atlas wanted to start somewhere different: with the recommendations a friend would text you the moment you mentioned a trip.",
    process: [
      {
        heading: "Defining the brand from day one",
        body: "I led brand and product in parallel. The identity — warm, hand-built, opinionated — fed directly into the app's voice and motion language.",
      },
      {
        heading: "Cards as the unit of trust",
        body: "Every recommendation in Atlas is a card, attributed to a real person. The card is the primitive: it nests, stacks into guides, and travels into messages and email.",
      },
      {
        heading: "Soft launch in three cities",
        body: "We launched in Lisbon, Mexico City, and Tokyo with a small set of human curators. Growth was invitation-only for the first six months — by design.",
      },
    ],
    solution:
      "A consumer travel app that reads more like a love letter than a marketplace. Atlas hit profitability in eighteen months on a single, premium subscription tier.",
    results: [
      { label: "Day-30 retention", value: "61%" },
      { label: "Avg. recommendations saved per user", value: "23" },
      { label: "Featured by Apple", value: "App of the Day" },
      { label: "Subscriber growth, year one", value: "12k → 84k" },
    ],
    gallery: [
      { alt: "Atlas guide for Lisbon with stacked recommendation cards", ratio: "portrait", span: "regular" },
      { alt: "Curator profile with their recommendations", ratio: "portrait", span: "regular" },
      { alt: "Atlas brand system showing logo, type, and palette", ratio: "wide", span: "full" },
    ],
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    tagline: "A wearable companion that takes the work out of looking after yourself.",
    summary:
      "Companion app for a continuous health monitor — designed to feel less like a clinic and more like a quiet, attentive friend.",
    year: "2022",
    client: "Pulse",
    role: "Senior Product Designer",
    duration: "7 months",
    team: ["2 Designers", "1 PM", "1 Clinical Advisor", "6 Engineers"],
    tags: ["Health", "Mobile App", "Wearable"],
    tools: ["Figma", "ProtoPie", "TestFlight"],
    cover: {
      alt: "Pulse Health app showing a daily summary on the home screen",
      ratio: "video",
      span: "full",
    },
    problem:
      "Wearable health apps overwhelm users with metrics and stay silent on what they mean. Pulse needed to translate continuous data into a small number of clear, kind, useful signals.",
    process: [
      {
        heading: "Working with clinicians",
        body: "We co-designed thresholds and language with a panel of three physicians and a behavioral psychologist. Every word in an alert was reviewed for tone as well as accuracy.",
      },
      {
        heading: "Quiet by default",
        body: "Pulse only speaks up when something matters. The home screen is one sentence and one chart. Detail lives a tap away — never up front.",
      },
    ],
    solution:
      "A daily summary in plain language, a long-form 'why this matters' for every metric, and an alert system designed to never wake the user unless it has to.",
    results: [
      { label: "7-day active users", value: "+47%" },
      { label: "Self-reported anxiety scores", value: "−31%" },
      { label: "Apple App Store rating", value: "4.7 ★" },
    ],
    gallery: [
      { alt: "Pulse home screen with a single daily message", ratio: "portrait", span: "regular" },
      { alt: "Detail view explaining a heart-rate metric", ratio: "portrait", span: "regular" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
