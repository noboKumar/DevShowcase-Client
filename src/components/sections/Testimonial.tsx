import React from "react";
import { TestimonialCard } from "../ui/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            What Developers Say
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Join thousands of developers who are already showcasing their work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="DevShowcase gave my side project the visibility it needed. I got valuable feedback from experienced devs."
            author="Alex Rivera"
            role="Frontend Engineer"
          />
          <TestimonialCard
            quote="The best place to find inspiration for my next app. The quality of projects here is just outstanding."
            author="Sarah Chen"
            role="UI/UX Designer"
          />
          <TestimonialCard
            quote="I love how easy it is to manage my portfolio here. It's clean, fast, and exactly what I needed."
            author="Michael Johnson"
            role="Fullstack Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
