import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-gradient-to-b from-[#060012] via-[#0b0024] to-[#000000] px-6">
      {/* Efecto neón sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,216,255,0.08)_0%,_transparent_70%)] blur-[80px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,102,204,0.08)_0%,_transparent_70%)] blur-[80px]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mt-[-50px]">
        {/* Título */}
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-8"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: "#6EE7FF",
            textShadow:
              "0 0 10px #00B8FF, 0 0 25px rgba(0,184,255,0.6), 0 0 50px rgba(0,184,255,0.3)",
          }}
        >
          ARCADIAX
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg md:text-xl mb-5 text-[#EDE9FE]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            lineHeight: "1.6",
          }}
        >
          Renovar una casa <span className="text-[#00B8FF]">ochentera</span> de
          Ávila, combinando su esencia vintage con{" "}
          <span className="text-[#FF66CC]">domótica</span> e{" "}
          <span className="text-[#FF66CC]">inteligencia artificial</span>.
        </p>

        {/* Descripción */}
        <p
          className="text-sm md:text-base text-[#C8C8D3] leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Un proyecto artesanal que une el alma retro con la tecnología moderna.  
          Desarrollado sin dependencias externas, 100% hecho a mano con pasión y código.
        </p>

        {/* Botón */}
        <Link
          href="/dashboard"
          className="relative inline-block px-10 py-3 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background:
              "linear-gradient(90deg, #FF66CC 0%, #FF85DD 50%, #FF66CC 100%)",
            boxShadow: "0 0 15px rgba(255, 102, 204, 0.7)",
          }}
        >
          <span className="relative z-10">Push Start</span>
          <span className="absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-r from-[#FF66CC] to-[#00B8FF] animate-pulse"></span>
        </Link>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent opacity-40"></div>
    </section>
  );
}
