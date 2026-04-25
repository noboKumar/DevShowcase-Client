import { Project } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-sky-100 text-sky-700 border-sky-200",
  Backend: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Full Stack": "bg-violet-100 text-violet-700 border-violet-200",
  "Mobile App": "bg-orange-100 text-orange-700 border-orange-200",
  "AI / ML": "bg-pink-100 text-pink-700 border-pink-200",
  "DevOps / Infrastructure": "bg-amber-100 text-amber-700 border-amber-200",
  "CLI Tool": "bg-slate-100 text-slate-700 border-slate-200",
  "Browser Extension": "bg-teal-100 text-teal-700 border-teal-200",
  "API / SDK": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Game: "bg-red-100 text-red-700 border-red-200",
  "Open Source Library": "bg-lime-100 text-lime-700 border-lime-200",
  Other: "bg-gray-100 text-gray-600 border-gray-200",
};

const ProjectCard = ({ projects }: { projects: Project }) => {
  const {
    id,
    title,
    description,
    category,
    githubRepo,
    liveLink,
    thumbnail,
    techStack,
  } = projects;
  const categoryClass = CATEGORY_COLORS[category] ?? CATEGORY_COLORS["Other"];

  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-700 pt-0">
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="block object-cover transition-transform duration-600 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-50 to-slate-100">
            <span className="text-5xl font-black text-indigo-200">
              {title?.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge className={`border ${categoryClass}`}>{category}</Badge>
        </div>
        <CardDescription className="max-w-3xl">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {techStack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {" "}
              {techStack.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-600 uppercase hover:bg-slate-200"
                >
                  {" "}
                  {tech}{" "}
                </Badge>
              ))}{" "}
              {techStack.length > 4 && (
                <Badge
                  variant="secondary"
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400"
                >
                  {" "}
                  +{techStack.length - 4}{" "}
                </Badge>
              )}{" "}
            </div>
          )}
        </div>

        {/* GitHub + Live icons */}
        <div className="flex items-center gap-3">
          {githubRepo && (
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-slate-700"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-slate-400 transition-colors hover:text-slate-700"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        {/* Full width button */}
        <Button asChild className="w-full" size="lg">
          <Link href={`/projects/${id}`}>
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
