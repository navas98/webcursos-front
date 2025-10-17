export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-28 px-6 text-center md:text-left"
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        style={{
          color: "#00f0ff",
          textShadow: "0 0 12px #00f0ff, 0 0 25px #00f0ff",
          fontFamily: "'Press Start 2P', monospace",
        }}
      >
        Sobre ArcadiaX
      </h2>

      <div
        className="text-gray-300 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <p>
          <strong>ArcadiaX</strong> es un proyecto que une tecnología y nostalgia. 
          Nació con el propósito de dar nueva vida a una casa de los años{" "}
          <strong>80-90</strong>, manteniendo su esencia mientras se transforma en un
          hogar inteligente.
        </p>
        <p>
          No quiero depender de ecosistemas comerciales como Alexa o Google Home. 
          En su lugar, estoy construyendo mi propio sistema de control: luces, cámaras,
          sensores, música y multimedia, todo gestionado desde una red doméstica y 
          APIs personalizadas.
        </p>
        <p>
          El objetivo es crear una casa viva, conectada y consciente de su entorno, 
          pero que conserve el alma vintage que la define.
        </p>
        <p className="text-[#ffbdf5]">
          ArcadiaX es una fusión entre el pasado y el futuro:{" "}
          <span className="text-[#ff00c8] font-bold">
            una cápsula del tiempo con inteligencia propia.
          </span>
        </p>
      </div>
    </section>
  );
}
