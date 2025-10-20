export function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-2xl md:text-3xl font-mono font-bold text-gray-900">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-gray-600 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
