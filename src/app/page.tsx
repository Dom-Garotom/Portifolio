import Image from "next/image";
import HeroSection from "./components/hero";
import CompetenciaSection from "./components/competencia";

export default function Home() {
  return (
    <main className=" w-full h-[100vh]  ">
      <HeroSection/>
      <CompetenciaSection/>
    </main>
  );
}
