import { motion } from "framer-motion";

const items = [
  { degree: "MSc Computer Science", school: "University of Abuja, Abuja, Nigeria", year: "2025" },
  { degree: "B.Eng. Computer Engineering", school: "Federal University of Technology Minna, Niger State", year: "2023" },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">// 05 — Education</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Trained as an <span className="text-gradient">engineer</span>.
        </h2>

        <div className="relative mt-14 pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-gold via-primary to-transparent"
          />
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[34px] top-2 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-background" />
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="font-mono text-xs text-gold">{it.year}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{it.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
