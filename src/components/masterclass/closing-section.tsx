export function ClosingSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-serif font-light leading-[1.2] text-neutral-900 tracking-[-0.02em]">
          This is not about visibility.
          <br />
          <span className="text-amber-700 italic font-extralight">
            It&rsquo;s about inevitability.
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-neutral-600 leading-[1.7] max-w-2xl mx-auto font-light">
          I don&rsquo;t know who you are. But I hope we meet in the next
          dimension.
        </p>

        <div className="pt-8">
          <p className="text-sm text-neutral-500 font-mono">
            — Victoria Brugger
          </p>
        </div>
      </div>
    </section>
  );
}
