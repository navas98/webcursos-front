import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-400 border-t border-[#300060]">
      <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem" }}>
        © {new Date().getFullYear()} ArcadiaX — Creado por Javier Navas
      </p>

      <div className="mt-4 space-x-4">
        <Link
          href="/dashboard"
          className="text-[#00f0ff] hover:text-[#ff00c8] transition"
        >
          Dashboard
        </Link>
        <span className="text-gray-600">•</span>
        <Link href="#about" className="text-[#00f0ff] hover:text-[#ff00c8] transition">
          Sobre el Proyecto
        </Link>
      </div>
    </footer>
  );
}
