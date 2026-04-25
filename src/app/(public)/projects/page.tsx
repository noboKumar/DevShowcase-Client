import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import ProjectGrid from "./ProjectGrid";

const categories = ["Full Stack", "Frontend", "Backend"];
const page = () => {
  return (
    <main className="my-5 min-h-screen rounded-2xl bg-slate-50 px-10 py-5 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
      {/* header section */}
      <section>
        {/* header */}
        <div className="mb-10 max-w-xl">
          <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-200">
            Explore Projects
          </h1>
          <p className="text-base leading-relaxed text-slate-500">
            Browse high-end architectural patterns and modern full-stack
            deployments from our community of world-class engineers.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {/* Search */}
          <div className="relative min-w-56 flex-1">
            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search title, tech, or description…"
              className="h-11 border-slate-200 bg-white pl-10 shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Category filter */}
          <Select>
            <SelectTrigger className="h-11 w-40 border-slate-200 bg-white shadow-sm focus:ring-indigo-500">
              <SlidersHorizontal className="mr-2 h-4 w-4 text-slate-400" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category, index) => (
                <SelectItem key={index} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Tech stack filter */}
          <Select>
            <SelectTrigger className="h-11 w-44 border-slate-200 bg-white shadow-sm focus:ring-indigo-500">
              <SelectValue placeholder="Tech Stack" />
            </SelectTrigger>
            <SelectContent>
              {/* {techOptions.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))} */}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* card section */}
      <section>
        <ProjectGrid />
      </section>
    </main>
  );
};

export default page;
