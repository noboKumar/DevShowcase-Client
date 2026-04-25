import ProjectCard from "@/components/shared/projectsPage/ProjectCard";
import { getProjects } from "@/lib/api";
import { Project } from "@/types";

const ProjectGrid = async () => {
  const projectsData = await getProjects();
  return (
    <div className="grid grid-cols-3 gap-5">
      {projectsData.map((project: Project) => (
        <ProjectCard key={project.id} projects={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
