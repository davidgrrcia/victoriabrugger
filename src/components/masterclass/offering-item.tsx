export function OfferingItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group border-l-2 border-neutral-200 pl-8 hover:border-amber-700 transition-colors duration-300">
      <h3 className="text-2xl md:text-2xl font-serif font-normal text-neutral-900 mb-3 group-hover:text-amber-800 transition-colors tracking-[-0.01em]">
        {title}
      </h3>
      <p className="leading-[1.8] text-neutral-600 text-base font-light">
        {description}
      </p>
    </div>
  );
}
