export function Logo({
  variant = "default",
}: {
  variant?: "default" | "minimal";
}) {
  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <span className="text-3xl font-black text-white tracking-tighter uppercase">
            VB
          </span>
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-3">
        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
          Victoria
        </span>
        <div className="w-1 h-10 bg-red-600 rounded-full" />
        <span className="text-4xl md:text-5xl font-black text-red-500 tracking-tighter uppercase">
          Brugger
        </span>
      </div>
      <div className="flex gap-1 mt-2">
        <div className="h-1 w-20 bg-red-600 rounded-full" />
        <div className="h-1 w-8 bg-red-600/60 rounded-full" />
        <div className="h-1 w-4 bg-red-600/30 rounded-full" />
      </div>
    </div>
  );
}
