"use client";

import { Commit } from "../types/Commit";

export default function CommitCard({ commit }: { commit: Commit }) {
  return (
    <div className="border-t border-gray-200 pt-2 mt-2 text-sm text-gray-700">
      <p>
        <strong>Hash:</strong> {commit.commit_id}
      </p>
      <p>
        <strong>User:</strong> {commit.user}
      </p>
      <p>
        <strong>Message:</strong> {commit.message}
      </p>
      <p className="text-gray-500">
        {new Date(commit.date).toLocaleDateString()}
      </p>
    </div>
  );
}
