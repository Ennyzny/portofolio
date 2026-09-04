import { profile, stats, projects } from "@/lib/data";
import { ArrowDownRight, Mail } from "lucide-react";

const allStats = [...stats, { value: String(projects.length), label: "Projects" }];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#DFA94F 1px, transparent 1px), linear-gradient(90deg, #DFA94F 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-6">{profile.tagline}</p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-6xl">
          Eniz builds software with precision, discipline, and an eye for detail.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gold-400 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            View projects
            <ArrowDownRight size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            <Mail size={15} />
            {profile.email}
          </a>

          <a
            href="/DajicEniz_CV.pdf"
            download="DajicEniz_CV.pdf"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            Download CV
          </a>
        </div>

        <div className="mt-16 flex items-center">
          <div className="h-3 flex-1 bg-ink-800" />
          <div className="belt-rule h-3 w-40 sm:w-64" />
          <div className="h-3 w-3 bg-ink-950 border-y border-gold-400/40" />
          <div className="h-3 flex-1 bg-ink-800" />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8">
          {allStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
