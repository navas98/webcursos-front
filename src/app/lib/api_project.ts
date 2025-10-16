import axios from "axios";
import { Project } from "../types/Project";

const API_URL = "http://localhost:4000/api";

export async function getProjects(): Promise<Project[]> {
  const res = await axios.get(`${API_URL}/project`);
  return res.data;
}

export async function getProjectById(id: string): Promise<Project> {
  const res = await axios.get(`${API_URL}/project/${id}`);
  return res.data;
}
