import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSection } from "@/components/google-maps/HeroSection";
import { ScopeSection } from "@/components/google-maps/ScopeSection";
import { MyRoleSection } from "@/components/google-maps/MyRoleSection";
import { ProblemDiscoverySection } from "@/components/google-maps/ProblemDiscoverySection";
import { InterviewSection } from "@/components/google-maps/InterviewSection";
import { ChallengesSection } from "@/components/google-maps/ChallengesSection";
import { PersonaSection } from "@/components/google-maps/PersonaSection";
import { CompetitiveAnalysisSection } from "@/components/google-maps/CompetitiveAnalysisSection";
import { ImpactEffortSection } from "@/components/google-maps/ImpactEffortSection";
import { VisualDesignSection } from "@/components/google-maps/VisualDesignSection";
import {
  SuccessMetricSection,
  TakeawaysSection,
  ThanksSection,
} from "@/components/google-maps/ClosingSections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/jsonld";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

const project = getProject("google-maps")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  alternates: { canonical: "/projects/google-maps" },
  openGraph: {
    type: "article",
    title: `${project.title} — ${project.tagline}`,
    description: project.summary,
    url: "/projects/google-maps",
    publishedTime: `${project.year}-01-01`,
    authors: [site.fullName],
  },
};

/**
 * Bespoke Google Maps case study, implemented from the Figma frame
 * "Google Maps" (1280×24208).
 *
 * This static route takes precedence over /projects/[slug], so the shared
 * case-study template still serves every other project.
 */
export default function GoogleMapsCaseStudy() {
  return (
    <article className="bg-[#FCFCFC] [color-scheme:light]">
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: "/projects/google-maps" },
        ])}
      />

      <HeroSection />
      <ScopeSection />
      <MyRoleSection />
      <ProblemDiscoverySection />
      <InterviewSection />
      <ChallengesSection />
      <PersonaSection />
      <CompetitiveAnalysisSection />
      <ImpactEffortSection />
      <VisualDesignSection />
      <SuccessMetricSection />
      <TakeawaysSection />
      <ThanksSection />

      <div className="mx-auto w-full max-w-[1136px] px-5 pb-16 sm:px-10 md:px-[72px]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-dm text-[14px] text-[#667085] hover:underline"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>
      </div>
    </article>
  );
}
