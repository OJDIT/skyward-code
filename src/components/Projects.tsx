import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "ScanGuard",
    period: "2024",
    live: "https://scanguard.vercel.app/",
    repo: "https://github.com/OJDIT/scanguard0",
    desc: "A pivotal advancement in the fight against counterfeit products. ScanGuard provides a reliable, user-friendly tool for verifying product authenticity — empowering consumers, supporting legitimate businesses, and aiding regulatory bodies in enforcement.",
    stack: ["React.js", "Vercel", "Product Authentication", "QR/Scan Integration"],
    accent: "var(--primary)",
  },
  {
    name: "Heavenly Soundscapes",
    period: "Oct 2024 – Jul 2025",
    live: "https://www.heavenlysoundscape.com/",
    repo: "https://github.com/OJDIT/Heavenly-Soundscapes",
    desc: "A full-featured audio/music distribution platform with upload management, free downloads, Supabase storage, an admin dashboard, media management tools, and a complete storefront UI.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Media Management", "Admin Dashboard"],
    accent: "var(--gold)",
  },
  {
    name: "CRM Altar of Favour",
    period: "2023 – 2024",
    live: "https://www.crmdutse.com",
    repo: "https://github.com/OJDIT/crm",
    desc: "A church management and media platform featuring audio sermon streaming, event listings, a newsletter system, and fully responsive media sections for a faith-based community.",
    stack: ["React.js", "Firebase", "REST APIs", "Responsive Design"],
    accent: "var(--primary)",
  },
  {
    name: "SOH Foundation Dashboard",
    period: "2022 – 2023",
    live: "https://www.sohfoundation.com/",
    repo: "https://github.com/OJDIT/stone-of-help-foundation",
    desc: "An admin dashboard and CMS built for an NGO — featuring gallery uploads, content management, user administration, and a clean modern management interface.",
    stack: ["React.js", "Firebase", "Admin Systems", "Content Management"],
    accent: "var(--gold)",
  },
  {
    name: "TheArkitectsHub",
    period: "Dec 2025 – Apr 2026",
    live: "https://www.thearkitecktshub.com/",
    repo: "https://github.com/OJDIT/Thearkitectshub",
    desc: "A community-driven architecture platform with user profiles, a resource hub, blog system, featured architect sections, and newsletter integration. Built to serve architecture professionals across Africa and globally.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "CMS", "Newsletter Integration"],
    accent: "var(--primary)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">// 03 — Featured Work</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Projects that <span className="text-gradient">actually shipped</span>.
        </h2>

        <div className="mt-16 space-y-24">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Visual */}
                <div className="card-tilt relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-surface">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${p.accent}, transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, ${p.accent} 50%, transparent), transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {p.period}
                      </span>
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                        Live
                      </span>
                    </div>
                    <div>
                      <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                        {p.name}
                      </div>
                      <div className="mt-2 h-px w-24" style={{ background: p.accent }} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    0{i + 1} / 0{projects.length}
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{p.name}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
                    >
                      Live Site <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:text-gold"
                    >
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Re-export for type completeness
export { ExternalLink };
