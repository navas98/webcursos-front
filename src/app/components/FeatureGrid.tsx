export default function Features() {
  const features = [
    {
      title: "🏠 Renovación Retro",
      desc: "Restaurar una casa de los años 80-90 conservando su estética vintage, con un toque moderno y tecnológico.",
      color: "#FF66CC",
    },
    {
      title: "🧠 Domótica Propia",
      desc: "Diseñar un sistema de control artesanal: luces, audio, cámaras y sensores, sin depender de servicios externos.",
      color: "#00D8FF",
    },
    {
      title: "📺 Ecosistema Inteligente",
      desc: "Integrar multimedia, IA y automatización para crear una experiencia única entre lo clásico y lo futurista.",
      color: "#FF66CC",
    },
  ];

  return (
    <section className="py-28 px-8 bg-[#12002a]/60 backdrop-blur-md border-t border-[#2A004D]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#2A004D] p-8 bg-[#1A0038]/80 hover:scale-105 transition-transform shadow-[0_0_25px_rgba(0,0,0,0.6)]"
            style={{ boxShadow: `0 0 20px ${f.color}40`, fontFamily: "'Orbitron', sans-serif" }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: f.color, textShadow: `0 0 12px ${f.color}` }}
            >
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
