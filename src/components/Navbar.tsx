import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-1 font-display text-2xl font-bold"
        >
          <span className="text-gold">D</span>
          <span className="text-foreground">S</span>
          <span className="ml-2 hidden h-[2px] w-6 bg-gold transition-all duration-300 group-hover:w-10 sm:inline-block" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative font-mono text-xs uppercase tracking-widest transition-colors ${
                active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/cv-daniel-shaibu.pdf"
            download
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-gold hover:text-gold sm:inline-flex"
          >
            <Download size={14} /> CV
          </a>
          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-[0_8px_30px_-8px_var(--primary)] md:inline-flex"
          >
            Hire Me
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-6 mt-3 rounded-2xl border border-border bg-surface p-6">
            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-fade-in text-left font-display text-2xl font-semibold text-foreground"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go("contact")}
                className="mt-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
