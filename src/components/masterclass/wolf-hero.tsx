"use client";

import { useEffect, useState } from "react";

export function WolfHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated geometric background */}
      <div className="absolute inset-0">
        {/* Large sphere - inspired by the video screenshots */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-red-900/30 to-red-600/10 blur-3xl animate-pulse"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})`,
          }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-600/50 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-16 animate-in fade-in duration-2000">
          {/* Opening statement */}
          <div className="space-y-8">
            <div className="inline-block">
              <p className="text-xs text-red-500 font-mono tracking-[0.4em] uppercase mb-4">
                She-Wolf Protocol
              </p>
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              RAISED BY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                WOLVES
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Society domesticated you.
              <br />
              <span className="text-white">
                It's time to remember who you are.
              </span>
            </p>
          </div>

          {/* Core message */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-8 border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                You're not here by accident. You felt something stir inside you—
                <span className="text-red-400 font-medium">
                  {" "}
                  a knowing
                </span>{" "}
                that there's more. A hunger for freedom, power, and authenticity
                that refuses to be silenced.
              </p>
            </div>

            <div className="flex items-center justify-center gap-12 text-sm text-gray-500 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span>Financial Independence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Authentic Power</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span>Pack Mentality</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-xs text-gray-600 uppercase tracking-[0.3em] font-mono">
                Continue
              </p>
              <div className="w-px h-16 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
