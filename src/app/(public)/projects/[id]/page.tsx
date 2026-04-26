import Image from "next/image";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FaGithub } from "react-icons/fa";
import { getProjectDetails } from "@/lib/api";
import BackBtn from "@/components/ui/BackBtn";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300",
  Backend:
    "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
  "Full Stack":
    "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300",
  "Mobile App":
    "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
  "AI / ML": "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
  "DevOps / Infrastructure":
    "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  "CLI Tool":
    "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  "Browser Extension":
    "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
  "API / SDK":
    "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
  Game: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
  "Open Source Library":
    "bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300",
  Other: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
};

const PageSkeleton = () => (
  <div className="mx-auto max-w-6xl px-6 py-10">
    <Skeleton className="mb-8 h-4 w-32 rounded-lg" />
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <Skeleton className="h-80 w-full rounded-2xl dark:bg-slate-800" />
        <Skeleton className="h-6 w-1/2 rounded-lg dark:bg-slate-800" />
        <Skeleton className="h-4 w-full rounded-lg dark:bg-slate-800" />
        <Skeleton className="h-4 w-3/4 rounded-lg dark:bg-slate-800" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-2xl dark:bg-slate-800" />
      </div>
    </div>
  </div>
);

const ProjectDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const project = await getProjectDetails(id);

  if (!project) {
    return <PageSkeleton />;
  }

  const {
    title,
    description,
    category,
    githubRepo,
    liveLink,
    thumbnail,
    techStack,
  } = project;

  const categoryClass = CATEGORY_COLORS[category] ?? CATEGORY_COLORS["Other"];

  return (
    <main className="my-10 min-h-screen rounded-2xl bg-slate-50 dark:bg-slate-900">
      <div className="px-6 py-10">
        {/* Back btn */}
        <BackBtn />

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-black text-indigo-200 dark:text-indigo-400">
                    {title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h2 className="mb-3 text-lg font-bold text-slate-800 dark:text-slate-200">
                Overview
              </h2>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Badge
                className={`mb-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase ${categoryClass}`}
              >
                {category}
              </Badge>

              <h1 className="mb-4 text-2xl leading-tight font-black text-slate-900 dark:text-white">
                {title}
              </h1>

              {techStack?.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {techStack.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {liveLink && (
                  <Button
                    asChild
                    className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700"
                    size="lg"
                  >
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {githubRepo && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 border-slate-200 text-slate-800 dark:border-slate-600 dark:text-slate-200"
                    size="lg"
                  >
                    <a
                      href={githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-4 w-4" />
                      View GitHub
                    </a>
                  </Button>
                )}
              </div>

              <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-100 bg-slate-50 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Category</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {category}
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Tech Count</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {techStack?.length ?? 0} technologies
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Live Demo</span>
                  <span
                    className={`text-xs font-semibold ${
                      liveLink
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-400"
                    }`}
                  >
                    {liveLink ? "Available" : "N/A"}
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Repository</span>
                  <span
                    className={`text-xs font-semibold ${
                      githubRepo
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-400"
                    }`}
                  >
                    {githubRepo ? "Public" : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
