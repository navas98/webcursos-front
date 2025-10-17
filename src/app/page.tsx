import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#0c0020] via-[#120033] to-[#000000] text-white min-h-screen">
      <Hero />
      <FeatureGrid></FeatureGrid>
      <AboutSection />
      <Footer />
    </main>
  );
}
