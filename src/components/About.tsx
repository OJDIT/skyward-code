import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 1.6, ease: "easeOut" });
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toString() + suffix;
    });
    return () => {
      ctrl.stop();
      unsub();
    };
  }, [inView, to, suffix, mv]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 4, suffix: "+", label: "Years Building" },
  { value: 2, suffix: "", label: "Degrees" },
  { value: 1, suffix: "", label: "Mission: Build things that matter" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-widest text-gold"
        >
          // 01 — About
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold leading-tight sm:text-5xl"
            >
              Engineer by training.<br />
              <span className="text-gradient">Builder by obsession.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground"
            >
              <p>
                I'm <span className="text-foreground">Daniel Ojima Shaibu</span> — a Full-Stack Web/App
                Developer with a B.Eng. in Computer Engineering (FUT Minna, 2023) and an MSc in Computer
                Science (University of Abuja, 2025).
              </p>
              <p>
                I build production-grade digital products that solve real problems — from anti-counterfeiting
                platforms and maternal health systems to audio distribution tools and architecture community hubs.
              </p>
              <p>
                My work lives at the intersection of clean code, thoughtful UI, and scalable architecture.
                I care about what ships, how it performs, and whether it actually helps people.
              </p>
            </motion.div>
          </div>

          {/* Geometric avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-3xl border border-border bg-surface" />
            <div className="absolute inset-4 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--primary),transparent_60%),radial-gradient(circle_at_70%_80%,var(--gold),transparent_60%)] opacity-60" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-[10rem] font-bold leading-none">
                <span className="text-gold">D</span>
                <span className="text-foreground/90">S</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-full border border-gold/40 bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gold">
              Abuja · NG
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
