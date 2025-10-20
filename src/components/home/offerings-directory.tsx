import Link from "next/link";

interface Offering {
  level: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  stage: string;
  href: string;
  available: boolean;
}

const offerings: Offering[] = [
  {
    level: "I",
    title: "The 10-Day Liberation System",
    subtitle: "Despertar",
    price: "$333",
    description:
      "Break free from invisible patterns. 10 days of intensive transformation to find your voice and start creating from truth.",
    stage: "Awakening",
    href: "/liberation",
    available: true,
  },
  {
    level: "II",
    title: "The Mythic Brand Masterclass",
    subtitle: "Convertirse",
    price: "$999",
    description:
      "The complete system. Turn your philosophical voice into $10K+ months. Six cinematic modules that rebuild your identity as a brand.",
    stage: "Becoming",
    href: "/masterclass",
    available: true,
  },
  {
    level: "III",
    title: "Myth Society",
    subtitle: "Comunidad",
    price: "$33/month",
    description:
      "A private circle of initiated creators. Monthly transmissions, community support, and direct access to Victoria's process.",
    stage: "Belonging",
    href: "/myth-society",
    available: false,
  },
  {
    level: "IV",
    title: "Private Mentorship",
    subtitle: "Maestría",
    price: "$5,000",
    description:
      "Four private sessions where Victoria dissects your brand and rebuilds it with you. Total clarity. Complete transformation.",
    stage: "Mastery",
    href: "/mentorship",
    available: false,
  },
  {
    level: "V",
    title: "Freedom Empire Accelerator",
    subtitle: "Imperio",
    price: "$10,000",
    description:
      "By invitation only. For those ready to scale beyond $100K. Build a system that generates inevitable income.",
    stage: "Empire",
    href: "/empire",
    available: false,
  },
];

function OfferingCard({ offering }: { offering: Offering }) {
  const baseClassName = `group relative block p-10 bg-white border-2 rounded-sm transition-all duration-300`;
  const availableClassName = `${baseClassName} border-neutral-200 hover:border-amber-700 hover:shadow-xl`;
  const unavailableClassName = `${baseClassName} border-neutral-100 opacity-60 cursor-not-allowed`;

  const content = (
    <>
      {!offering.available && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-neutral-100 text-neutral-500 text-xs uppercase tracking-wider font-mono rounded-sm">
          Coming Soon
        </div>
      )}

      <div className="space-y-6">
        {/* Level indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-neutral-300 rounded-full flex items-center justify-center">
              <span className="font-serif text-xl text-neutral-700">
                {offering.level}
              </span>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                {offering.stage}
              </p>
              <p className="text-xs text-amber-700 italic font-serif">
                {offering.subtitle}
              </p>
            </div>
          </div>
          <p className="text-2xl font-serif font-light text-neutral-900">
            {offering.price}
          </p>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl md:text-3xl font-serif font-light text-neutral-900 tracking-[-0.01em] leading-[1.3] ${
            offering.available
              ? "group-hover:text-amber-800 transition-colors"
              : ""
          }`}
        >
          {offering.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 leading-[1.8] font-light">
          {offering.description}
        </p>

        {/* CTA */}
        {offering.available && (
          <div className="pt-4">
            <span className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm group-hover:gap-4 transition-all">
              Enter this path
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Decorative line */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 ${
          offering.available ? "bg-amber-700" : "bg-neutral-200"
        } w-0 ${offering.available ? "group-hover:w-full" : ""} transition-all duration-500`}
      />
    </>
  );

  if (offering.available) {
    return (
      <Link href={offering.href} className={availableClassName}>
        {content}
      </Link>
    );
  }

  return <div className={unavailableClassName}>{content}</div>;
}

export function OfferingsDirectory() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section intro */}
        <div className="mb-20 text-center space-y-6">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono">
            The Initiatory Path
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-[-0.01em] leading-[1.3]">
            Five Levels of{" "}
            <span className="text-amber-700 italic font-extralight">
              Transformation
            </span>
          </h2>
          <p className="text-neutral-600 text-lg font-light max-w-2xl mx-auto leading-[1.8]">
            This is not a product suite. It&rsquo;s an ascension. Each level
            builds on the last. Start where you are. Rise as you&rsquo;re ready.
          </p>
        </div>

        {/* Offerings grid */}
        <div className="space-y-8">
          {offerings.map((offering) => (
            <OfferingCard key={offering.level} offering={offering} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 text-sm italic font-serif max-w-xl mx-auto leading-[1.8]">
            Each level is designed to feel like a rite of passage, not a
            transaction. You&rsquo;re not buying information—you&rsquo;re
            entering a culture.
          </p>
        </div>
      </div>
    </section>
  );
}
