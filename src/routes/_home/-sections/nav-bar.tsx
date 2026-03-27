import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { ThemeToggleButton } from "@/components/theme/toggle-button";

const navLinks = [
  { href: "#struggle", label: "Overview", icon: "home" },
  { href: "#how", label: "Starting", icon: "play_circle" },
  { href: "#why", label: "Features", icon: "star" },
  { href: "#audience", label: "Audience", icon: "group" },
  { href: "#pricing", label: "Pricing", icon: "payments" },
  { href: "#contact", label: "Contact", icon: "mail" },
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
      className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b px-5 backdrop-blur-[14px] transition-[background,border-color] duration-300 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12"
      style={{
        background: "var(--cvp-nav-bg)",
        borderColor: "var(--cvp-border)",
      }}
    >
      <Link to="/" className="flex items-center">
        {/* Mobile: icon only */}
        <img src="/icon/light.svg" alt="ProTalent CV" className="size-8 dark:hidden sm:hidden" />
        <img src="/icon/dark.svg" alt="ProTalent CV" className="hidden size-8 dark:block dark:sm:hidden" />
        {/* sm+: full logo */}
        <img src="/logo/light.svg" alt="ProTalent CV" className="hidden h-8 w-auto dark:hidden sm:block" />
        <img src="/logo/dark.svg" alt="ProTalent CV" className="hidden h-8 w-auto dark:sm:block" />
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-4 md:flex lg:gap-6">
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
            <span>{link.label}</span>
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
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-none px-4 py-2 text-[13px] font-medium transition-[background,transform] duration-200 hover:-translate-y-px"
          style={{
            fontFamily: "var(--font-body)",
            background: "var(--cvp-accent)",
            color: "var(--cvp-btn-fg)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
            login
          </span>
          Login
        </Link>
      </div>
    </nav>
  );
}
