export function OfferingItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group border-l-2 border-amber-600/30 pl-6 hover:border-amber-600 transition-colors duration-300">
      <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-3 group-hover:text-amber-600 transition-colors tracking-[-0.01em]">
        {title}
      </h3>
      <p className="leading-[1.7] text-gray-600 text-lg">{description}</p>
    </div>
  );
}
