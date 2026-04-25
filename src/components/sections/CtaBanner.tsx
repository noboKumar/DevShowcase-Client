import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CtaBanner = () => {
  return (
    <section className="bg-primary relative my-20 overflow-hidden rounded-2xl py-24 dark:bg-slate-900">
      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl dark:text-slate-100">
          Ready to share your creation?
        </h2>

        <p className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg dark:text-slate-400">
          Join our community today. Add your project, get noticed by peers and
          potential employers, and level up your career.
        </p>

        <Button
          asChild
          className="rounded-full bg-amber-700 p-5 md:p-8 text-lg text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500"
        >
          <Link href="/projects/add">Add Your Project Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;
