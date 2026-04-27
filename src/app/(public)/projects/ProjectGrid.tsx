"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/projectsPage/ProjectCard";
import { Project } from "@/types";

interface Props {
  projectsData: Project[];
}

const ProjectGrid = ({ projectsData }: Props) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tech, setTech] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Derive unique categories and tech from data
  const categories = useMemo(
    () => [...new Set(projectsData.map((p) => p.category))],
    [projectsData],
  );
  const techOptions = useMemo(() => {
    const all = new Set<string>();
    projectsData.forEach((p) => p.techStack?.forEach((t) => all.add(t)));
    return [...all];
  }, [projectsData]);

  // Filter
  const filtered = useMemo(
    () =>
      projectsData.filter((p) => {
        const matchesSearch =
          !search ||
          p.title?.toLowerCase().includes(search.toLowerCase()) ||
          p.description?.toLowerCase().includes(search.toLowerCase()) ||
          p.techStack?.some((t) =>
            t.toLowerCase().includes(search.toLowerCase()),
          );
        const matchesCategory = !category || p.category === category;
        const matchesTech = !tech || p.techStack?.includes(tech);
        return matchesSearch && matchesCategory && matchesTech;
      }),
    [projectsData, search, category, tech],
  );

  const hasActiveFilters = search || category || tech;
  const clearFilters = () => {
    setSearch("");
    setCategory(null);
    setTech(null);
  };

  return (
    <div>
      {/* Search + filter toggle */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative min-w-56 flex-1">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search title, tech, or description…"
            className="h-11 border-slate-200 bg-white pl-10 shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
          />
        </div>
        <Button
          variant="outline"
          className="h-11 border-slate-200 bg-white px-5"
          onClick={() => setShowFilters((v) => !v)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4 text-slate-400" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 h-2 w-2 rounded-full bg-indigo-500" />
          )}
        </Button>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Filters</h3>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-7 text-xs text-slate-500"
              >
                <X className="mr-1 h-3 w-3" /> Clear all
              </Button>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Category */}
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  onClick={() => setCategory(null)}
                  className="cursor-pointer"
                  variant={!category ? "default" : "outline"}
                >
                  All
                </Badge>
                {categories.map((c) => (
                  <Badge
                    key={c}
                    onClick={() => setCategory(c === category ? null : c)}
                    className="cursor-pointer"
                    variant={category === c ? "default" : "outline"}
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  onClick={() => setTech(null)}
                  className="cursor-pointer"
                  variant={!tech ? "default" : "outline"}
                >
                  All
                </Badge>
                {techOptions.map((t) => (
                  <Badge
                    key={t}
                    onClick={() => setTech(t === tech ? null : t)}
                    className="cursor-pointer"
                    variant={tech === t ? "default" : "outline"}
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} projects={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-20 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <p className="font-semibold text-slate-700">No projects found</p>
          <p className="text-sm text-slate-400">
            Try adjusting your search or filters.
          </p>
          <Button variant="outline" onClick={clearFilters} className="mt-1">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
