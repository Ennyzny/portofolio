import SectionHeading from "./SectionHeading";
import { profile, languages, additional } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="profile" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading index="01" title="Profile" note="Who's building" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
         <p className="text-lg leading-relaxed text-paper/90 sm:text-xl">
            Third-year Software Engineering student with a Computer Science and Informatics
            Technician background. Familiar with{" "}
            <span className="text-gold-300">C#, C++,</span> and{" "}
            <span className="text-gold-300">React / Next.js</span>, with a growing focus
            on frontend development and practical experience building responsive,
            component-based web interfaces.
          </p>

          <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
            <MapPin size={14} className="text-gold-400" />
            {profile.location}
          </div>
        </div>

        <div className="border border-line bg-ink-900 p-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="eyebrow">Dossier</span>
            <span className="font-mono text-[10px] text-muted">No. 002026</span>
          </div>

          <dl className="mt-5 space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {lang.name}
                </dt>
                <dd className="font-mono text-xs text-gold-300">{lang.level}</dd>
              </div>
            ))}
            {additional.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {item.label}
                </dt>
                <dd className="font-mono text-xs text-gold-300">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] leading-relaxed text-muted">
            Proof of license and rank available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
