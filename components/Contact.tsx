import { profile } from "@/lib/data";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import BeltRule from "./BeltRule";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <p className="eyebrow mb-6">06 · Contact</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
          Have a project, an internship, or a sparring match? Let's talk.
        </h2>

        <BeltRule className="my-10" />

        <div className="grid gap-6 sm:grid-cols-4">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 border border-line p-5 transition-colors hover:border-gold-400/50"
          >
            <Mail size={18} className="text-gold-400" />
            <span className="font-mono text-sm text-paper/90 group-hover:text-gold-300">
              {profile.email}
            </span>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="group flex items-center gap-3 border border-line p-5 transition-colors hover:border-gold-400/50"
          >
            <Phone size={18} className="text-gold-400" />
            <span className="font-mono text-sm text-paper/90 group-hover:text-gold-300">
              {profile.phone}
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-line p-5 transition-colors hover:border-gold-400/50"
          >
            <Linkedin size={18} className="text-gold-400" />
            <span className="font-mono text-sm text-paper/90 group-hover:text-gold-300">
              LinkedIn
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-line p-5 transition-colors hover:border-gold-400/50"
          >
            <Github size={18} className="text-gold-400" />
            <span className="font-mono text-sm text-paper/90 group-hover:text-gold-300">
              GitHub
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} Eniz Dajić. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p className="font-mono text-[11px] text-muted">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
