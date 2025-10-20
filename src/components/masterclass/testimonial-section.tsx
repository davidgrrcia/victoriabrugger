import { TestimonialCard } from "./testimonial-card";

export function TestimonialSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 space-y-6 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-mono">
            Proof of Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-[-0.01em] leading-[1.2]">
            Real Results from{" "}
            <span className="text-amber-700 italic font-extralight">
              Real People
            </span>
          </h2>
          <p className="text-neutral-600 text-lg font-light max-w-2xl mx-auto leading-[1.8]">
            These aren&rsquo;t testimonials—they&rsquo;re evidence of what
            happens when you stop hiding your truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Victoria doesn't teach content creation. She teaches you how to become the kind of person others can't stop watching."
            author="Sarah M."
            role="Brand Strategist"
          />
          <TestimonialCard
            quote="I went from 200 followers to 10K in 3 months. But more importantly, I finally understood my own voice."
            author="Marcus T."
            role="Creative Director"
          />
          <TestimonialCard
            quote="This isn't a course. It's a transmission. Everything changed after I understood the mythic framework."
            author="Luna R."
            role="Writer & Coach"
          />
          <TestimonialCard
            quote="The pricing strategies alone 5x'd my income. But the real shift was learning to think like a myth, not a marketer."
            author="David K."
            role="Photographer"
          />
        </div>
      </div>
    </section>
  );
}
