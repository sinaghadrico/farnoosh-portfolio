import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/content/site";
import { SocialIcon } from "./SocialIcon";
import { CopyEmailButton } from "./CopyEmailButton";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative border-t border-border bg-bg">
      <div className="container py-10 md:py-14">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E94BA4]/30 bg-gradient-to-r from-[#F97316]/10 via-[#E94BA4]/10 to-[#9333EA]/10 px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E94BA4] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E94BA4]" />
          </span>
          <span className="bg-gradient-to-r from-[#F97316] via-[#E94BA4] to-[#9333EA] bg-clip-text text-transparent font-medium">
            Available for new projects
          </span>
        </div>

        {/* Mobile: heading then contacts stacked / Desktop: 2-col aligned grid */}
        <div className="flex flex-col gap-6 md:hidden">
          <h2 className="font-sans font-medium text-3xl tracking-tight">
            <span className="block">Ready to collaborate?</span>
            <span className="block mt-2">Let's turn your ideas into reality!</span>
          </h2>
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-fg-muted shrink-0" />
              <a className="link-hover" href={`mailto:${site.email}`}>{site.email}</a>
              <CopyEmailButton email={site.email} iconOnly />
            </div>
            {site.socials.filter(s => s.label === "LinkedIn").map((s) => (
              <a key={s.href} className="link-hover inline-flex items-center gap-2" href={s.href} target="_blank" rel="noreferrer">
                <SocialIcon label={s.label} size={18} className="text-fg-muted" />
                {s.label}
                <ArrowUpRight size={16} className="opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 gap-y-5">
          <span className="font-sans font-medium text-4xl tracking-tight flex items-center">
            Ready to collaborate?
          </span>
          <div className="flex items-center gap-2 text-lg md:justify-end">
            <Mail size={14} className="text-fg-muted shrink-0" />
            <a className="link-hover" href={`mailto:${site.email}`}>{site.email}</a>
            <CopyEmailButton email={site.email} iconOnly />
          </div>
          <span className="font-sans font-medium text-4xl tracking-tight flex items-center">
            Let's turn your ideas into reality!
          </span>
          {site.socials.filter(s => s.label === "LinkedIn").map((s) => (
            <div key={s.href} className="flex items-center text-lg md:justify-end">
              <a className="link-hover inline-flex items-center gap-2" href={s.href} target="_blank" rel="noreferrer">
                <SocialIcon label={s.label} size={18} className="text-fg-muted" />
                {s.label}
                <ArrowUpRight size={16} className="opacity-50" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 border-t border-border pt-6 text-fg-muted">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs">© {year} {site.fullName}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
