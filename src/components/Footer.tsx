import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/content/site";
import { SocialIcon } from "./SocialIcon";
import { CopyEmailButton } from "./CopyEmailButton";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="container py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm text-green-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </div>
          <h2 className="font-serif text-display-md">
            Ready to collaborate? <br />
            Let’s turn your ideas into reality!
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-16 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={13} className="text-fg-muted" />
              <a className="link-hover" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <CopyEmailButton email={site.email} iconOnly />
            </li>
            {site.socials
              .filter((s) => s.label === "LinkedIn")
              .map((s) => (
                <li key={s.href}>
                  <a
                    className="link-hover inline-flex items-center gap-2"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialIcon
                      label={s.label}
                      size={13}
                      className="text-fg-muted"
                    />
                    {s.label}
                    <ArrowUpRight size={11} className="opacity-50" />
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
