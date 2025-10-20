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
    <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-600/30 transition-colors duration-300">
      <p className="text-gray-700 leading-[1.7] mb-6 italic text-lg font-serif font-light">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full" />
        <div>
          <p className="text-gray-900 font-medium">{author}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
