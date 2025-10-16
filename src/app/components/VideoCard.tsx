"use client";

import { Video } from "../types/Video";

interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
      <p className="text-gray-600 mt-1 line-clamp-2">{video.description}</p>

      {video.thumbnail && (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full rounded-md mt-3"
        />
      )}

      <div className="text-sm text-gray-500 mt-3 flex justify-between">
        <span>👍 {video.likes ?? 0}</span>
        <span>👁️ {video.views ?? 0}</span>
        <span>⏱️ {video.duration ?? "?"}</span>
      </div>

      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-blue-500 hover:underline text-sm"
      >
        Watch on YouTube →
      </a>
    </div>
  );
}
