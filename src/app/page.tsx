import HeroSection from "../components/organismo/hero";
import CompetenciaSection from "../components/organismo/competence";
import ProjectSection from "../components/organismo/sectionProject";
import ServiceSection from "../components/organismo/servicesSection"
import SectionContact from "@/components/organismo/sectionContact";

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
