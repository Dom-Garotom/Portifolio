import HeroSection from "../components/organismo/hero";
import CompetenciaSection from "../components/organismo/competence";
import ProjectSection from "../components/organismo/sectionProject";
import ServiceSection from "../components/organismo/servicesSection"
import SectionContact from "@/components/organismo/sectionContact";
import Contact from "@/components/organismo/contact";

export default function Home() {
  return (
    <main className=" w-full">
      <HeroSection/>
      <CompetenciaSection/>
      <ProjectSection/>
      <SectionContact/>
      <ServiceSection/>
      <Contact/>
    </main>
  );
}
