export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16 animate-in fade-in duration-2000">
        {/* Opening - Victoria's voice */}
        <div className="text-center space-y-6">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono">
            Victoria Brugger
          </p>
          <p className="text-2xl md:text-3xl text-neutral-700 font-serif italic font-light leading-[1.8] px-4">
            I don&rsquo;t know who you are.
            <br />
            But I hope we meet in the next pages.
          </p>
        </div>

        {/* Main identity */}
        <div className="space-y-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[-0.02em] leading-[1.1] text-neutral-900">
            The Mythic Brand
            <br />
            <span className="text-amber-700 italic font-extralight">
              System
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-[1.7] font-light">
            Transform your identity into inevitable income.
            <br />
            <span className="text-neutral-800">
              Five levels. One initiatory path.
            </span>
          </p>
        </div>

        {/* Scroll to explore */}
        <div className="text-center pt-12">
          <p className="text-neutral-400 text-xs uppercase tracking-widest font-mono mb-4">
            Choose Your Path
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-neutral-300 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
