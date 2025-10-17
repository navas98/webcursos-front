import "./globals.css";
import Navbar from "./components/Navbar";
import { Orbitron, Press_Start_2P } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700"], // puedes usar varios pesos
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press",
  weight: "400", // obligatorio, solo existe 400
});

export const metadata = {
  title: "ArcadiaX",
  description: "Retro-futuristic Smart Home & Arcade Ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${orbitron.variable} ${pressStart.variable}`}>
      <body className="bg-gradient-to-b from-[#0b0018] via-[#130034] to-black text-white">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
