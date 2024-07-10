import Image from "next/image";
import HeroSection from "./components/hero";
import CompetenciaSection from "./components/competence";
import ProjectSection from "./components/sectionProject";
import ContactSection from "./components/sectionContact";

export default function Home() {
  return (
    <main className=" w-full h-[100vh]  ">
      <HeroSection/>
      <CompetenciaSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
  );
}
