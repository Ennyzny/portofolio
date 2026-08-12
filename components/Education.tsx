import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading index="05" title="Education" note="Formal training" />

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line sm:left-[7px]" />
        <ul className="space-y-10">
          {education.map((item) => (
            <li key={item.place} className="relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-gold-400 bg-ink-950 sm:h-[15px] sm:w-[15px]" />
              <p className="font-mono text-xs text-gold-400">{item.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-paper">
                {item.place}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.degree}</p>
              <p className="mt-1 font-mono text-[11px] text-muted/80">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
