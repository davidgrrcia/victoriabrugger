import { CountdownTimer } from "./countdown-timer";

export function HeroSection({ endDate }: { endDate: Date }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-gray-50" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-[-0.03em] leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 text-gray-900">
          The Mythic Brand
          <br />
          <span className="text-amber-600 font-light italic">Masterclass</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-[1.6] tracking-[-0.01em] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 font-light">
          Transform collapse into currency. Turn your darkness into a weapon.
          <br />
          This is not about becoming visible&mdash;it&rsquo;s about becoming
          inevitable.
        </p>

        <CountdownTimer endDate={endDate} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
