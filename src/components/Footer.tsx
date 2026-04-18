import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-border bg-bg">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="label mb-4">Currently</p>
            <h2 className="font-serif text-display-md">
              Open to one new engagement this season. Let&rsquo;s talk.
            </h2>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-fg px-5 py-3 text-sm transition-all duration-300 hover:bg-fg hover:text-bg"
            >
              Start a project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
              />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Contact</p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a className="link-hover" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="text-fg-muted">{site.location}</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">Elsewhere</p>
            <ul className="space-y-1.5 text-sm">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    className="link-hover inline-flex items-center gap-1"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                    <ArrowUpRight size={11} className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-emerald-500 align-middle" />
            {site.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
