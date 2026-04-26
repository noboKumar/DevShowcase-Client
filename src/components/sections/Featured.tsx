import { getFeatured } from "@/lib/api";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../shared/projectsPage/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";

const Featured = async () => {
  const featuredData = await getFeatured();
  console.log(featuredData);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="py-10">
          <h1 className="text-4xl font-bold">Featured Projects</h1>
          <p className="text-gray-600">
            Curated by our expert architecture board for exceptional quality.
          </p>
        </div>
        <div>
          <Link href={"/projects"}>
            <Button className="text-primary" variant={"ghost"}>
              View All <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {featuredData.map((projects: Project) => (
          <ProjectCard key={projects.id} projects={projects} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
