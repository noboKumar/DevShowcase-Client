import { getProjects } from "@/lib/api";
import ProjectGrid from "./ProjectGrid";

const page = async () => {
  const projectsData = await getProjects();

  return (
    <main className="my-5 min-h-screen rounded-2xl bg-slate-50 px-10 py-5 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
      <div className="mb-10 max-w-xl">
        <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-200">
          Explore Projects
        </h1>
        <p className="text-base leading-relaxed text-slate-500">
          Browse high-end architectural patterns and modern full-stack
          deployments from our community of world-class engineers.
        </p>
      </div>

      {/* Pass fetched data to client component */}
      <ProjectGrid projectsData={projectsData} />
    </main>
  );
};

export default page;