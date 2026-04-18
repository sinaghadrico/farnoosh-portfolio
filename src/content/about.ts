import type { Experience, Recognition } from "@/types";

export const aboutCopy = {
  intro: [
    "I'm a product designer with eight years of experience shaping software for the financial, healthcare, and creative tooling industries. I care about the small interactions — the ones that compound into trust.",
    "Before going independent, I led design at two early-stage startups and worked across the surface area of the product: research, interaction design, prototyping, and shipping the build alongside engineers.",
    "I think of design as a craft: structured, evidence-led, and quietly opinionated. I bring the same attention to a checkout flow as I do to a marketing site headline.",
  ],
  philosophy: [
    {
      title: "Calm by default",
      body: "Software should reduce cognitive load, not add to it. I design for clarity, restraint, and a single primary action per screen.",
    },
    {
      title: "Systems over screens",
      body: "I build durable patterns and tokens that scale with a product. The work I leave behind should be easier to extend than to replace.",
    },
    {
      title: "Evidence over opinion",
      body: "I prototype early and test with real users. Strong intuition earns its keep; data settles disagreements.",
    },
    {
      title: "Close to the build",
      body: "I design in the browser when it makes sense and stay in the loop through implementation. Pixel-perfect handoffs are a team effort.",
    },
  ],
  capabilities: [
    "Product Strategy",
    "Interaction Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Brand Identity",
    "Motion & Micro-interactions",
    "Front-end Collaboration",
  ],
};

export const experience: Experience[] = [
  {
    company: "Independent Practice",
    role: "Product Designer",
    period: "2023 — Present",
    description:
      "Partnering with founders and product leaders to design end-to-end experiences across fintech, health, and developer tooling.",
  },
  {
    company: "Northwind Labs",
    role: "Lead Product Designer",
    period: "2020 — 2023",
    description:
      "Led the design org through Series A and B. Owned the design system, hiring, and the roadmap for the core analytics product.",
  },
  {
    company: "Studio Cardinal",
    role: "Senior Designer",
    period: "2018 — 2020",
    description:
      "Designed mobile and web products for clients including a national broadcaster and two consumer fintech startups.",
  },
  {
    company: "Helix Agency",
    role: "Product Designer",
    period: "2016 — 2018",
    description:
      "Cut my teeth on shipping cycles, research sprints, and brand work for early-stage software companies.",
  },
];

export const recognition: Recognition[] = [
  { title: "Site of the Day", source: "Awwwards", year: "2024" },
  { title: "Best Independent Practice", source: "Brand New Awards", year: "2024" },
  { title: "Honorable Mention — UX Design", source: "FWA", year: "2023" },
  { title: "Featured Designer", source: "Sidebar", year: "2023" },
];
