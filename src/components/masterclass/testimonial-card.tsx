export function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="p-8 bg-white border border-neutral-200 rounded-sm hover:border-amber-700/40 hover:shadow-lg transition-all duration-300">
      <p className="text-neutral-700 leading-[1.8] mb-6 italic text-lg font-serif font-light">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
        <div>
          <p className="text-neutral-900 font-medium">{author}</p>
          <p className="text-neutral-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
