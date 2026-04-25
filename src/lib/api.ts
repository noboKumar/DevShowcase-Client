import { axiosInstance } from "./axios";

export const getProjects = async () => {
  const res = await axiosInstance.get("/projects/get-projects");
  return res.data.data;
};
