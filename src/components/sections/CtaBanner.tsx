import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CtaBanner = () => {
  return (
    <section className="bg-primary relative my-20 overflow-hidden rounded-2xl py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Ready to share your creation?
        </h2>
        <p className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg">
          Join our community today. Add your project, get noticed by peers and
          potential employers, and level up your career.
        </p>
        <Link href="/items/add">
          <Button className="rounded-full bg-amber-700 p-8 text-lg hover:bg-amber-600">
            Add Your Project Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
