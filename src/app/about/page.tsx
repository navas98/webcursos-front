export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a001a] to-black text-gray-200 flex flex-col items-center py-20 px-6 text-center">
      {/* Título */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-8"
        style={{
          color: "#00f0ff",
          textShadow: "0 0 12px #00f0ff, 0 0 25px #00f0ff",
          fontFamily: "'Press Start 2P', monospace",
        }}
      >
        Sobre ArcadiaX
      </h1>

      {/* Texto principal */}
      <section
        className="max-w-4xl text-lg leading-relaxed space-y-6"
        style={{
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        <p>
          <strong>ArcadiaX</strong> es un proyecto personal que combina tecnología,
          creatividad y nostalgia. Nació con la idea de renovar una casa familiar
          situada en un pequeño pueblo de <strong>Ávila</strong>, conservando su
          encanto de los años 80 y 90, pero dotándola de una inteligencia moderna.
        </p>

        <p>
          En lugar de recurrir a sistemas comerciales como Alexa o Google Home,
          decidí construir mi propio ecosistema domótico, totalmente personalizado
          y autosuficiente. Cada módulo —desde el control de luces hasta la
          reproducción multimedia— está diseñado y programado por mí.
        </p>

        <p>
          Mi objetivo no es solo modernizar la casa, sino crear una experiencia
          tecnológica que mantenga viva la estética retro que la define.
          <br />
          Una casa que brilla con luces de neón, que responde a comandos de voz
          y que, al mismo tiempo, conserva el alma de otra época.
        </p>

        <p>
          ArcadiaX es, en esencia, una fusión entre el pasado y el futuro:
          <br />
          <span className="text-[#ff00c8] font-bold">
            una cápsula del tiempo con inteligencia propia.
          </span>
        </p>
      </section>

      {/* Línea divisoria */}
      <div className="w-24 h-[2px] bg-[#00f0ff] my-16 shadow-[0_0_10px_#00f0ff]"></div>

      {/* Sección de contenido visual o futuro */}
      <section
        className="max-w-4xl space-y-4 text-gray-400"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <h2
          className="text-2xl font-semibold mb-3"
          style={{
            color: "#ff00c8",
            textShadow: "0 0 8px #ff00c8",
          }}
        >
          En esta sección pronto verás...
        </h2>
        <ul className="space-y-2">
          <li>🎥 Vídeos del proceso de renovación y automatización</li>
          <li>🧠 Esquemas del sistema domótico y de IA</li>
          <li>🏗️ Modelos 3D de la casa y planos digitales</li>
          <li>💾 Progreso de commits y avances técnicos en tiempo real</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        <p style={{ fontFamily: "'Press Start 2P', monospace" }}>
          © {new Date().getFullYear()} ArcadiaX — Creado por Javier Navas
        </p>
      </footer>
    </main>
  );
}
