import Image from "next/image"
import Person from "../../../../public/images/person.png"
import ItenSkill from "./itenSkill";
import ButtonCTA from "../ButtonCTA";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function HeroSection() {
    return (
        <section className="flex flex-row-reverse items-center justify-around pt-20 bg-hero-image bg-cover bg-no-repeat h-[100vh]">
            <Image src={Person} alt="" width={520} height={520} />
            <div className="flex flex-col h-[400px] justify-between items-start ">
                <div>
                    <p className="text-emerald-500 font-mono text-base mb-3">Olá, meu nome é </p>
                    <h1 className="text-5xl font-semi mb-4">Gean Ferreira</h1>
                </div>


                <p className="text-gray-400 w-[530px]">Olá, meu nome é Pedro Costa e sou um desenvolvedor front-end apaixonado por tecnologia. Com mais de <b className="text-white" >5 anos de experiência</b>. Meu objetivo é criar interfaces de usuário bonitas e funcionais, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.</p>

                <div className="flex flex-row flex-wrap gap-2 max-w-[450px]">
                    <ItenSkill content="Next js" />
                    <ItenSkill content="React" />
                    <ItenSkill content="Javascript" />
                    <ItenSkill content="Typescript" />
                    <ItenSkill content="Tailwind" />
                    <ItenSkill content="Ui/UX" />
                    <ItenSkill content="Git" />
                </div>

                <div className=" flex gap-5">
                    <ButtonCTA content="Entre em contato" />
                    <div className=" flex justify-between items-center gap-3 text-slate-700 text-2xl   ">
                        <LuGithub />
                        <CiLinkedin />
                        <FaWhatsapp />
                        <MdOutlineMarkEmailRead />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection;