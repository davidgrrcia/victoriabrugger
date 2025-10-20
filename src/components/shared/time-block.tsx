export function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-neutral-200 rounded-sm flex items-center justify-center shadow-sm">
        <span className="text-2xl md:text-3xl font-mono font-light text-neutral-800">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-neutral-500 mt-2 uppercase tracking-widest font-mono">
        {label}
      </span>
    </div>
  );
}
