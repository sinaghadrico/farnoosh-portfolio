import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSection } from "@/components/castbox/HeroSection";
import { RoleSection } from "@/components/castbox/RoleSection";
import { ScopeSection } from "@/components/castbox/ScopeSection";
import { AboutCastboxSection } from "@/components/castbox/AboutCastboxSection";
import { ProblemDiscoverySection } from "@/components/castbox/ProblemDiscoverySection";
import { AssumptionsSection } from "@/components/castbox/AssumptionsSection";
import { SurveySection } from "@/components/castbox/SurveySection";
import { InterviewsSection } from "@/components/castbox/InterviewsSection";
import { PersonasSection } from "@/components/castbox/PersonasSection";
import { CompetitiveAnalysisSection } from "@/components/castbox/CompetitiveAnalysisSection";
import { IdeationSection } from "@/components/castbox/IdeationSection";
import { CrazyEightsSection } from "@/components/castbox/CrazyEightsSection";
import { VisualDesignSection } from "@/components/castbox/VisualDesignSection";
import { UserFeedbackSection } from "@/components/castbox/UserFeedbackSection";
import {
  SuccessMetricSection,
  ChallengesSection,
  TakeawaysSection,
  ThanksSection,
} from "@/components/castbox/ClosingSections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/jsonld";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

const project = getProject("castbox")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  alternates: { canonical: "/projects/castbox" },
  openGraph: {
    type: "article",
    title: `${project.title} — ${project.tagline}`,
    description: project.summary,
    url: "/projects/castbox",
    publishedTime: `${project.year}-01-01`,
    authors: [site.fullName],
  },
};

/**
 * Bespoke Castbox case study, implemented from the Figma file
 * "My Case Studies → Castbox Case Study" (1280×20373).
 *
 * This static route takes precedence over /projects/[slug], so the shared
 * case-study template still serves every other project.
 */
export default function CastboxCaseStudy() {
  return (
    <article className="bg-[#FCFCFC] [color-scheme:light]">
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: "/projects/castbox" },
        ])}
      />

      <HeroSection />
      <RoleSection />
      <ScopeSection />
      <AboutCastboxSection />
      <ProblemDiscoverySection />
      <AssumptionsSection />
      <SurveySection />
      <InterviewsSection />
      <PersonasSection />
      <CompetitiveAnalysisSection />
      <IdeationSection />
      <CrazyEightsSection />
      <VisualDesignSection />
      <UserFeedbackSection />
      <SuccessMetricSection />
      <ChallengesSection />
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
