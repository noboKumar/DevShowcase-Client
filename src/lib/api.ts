import { axiosInstance } from "./axios";
import { cookies } from "next/headers";

export const getProjects = async () => {
  const res = await axiosInstance.get("/projects/get-projects");
  return res.data.data;
};

export const getProjectDetails = async (id: string) => {
  const res = await axiosInstance.get(`/projects/get-projects/${id}`);
  return res.data.data;
};

export const getMyProjects = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await axiosInstance.get("/projects/my-projects", {
    headers: {
      Cookie: cookieHeader,
    },
  });
  return res.data.data;
};
