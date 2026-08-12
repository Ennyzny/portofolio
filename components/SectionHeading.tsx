export default function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-4">
      <div className="flex items-baseline gap-4">
        <span className="section-num">{index}</span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {title}
        </h2>
      </div>
      {note && <span className="hidden font-mono text-xs text-muted sm:block">{note}</span>}
    </div>
  );
}
