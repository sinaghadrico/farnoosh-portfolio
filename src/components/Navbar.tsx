"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/#work", label: "My work" },
  { href: "/#about", label: "About me" },
  {
    href: "/FarnooshBagheri-Resume(Product Designer).pdf",
    label: "Resume",
    download: true,
  },
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

  const isActive = (href: string) => {
    // Anchor links on the home page — only "active" when actually at "/"
    if (href.startsWith("/#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 ",
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            aria-label={`${site.fullName} — Home`}
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.download ? (
                      <a
                        href={item.href}
                        download
                        className="group relative inline-flex items-center rounded-full px-5 py-2 text-base font-medium text-fg-muted transition-colors duration-300 hover:text-fg"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative inline-flex items-center rounded-full px-5 py-2 text-base font-medium transition-colors duration-300",
                          isActive(item.href)
                            ? "text-fg"
                            : "text-fg-muted hover:text-fg",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/#contact"
              className="hidden rounded-full border border-fg bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors duration-300 hover:bg-bg hover:text-fg md:inline-flex"
            >
              Contact
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
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container flex h-full flex-col pt-24">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  {item.download ? (
                    <a
                      href={item.href}
                      download
                      className="block border-b border-border py-5 text-3xl font-serif text-fg-muted transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-border py-5 text-3xl font-serif transition-colors",
                        isActive(item.href) ? "text-fg" : "text-fg-muted",
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
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
