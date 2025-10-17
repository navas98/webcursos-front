import ProjectList from "../components/ProjectList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <section className="w-full max-w-6xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Project Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your projects, videos and commits in one place
          </p>
        </header>

        {/* Project List */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <ProjectList />
        </div>
      </section>
    </main>
  );
}
