import axios from "axios";
import { Commit } from "../types/Commit";

const API_URL = "http://localhost:4000/api";

export async function getCommitsByVideoId(videoId: string): Promise<Commit[]> {
  const res = await axios.get(`${API_URL}/commit/video/${videoId}`);
  return res.data;
}
