import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  GitBranch,
  MessageCircle,
  Globe,
  Code2,
  Users,
  Lightbulb,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-200">
          About DevShowcase
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
          We built DevShowcase to solve a simple problem: developers build
          amazing things every day, but often struggle to get their work in
          front of the right audience.
        </p>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm dark:bg-slate-900">
          <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
            <Code2 size={32} />
          </div>
          <h3 className="mb-3 text-xl font-bold">Showcase Work</h3>
          <p className="text-slate-500">
            Share your side projects, open source contributions, and
            professional work in a beautiful format.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm dark:bg-slate-900">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-200 text-purple-800">
            <Users size={32} />
          </div>
          <h3 className="mb-3 text-xl font-bold">Connect</h3>
          <p className="text-slate-500">
            Find like-minded developers, discover potential collaborators, and
            build your professional network.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm dark:bg-slate-900">
          <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
            <Lightbulb size={32} />
          </div>
          <h3 className="mb-3 text-xl font-bold">Get Inspired</h3>
          <p className="text-slate-500">
            Explore trending projects, learn about new tech stacks, and find
            inspiration for your next big idea.
          </p>
        </div>
      </div>

      <div className="mb-16 rounded-3xl bg-slate-900 p-8 text-center text-white md:p-12">
        <h2 className="mb-6 text-3xl font-bold">Open Source at Heart</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
          DevShowcase is built by developers, for developers. We believe in the
          power of open source and community-driven development.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }), "gap-2")}
          >
            <GitBranch size={18} /> Contribute on GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-16 text-center">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-slate-200">
          Follow Our Journey
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:text-white"
          >
            <MessageCircle size={24} />
            <span className="sr-only">Social</span>
          </a>
          <a
            href="#"
            className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:text-white"
          >
            <GitBranch size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:text-white"
          >
            <Globe size={24} />
            <span className="sr-only">Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}
