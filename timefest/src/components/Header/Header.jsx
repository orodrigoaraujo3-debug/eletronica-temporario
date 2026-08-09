import { useEffect, useRef, useState } from "react";
import { eventData } from "../../data/eventData";
import "./Header.css";

const NAV_ITEMS = [
  { label: "LINEUP", href: "#lineup" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STAGES", href: "#stages" },
  { label: "INFO", href: "#venue" },
  { label: "TICKETS", href: "#tickets" },
];

export function Header() {
  const [theme, setTheme] = useState("dark"); // header text color mode: 'dark' bg under header, 'light' bg under header
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerH = headerRef.current?.offsetHeight ?? 88;
    const sections = Array.from(document.querySelectorAll("[data-theme]"));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.getAttribute("data-theme") || "light");
          }
        });
      },
      {
        rootMargin: `-${headerH + 1}px 0px -${window.innerHeight - headerH - 2}px 0px`,
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const onLightBg = theme === "light";

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "site-header",
          onLightBg ? "site-header--on-light" : "site-header--on-dark",
          scrolled ? "site-header--scrolled" : "",
        ].join(" ")}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <a href="#top" className="site-header__logo" aria-label="TIME FEST — home">
          TIME<br />FEST
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__meta">
          <div className="site-header__date">
            <span>{eventData.date.display}</span>
            <span className="site-header__date-sub">
              {eventData.venue.name} · {eventData.venue.city.toUpperCase()}
            </span>
          </div>
          <a href="#tickets" className="btn btn--primary site-header__cta">
            GET TICKETS <span className="arrow">→</span>
          </a>
        </div>

        <button
          type="button"
          className="site-header__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <span>{eventData.date.display}</span>
          <span>{eventData.venue.name} · {eventData.venue.city}</span>
          <a href="#tickets" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            GET TICKETS <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
