"use client";

import { useEffect, useState } from "react";
import { getCommitsByVideoId } from "../lib/api_commit";
import { Commit } from "../types/Commit";
import CommitCard from "./CommitCard";

export default function CommitList({ videoId }: { videoId: string }) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCommits = async () => {
    if (show) return setShow(false);
    setLoading(true);
    try {
      const data = await getCommitsByVideoId(videoId);
      setCommits(data);
    } catch (error) {
      console.error("Error loading commits:", error);
    }
    setLoading(false);
    setShow(true);
  };

  return (
    <div className="mt-3">
      <button
        onClick={toggleCommits}
        className="text-blue-500 hover:underline text-sm"
      >
        {show ? "Hide commits ▲" : "Show commits ▼"}
      </button>

      {loading && <p className="text-gray-500 mt-2">Loading commits...</p>}

      {show && commits.length === 0 && (
        <p className="text-gray-400 mt-2">No commits found for this video.</p>
      )}

      {show && commits.length > 0 && (
        <div className="mt-2">
          {commits.map((commit) => (
            <CommitCard key={commit._id} commit={commit} />
          ))}
        </div>
      )}
    </div>
  );
}
