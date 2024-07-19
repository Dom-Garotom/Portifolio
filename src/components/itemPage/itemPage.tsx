import ButtonCTA from "@/components/ButtonCTA";
import HerosPages from "@/components/HeroPages";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ItenSkill from "@/components/hero/itenSkill";
import Image from "next/image";
import Project from "../../../public/images/project.png"
import { ReactNode } from "react";

interface ProjectItemPage<T>{
    title : string,
    subTitle : string,
    content : string,
    skills : Array<T>,
    chilldren ?: ReactNode,
}
    
function ItemPage<T>( prop : ProjectItemPage<T>) {
    return (
        <>
            <HerosPages
                title={prop.title} 
                subTitle="projetos"
                content={prop.content}
                linkText='voltar para projetos'
                href="/projetos"
               
            >
                <div className="flex flex-row flex-wrap  justify-center gap-2 max-w-[450px]">
                    {/* {prop.skills.map( (item , index ) => {
                        <ItenSkill
                            key={index}
                            content={item}
                        />
                    })   } */}

                    
                    <ItenSkill content="Next js" />
                    <ItenSkill content="React" />
                    <ItenSkill content="Javascript" />
                    <ItenSkill content="Typescript" />
                    <ItenSkill content="Tailwind" />
                    <ItenSkill content="Ui/UX" />
                    <ItenSkill content="Git" />
                </div>

                <div className=" flex gap-5 mb-5">
                    <ButtonCTA content="Entre em contato" caminho="/contact" />
                    <div className=" flex justify-between items-center gap-3 text-slate-700 text-2xl   ">
                        <LuGithub />
                        <CiLinkedin />
                        <FaWhatsapp />
                        <MdOutlineMarkEmailRead />
                    </div>
                </div>


            </HerosPages>

            <section className="flex flex-col items-center w-full bg-gray-900 gap-32 py-20">

                {prop.chilldren}
                
                <div className="flex flex-col items-center py-5 gap-5">
                    <h2 className="text-3xl">Titulo</h2>
                    <Image alt="" src={Project} width={1080} height={672} />
                </div>

                <div className="flex flex-col items-center py-5 gap-5">
                    <h2 className="text-3xl">Titulo</h2>
                    <Image alt="" src={Project} width={1080} height={672} />
                </div>

                <div className="flex flex-col items-center py-5 gap-5">
                    <h2 className="text-3xl">Titulo</h2>
                    <Image alt="" src={Project} width={1080} height={672} />
                </div>

                <div className="flex flex-col items-center py-5 gap-5">
                    <h2 className="text-3xl">Titulo</h2>
                    <Image alt="" src={Project} width={1080} height={672} />
                </div>

                <div className="flex flex-col items-center py-5 gap-5">
                    <h2 className="text-3xl">Titulo</h2>
                    <Image alt="" src={Project} width={1080} height={672} />
                </div>
            </section>


            
        </>
    )
}
export default ItemPage;