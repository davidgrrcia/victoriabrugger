import { CountdownTimer } from "@/components/shared/countdown-timer";

export function HeroSection({ endDate }: { endDate: Date }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-b from-amber-50/30 via-neutral-50 to-white">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16 animate-in fade-in duration-2000">
        {/* Opening line - Victoria's signature voice */}
        <div className="text-center space-y-4">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono">
            Pre-Sale Opens October 2025
          </p>
          <p className="text-2xl md:text-3xl text-neutral-700 font-serif italic font-light leading-[1.8]">
            I don&rsquo;t know who you are.
            <br />
            But I hope we meet in the next pages.
          </p>
        </div>

        {/* Main value proposition - clear but poetic */}
        <div className="space-y-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[-0.02em] leading-[1.05] text-neutral-900">
            The Mythic Brand
            <br />
            <span className="text-amber-700 italic font-extralight">
              Masterclass
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-[1.7] font-light">
            Transform your personal collapse into a profitable brand.
            <br />
            <span className="text-neutral-800 font-normal">
              Turn darkness into $10K+ months.
            </span>
          </p>

          {/* Clear benefits - front and center */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span>6 Cinematic Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span>Notion Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span>Private Community</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>

        {/* Countdown - creates urgency */}
        <div className="space-y-4">
          <p className="text-center text-neutral-600 text-sm font-light">
            Pre-sale pricing ends in:
          </p>
          <CountdownTimer endDate={endDate} />
        </div>

        {/* Scroll hint */}
        <div className="text-center pt-8">
          <p className="text-neutral-400 text-xs uppercase tracking-widest font-mono">
            Scroll to continue
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border border-neutral-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-neutral-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
