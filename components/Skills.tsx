import SectionHeading from "./SectionHeading";
import { skills, softSkills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-ink-900/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading index="04" title="Skills" note="Toolbox" />

        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border border-line bg-ink-900 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-gold-400">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="border border-line px-3 py-1.5 text-sm text-paper/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-line bg-ink-900 p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-gold-400">
            Beyond the stack
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((item) => (
              <span
                key={item}
                className="border border-teal-500/30 bg-teal-500/5 px-3 py-1.5 text-sm text-teal-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
