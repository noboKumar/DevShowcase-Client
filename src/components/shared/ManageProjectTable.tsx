import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Project } from "@/types";
import Image from "next/image";
import { getMyProjects } from "@/lib/api";
import { Button } from "../ui/button";
import { Eye, Trash2 } from "lucide-react";
import UpdateBtn from "../ui/UpdateBtn";
import Link from "next/link";

const ManageProjectTable = async () => {
  const projectsData = await getMyProjects();
  console.log(projectsData);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Project Details</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projectsData && projectsData.length > 0 ? (
            projectsData.map((project: Project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="h-15 w-20 rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </span>
                      <span className="line-clamp-1 text-xs text-slate-500">
                        {project.description}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    {project.category}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                    Live
                  </span>
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {/* view btn */}
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="h-4 w-4 text-blue-500" />
                      </Link>
                    </Button>
                    {/* update btn */}
                    <UpdateBtn projects={project} />
                    {/* delete btn */}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="py-10 text-center">
                <div className="flex flex-col items-center gap-1 text-slate-500">
                  <span className="text-sm font-medium">No projects found</span>
                  <span className="text-xs">Try adding a new project</span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Projects</TableCell>
            <TableCell className="text-right">
              {projectsData?.length || 0}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageProjectTable;
