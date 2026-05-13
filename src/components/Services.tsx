import { motion } from "framer-motion";
import {
  Code2, Layers, LayoutDashboard, Database,
  Smartphone, Plug, Bluetooth, Gauge,
} from "lucide-react";

const services = [
  { Icon: Code2, title: "Frontend Development", desc: "React.js, Next.js & Tailwind CSS — pixel-perfect UIs" },
  { Icon: Layers, title: "Full-Stack Web Apps", desc: "End-to-end product development from DB to deploy" },
  { Icon: LayoutDashboard, title: "Admin Dashboard & CMS", desc: "Custom management systems for real operational needs" },
  { Icon: Database, title: "Firebase & Supabase", desc: "Real-time databases, auth, and cloud storage integration" },
  { Icon: Smartphone, title: "Responsive UI/UX", desc: "Mobile-first design that works on every screen" },
  { Icon: Plug, title: "REST API Integration", desc: "Seamless connection to third-party services and data" },
  { Icon: Bluetooth, title: "BLE & Mobile Integration", desc: "Bluetooth device and mobile-native feature integration" },
  { Icon: Gauge, title: "Performance Optimization", desc: "Fast, accessible, SEO-ready web products" },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">// 04 — Services</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          What I can <span className="text-gradient">build for you</span>.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-background p-7 transition-colors hover:bg-surface"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_24px_-4px_var(--primary)]">
                <s.Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 h-px w-8 bg-gold opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
