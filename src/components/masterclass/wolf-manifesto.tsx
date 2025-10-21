export function WolfManifesto() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <p className="text-xs text-red-500 font-mono tracking-[0.4em] uppercase mb-4">
              The She-Wolf Manifesto
            </p>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            WHO THIS IS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-500">
              REALLY FOR
            </span>
          </h2>
        </div>

        {/* Manifesto content */}
        <div className="space-y-8">
          <div className="p-8 border-l-4 border-red-600 bg-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              This is for the woman who moved to another country alone.
              <br />
              Who learned she didn't need anyone's permission.
              <br />
              <span className="text-white font-medium">
                Who realized she could build her own empire.
              </span>
            </p>
          </div>

          <div className="p-8 border-l-4 border-blue-500 bg-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              This is for the woman who refused to choose between intelligence
              and sensuality.
              <br />
              Who knows she can be seductive without selling her body.
              <br />
              <span className="text-white font-medium">
                Who refuses to follow stereotypes written by fear.
              </span>
            </p>
          </div>

          <div className="p-8 border-l-4 border-purple-500 bg-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              This is for the woman who has a wolf inside.
              <br />
              Society tried to domesticate her, tame her, make her small.
              <br />
              <span className="text-white font-medium">
                But she remembers. And she's ready to run wild again.
              </span>
            </p>
          </div>

          <div className="p-8 border-l-4 border-red-600 bg-gray-900/50 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              This is for the woman who craves financial freedom.
              <br />
              Who wants to build something that's truly hers.
              <br />
              <span className="text-white font-medium">
                Who's done compromising her power for comfort.
              </span>
            </p>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl">
            <div className="relative p-12">
              {/* Decorative quotes */}
              <div className="absolute top-0 left-0 text-6xl text-red-600/20 font-serif">
                "
              </div>
              <div className="absolute bottom-0 right-0 text-6xl text-red-600/20 font-serif">
                "
              </div>

              <p className="text-2xl text-white font-light italic leading-relaxed mb-6">
                When women reassume their wild nature, they become the ones who
                create the culture.
              </p>
              <p className="text-gray-500 text-sm font-mono tracking-wide">
                — Inspired by "Women Who Run With the Wolves"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 border-2 border-red-600/30 bg-black/50 backdrop-blur-sm">
            <p className="text-xl text-red-400 font-medium mb-2">
              If this resonates...
            </p>
            <p className="text-gray-400">
              You're already part of the pack. You just need to claim it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
