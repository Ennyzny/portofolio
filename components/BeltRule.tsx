export default function BeltRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-[3px] w-10 bg-gold-400" />
      <span className="belt-rule flex-1 opacity-70" />
      <span className="h-[3px] w-10 bg-gold-400" />
    </div>
  );
}
