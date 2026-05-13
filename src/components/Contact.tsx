import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MessageCircle, Send, Check } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "danielojimashaibu@gmail.com";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const subject = fd.get("subject") as string;
    const message = fd.get("message") as string;

    const body = `From: ${name} <${email}>%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailto;
      setSending(false);
      setSent(true);
      toast.success("Message ready to send", { description: "Your mail client just opened." });
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold">// 07 — Contact</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Let's build <span className="text-gradient">something real</span>.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="text-sm text-foreground group-hover:text-gold break-all">{EMAIL}</div>
              </div>
            </a>
            <a
              href="tel:+2348112036460"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-primary">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="text-sm text-foreground group-hover:text-gold">08112036460</div>
              </div>
            </a>
            <a
              href="https://wa.me/2348112036460"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-primary">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="text-sm text-foreground group-hover:text-gold">wa.me/2348112036460</div>
              </div>
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/OJDIT"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shaibu-daniel-0307953b3/"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <div className="mt-5">
              <Field name="subject" label="Subject" required />
            </div>
            <div className="mt-5">
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="Tell me about your project…"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_var(--primary)] disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center gap-2">
                {sent ? (
                  <>Sent <Check size={16} /></>
                ) : (
                  <>{sending ? "Sending…" : "Send Message"} <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /></>
                )}
              </span>
            </button>

            <p className="mt-6 text-sm text-muted-foreground">
              Open to freelance projects, collaborations, and full-time opportunities.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: {
  name: string; label: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
