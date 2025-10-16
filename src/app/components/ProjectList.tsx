"use client";

import { useEffect, useState } from "react";
import { Project } from "../types/Project";
import { getProjects } from "../lib/api_project";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;
  if (!projects.length)
    return <p className="text-center mt-10">No projects found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
