import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading index="03" title="Projects" note="Things I've built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          const Wrapper = project.link ? "a" : "article";
          return (
            <Wrapper
              key={project.title}
              {...(project.link
                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative flex flex-col border border-line bg-ink-900 p-6 transition-colors hover:border-gold-400/50 sm:p-7"
            >
              <div className="absolute right-6 top-6 flex items-center gap-3">
                {project.link && (
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-teal-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                    Live
                  </span>
                )}
                <span className="section-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="max-w-[85%] font-display text-lg font-semibold text-paper transition-colors group-hover:text-gold-400">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-gold-400">
                {project.subtitle}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-2.5 py-1 font-mono text-[11px] text-teal-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>

      <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        ...and more to come
      </p>
    </section>
  );
}
