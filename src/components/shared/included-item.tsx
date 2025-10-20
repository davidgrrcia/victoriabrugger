export function IncludedItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-neutral-700">{text}</span>
    </div>
  );
}
