export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
  /** Optional bullet points rendered under the body. */
  list?: string[];
};

export type ProjectImage = {
  /** Caption rendered beneath the image */
  caption?: string;
  /** Optional path under /public — leave undefined to render a styled placeholder */
  src?: string;
  alt: string;
  /** Width in grid columns: "full" (12), "wide" (10), "regular" (8). */
  span?: "full" | "wide" | "regular";
  /** Aspect ratio for the placeholder/image frame */
  ratio?: "square" | "video" | "portrait" | "wide";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** Display order on the projects index */
  year: string;
  client: string;
  role: string;
  /** Listed in the case study header */
  duration: string;
  team?: string[];
  tags: string[];
  /** Tools / platforms used */
  tools?: string[];
  /** Whether to show on the home "Selected Work" list */
  featured?: boolean;
  /** Hero image for cards & detail header */
  cover: ProjectImage;
  /** The case-study sections render in order */
  problem: string;
  process: ProjectSection[];
  solution: string;
  results: ProjectMetric[];
  gallery: ProjectImage[];
  /** Optional external link (live site, case study mirror) */
  link?: { label: string; href: string };
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  description: string;
  /** Used for canonical URLs, OG, JSON-LD. No trailing slash. */
  url: string;
  email: string;
  location: string;
  availability: string;
  socials: SocialLink[];
  /** Default OG image path under /public */
  ogImage: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Recognition = {
  title: string;
  source: string;
  year: string;
  emoji?: string;
};
