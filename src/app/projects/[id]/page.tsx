import { getProjectById} from "../../lib/api_project";
import { getVideosByProjectId } from "../../lib/api_vídeos"
import { Project } from "../../types/Project";
import { Video } from "../../types/Video";
import VideoCard from "../../components/VideoCard";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params; // 👈 importante
  const project: Project = await getProjectById(id);
  const videos: Video[] = await getVideosByProjectId(id);

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      {/* Datos del proyecto */}
      <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
      <p className="text-gray-600 mt-4">{project.description}</p>

      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="rounded-lg mt-6"
        />
      )}

      <p className="text-sm text-gray-500 mt-6">
        Created on: {new Date(project.created_at).toLocaleDateString()}
      </p>

      {/* Lista de vídeos */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Project Videos
        </h2>

        {videos.length === 0 ? (
          <p className="text-gray-500">No videos found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}