"use client";

export function FinalCall() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-16">
        {/* Final message */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            THE PACK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-500">
              IS WAITING
            </span>
          </h2>

          <div className="h-px w-64 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />

          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            You've read this far because something in you knows.
            <br />
            <span className="text-white">It's time to stop hiding.</span>
          </p>
        </div>

        {/* Two choices */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 border-2 border-gray-800 bg-gray-900/30 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="text-4xl">😴</div>
              <h3 className="text-xl text-gray-400 font-medium">
                Stay Domesticated
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Keep playing it safe. Keep making yourself smaller. Keep
                wondering "what if?"
              </p>
            </div>
          </div>

          <div className="p-8 border-2 border-red-600 bg-gradient-to-br from-red-900/20 to-black backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative space-y-4">
              <div className="text-4xl">🐺</div>
              <h3 className="text-xl text-white font-medium">
                Run With Wolves
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Reclaim your wild nature. Build your empire. Become who you were
                always meant to be.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pt-8">
          <button
            type="button"
            onClick={() => {
              const tiersSection = document.getElementById("pack-tiers");
              tiersSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-16 py-8 bg-red-600 text-white text-xl font-bold tracking-wide uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/50"
          >
            <span className="relative z-10">CHOOSE YOUR PACK</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>

          <p className="mt-6 text-gray-500 text-sm font-mono">
            Only 7 spots remaining at this price
          </p>
        </div>

        {/* Final quote */}
        <div className="pt-16">
          <div className="inline-block max-w-2xl">
            <p className="text-lg text-gray-400 italic font-light leading-relaxed">
              "Better to die as a wolf than live as a dog."
            </p>
            <p className="text-gray-600 text-xs font-mono mt-4 tracking-wide">
              — Old proverb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
