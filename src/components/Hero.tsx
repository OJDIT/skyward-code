import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiSupabase, SiTypescript, SiRust, SiPython,
} from "react-icons/si";

const stack = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiSupabase, label: "Supabase" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiRust, label: "Rust" },
  { Icon: SiPython, label: "Python" },
];

const lines = ["Building Scalable", "Digital Experiences", "That Actually Ship."];

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Available for projects · Abuja, Nigeria
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`block ${i === 2 ? "text-gradient" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            Full-Stack Web/App Developer · React · Next.js · Firebase · Supabase.
            <span className="block mt-1">Based in Nigeria. Building for the world.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_-10px_var(--primary)]"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </button>
            <a
              href="/cv-daniel-shaibu.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-gold hover:text-gold"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {stack.map(({ Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                title={label}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="float-slow hidden lg:block"
        >
          <div className="card-tilt rounded-2xl border border-border bg-surface/80 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/daniel.ts</span>
            </div>
            <pre className="font-mono text-[12.5px] leading-relaxed">
{`const daniel = {
  role: "Full-Stack Developer",
  base: "Abuja, Nigeria",
  stack: ["React", "Next.js",
          "Supabase", "Firebase"],
  shipping: true,
  open_to: [
    "freelance",
    "collaboration",
    "full-time",
  ],
};

export default daniel;`}
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
        aria-label="Scroll"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.button>
    </section>
  );
}
