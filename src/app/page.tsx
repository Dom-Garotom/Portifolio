import Image from "next/image";
import HeroSection from "../components/hero";
import CompetenciaSection from "../components/competence";
import ProjectSection from "../components/sectionProject";
import ServiceSection from "../components/servicesSection"
import SectionContact from "@/components/sectionContact";

export default function Home() {
  return (
    <main className=" w-full">
      <HeroSection/>
      <CompetenciaSection/>
      <ProjectSection/>
      <ServiceSection/>
      <SectionContact/>
    </main>
  );
}
