"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Index", number: "01" },
  { href: "/projects", label: "Work", number: "02" },
  { href: "/about", label: "About", number: "03" },
  { href: "/contact", label: "Contact", number: "04" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-lg tracking-tight"
            aria-label={`${site.fullName} — Home`}
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-150"
            />
            <span className="font-medium">{site.name}</span>
            <span className="hidden text-fg-muted md:inline">— {site.role}</span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive(item.href)
                        ? "text-fg"
                        : "text-fg-muted hover:text-fg"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-widest",
                        isActive(item.href) ? "text-accent" : "text-fg-subtle"
                      )}
                    >
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-border px-4 py-2 text-sm transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg md:inline-flex"
            >
              Start a project
            </Link>
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg md:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg transition-opacity duration-300 md:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container flex h-full flex-col pt-24">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-baseline justify-between border-b border-border py-5 text-3xl font-serif transition-colors",
                      isActive(item.href) ? "text-fg" : "text-fg-muted"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-fg-subtle">
                      {item.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pb-8">
            <p className="label mb-3">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
