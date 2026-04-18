import { site } from "@/content/site";
import type { Project } from "@/types";
import { absoluteUrl } from "@/lib/utils";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    image: absoluteUrl(site.ogImage, site.url),
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} — ${site.role}`,
    url: site.url,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: site.fullName,
    },
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`, site.url),
    image: project.cover.src
      ? absoluteUrl(project.cover.src, site.url)
      : absoluteUrl(site.ogImage, site.url),
    dateCreated: project.year,
    creator: {
      "@type": "Person",
      name: site.fullName,
      url: site.url,
    },
    about: project.tags,
    keywords: project.tags.join(", "),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.href, site.url),
    })),
  };
}
