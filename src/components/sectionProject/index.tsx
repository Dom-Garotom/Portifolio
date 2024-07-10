import Link from "next/link";
import TitleDefault from "../competence/title";
import { FaArrowRightLong } from "react-icons/fa6";
import CardProject from "./cardProject";
import ItenSkill from "../hero/itenSkill";



function ProjectSection() {
    return (
        <section className=" flex flex-col items-center pt-20 bg-gray-900 w-[99vw] pb-20">
            <div className="flex flex-col items-start w-[80vw] gap-32 ">
                <TitleDefault 
                title="Projetos em destaque" 
                subTitle="destaques" 
                />

                <div className="">
                    <div>
                    <CardProject 
                    title="Boowise" 
                    url="/"  
                    content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js." 
                    >
                        <ItenSkill key={1} content="Next js" />
                        <ItenSkill key={2} content="React" />
                    
                    </CardProject>

                    </div>

                    <div>
                    <CardProject 
                    title="Boowise" 
                    url="/"  
                    content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js." 
                    >
                        <ItenSkill key={1} content="Next js" />
                        <ItenSkill key={2} content="React" />
                    
                    </CardProject>

                    </div>

                    <div>
                    <CardProject 
                    title="Boowise" 
                    url="/"  
                    content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js." 
                    >
                        <ItenSkill key={1} content="Next js" />
                        <ItenSkill key={2} content="React" />
                    
                    </CardProject>

                    </div>
                </div>

                <span className="flex gap-2 text-gray-500">
                    se interessou? {''}
                    <Link href={'/'} className="flex items-center gap-3 text-white">
                        Ver todos
                        <FaArrowRightLong />
                    </Link>
                </span>

            </div>
        </section>
    )
}

export default ProjectSection;