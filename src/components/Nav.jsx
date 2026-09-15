import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Coaching" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Results" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a
          className="nav-brand"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            go("hero");
          }}
        >
          Ahmad Jamal
        </a>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="btn btn-ghost nav-cta" onClick={() => go("contact")}>
          Book a call
        </button>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="btn btn-primary" onClick={() => go("contact")}>
            Book a call
          </button>
        </div>
      )}
    </header>
  );
}
