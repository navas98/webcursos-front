"use client";

import Link from "next/link";
import { Project } from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
      <p className="text-gray-600 mt-2">{project.description}</p>

      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full rounded-md mt-3"
        />
      )}

      <div className="mt-3">
        <Link
          href={`/projects/${project._id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
