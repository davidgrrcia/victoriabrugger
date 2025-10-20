import { TestimonialCard } from "./testimonial-card";

export function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-semibold text-center mb-16 text-gray-900 tracking-[-0.02em]">
          Fragments of{" "}
          <span className="text-amber-600 italic font-light">Evidence</span>
        </h2>

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
