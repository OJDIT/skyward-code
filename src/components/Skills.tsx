import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Responsive Design"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "Supabase", "REST APIs", "Node.js", "Python", "Rust", "Auth Systems"],
  },
  {
    title: "Integrations",
    skills: ["BLE (Bluetooth Low Energy)", "Mobile Integration", "API Integration", "Media Management"],
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "GitHub", "Admin Dashboards", "CMS", "UI/UX Implementation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">// 02 — Skills</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Tools I use to <span className="text-gradient">build & ship</span>.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_var(--primary)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  0{i + 1}/0{groups.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag cursor-default rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
