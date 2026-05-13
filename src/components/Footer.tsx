import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-bold">
            <span className="text-gold">D</span>
            <span className="text-foreground">S</span>
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Daniel Ojima Shaibu --
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/OJDIT" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/shaibu-daniel-0307953b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            <Linkedin size={15} />
          </a>
          <a href="mailto:danielojimashaibu@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
