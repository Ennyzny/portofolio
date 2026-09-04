import SectionHeading from "./SectionHeading";
import { projects, projectCategories } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const Wrapper = project.link ? "a" : "article";
  return (
    <Wrapper
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
        <span className="section-num">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3 className="max-w-[85%] font-display text-lg font-semibold text-paper transition-colors group-hover:text-gold-400">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-gold-400">
        {project.subtitle}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

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
}

export default function Projects() {
  const groups = projectCategories
    .map((category) => ({
      ...category,
      items: projects.filter((project) => project.category === category.key),
    }))
    .filter((group) => group.items.length > 0);

  let runningIndex = 0;

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading index="03" title="Projects" note="Things I've built" />

      <div className="space-y-16">
        {groups.map((group) => {
          const startIndex = runningIndex;
          runningIndex += group.items.length;
          return (
            <div key={group.key}>
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-gold-400">
                  {group.title}
                </h3>
                <span className="hidden font-mono text-[11px] text-muted sm:block">
                  {group.note}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {group.items.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={startIndex + i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        ...and more to come
      </p>
    </section>
  );
}
