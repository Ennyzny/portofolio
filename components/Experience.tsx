import SectionHeading from "./SectionHeading";
import { experience, competitions } from "@/lib/data";
import { Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="02" title="Experience" note="On the job" />

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.org}
              className="grid gap-4 border border-line bg-ink-900 p-6 sm:grid-cols-[10rem_1fr] sm:p-8"
            >
              <div>
                <p className="font-mono text-xs text-gold-400">{job.period}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-paper">
                  {job.role}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {job.org}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{job.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line px-2.5 py-1 font-mono text-[11px] text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <Trophy size={14} className="text-gold-400" />
            Competitions
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {competitions.map((c) => (
              <li key={c.name} className="border border-line p-5">
                <p className="font-mono text-[11px] text-gold-400">{c.period}</p>
                <p className="mt-2 text-sm leading-snug text-paper/90">{c.name}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">{c.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
