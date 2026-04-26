import { axiosInstance } from "./axios";

export const getProjects = async () => {
  const res = await axiosInstance.get("/projects/get-projects");
  return res.data.data;
};

export const getProjectDetails = async (id: string) => {
  const res = await axiosInstance.get(`/projects/get-projects/${id}`);
  return res.data.data;
};
