import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { BrandIcon } from "@/components/ui/brand-icon";
import { ThemeToggleButton } from "@/components/theme/toggle-button";

const navLinks = [
  { href: "#how", label: "How it works?", icon: "play_circle" },
  { href: "#why", label: "Why use ProTalent CV?", icon: "star" },
  { href: "#audience", label: "Who's it for?", icon: "group" },
  { href: "#pricing", label: "What's the cost?", icon: "payments" },
];

export function NavBar() {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollingRef = useRef(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    scrollingRef.current = true;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth" });

    // Re-enable observer after scroll settles
    setTimeout(() => {
      scrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (scrollingRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const section of sections) {
      observerRef.current.observe(section);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b px-5 backdrop-blur-[14px] transition-[background,border-color] duration-300 md:grid md:grid-cols-[1fr_auto_1fr] md:px-12"
      style={{
        background: "var(--cvp-nav-bg)",
        borderColor: "var(--cvp-border)",
      }}
    >
      <Link to="/" className="flex items-center">
        <BrandIcon variant="icon" className="size-8 sm:hidden" />
        <BrandIcon variant="logo" className="hidden h-8 w-auto sm:block" />
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="cvp-nav-link flex items-center gap-1.5 text-sm transition-colors duration-200 hover:opacity-80"
            data-active={activeId === link.href.slice(1)}
            style={{ color: "var(--cvp-ink-muted)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              {link.icon}
            </span>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4">
        <ThemeToggleButton
          variant="outline"
          className="size-9 shrink-0 rounded-[10px]"
          style={{
            borderColor: "var(--cvp-border-mid)",
            background: "var(--cvp-bg-sub)",
          }}
        />

        <Link
          to="/dashboard"
          className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-none px-5 py-2 text-[13px] font-medium transition-[background,transform] duration-200 hover:-translate-y-px"
          style={{
            fontFamily: "var(--font-body)",
            background: "var(--cvp-accent)",
            color: "var(--cvp-btn-fg)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
            login
          </span>
          Login Here
        </Link>
      </div>
    </nav>
  );
}
