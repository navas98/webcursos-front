import ProjectList from "./components/ProjectList";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Project Dashboard
      </h1>
      <ProjectList />
    </main>
  );
}
