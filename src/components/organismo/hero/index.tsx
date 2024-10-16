"use client"

import Image from "next/image";
import Person from "../../../../public/images/person.jpeg";
import ItenSkill from "./itenSkill";
import ButtonCTA from "../../moleculas/ButtonCTA";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion"

function HeroSection() {

    const skills = [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Styled Components",
        "Shadcn",
        "Axios",
        "Python",
        "Node",
        "Git"
    ];


    return (
        <section className="min-h-[100vh] overflow-hidden  flex items-center justify-around  bg-hero-image bg-cover bg-no-repeat md:gap-3 p-5 ">
            <motion.div
                className="flex flex-col h-auto md:max-w-[400px]  gap-5  justify-between items-start "
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <p className="text-emerald-500 font-mono text-base mb-3">Olá, meu nome é </p>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Gean Ferreira</h1>
                </div>

                <p className="text-gray-400 w-full max-w-[530px]">Olá, meu nome é Gean Ferreira e sou um desenvolvedor front-end apaixonado por tecnologia. Com <b className="text-white" >1 ano de estudos em tecnologia</b>. Meu objetivo é criar interfaces de usuário bonitas e fazer o que amo. Gosto de projetos desafiadores, estou sempre aberto a novas oportunidades e desafios.</p>

                <div className="flex flex-row flex-wrap gap-2 max-w-full md:max-w-[450px]">
                    {skills.map((skill, index) => (
                        <ItenSkill
                            key={index}
                            content={skill}
                            initial={{ scale: 0 , opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            exit={{scale:0 , opacity: 0 }}
                            transition={{ duration: 0.3 , delay: index * 0.1}}
                        />
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <ButtonCTA content="Entre em contato" caminho="/contact" />
                    <div className="flex justify-between items-center gap-3 text-2xl">
                        <Link href={"https://github.com/Dom-Garotom"} target="_blank">
                            <LuGithub className="hover:text-emerald-600 text-slate-700 " />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/gean-ferreira-7580a4304/"} target="_blank">
                            <CiLinkedin className="hover:text-emerald-600 text-slate-700 " />
                        </Link>
                        <Link href={"https://discordapp.com/users/591655944635678744"} target="_blank">
                            <FaDiscord className="hover:text-emerald-600 text-slate-700 " />
                        </Link>
                        <Link href={"mailto:contato.geanoficial14@gmail.com"} target="_blank">
                            <MdOutlineMarkEmailRead className="hover:text-emerald-600 text-slate-700 " />
                        </Link>
                    </div>
                </div>
            </motion.div>
            <div>
                {/* <Image
                    className="aspect-auto hidden md:block md:w-[450px] lg:w-[550px] h-[450px]"
                    src={Person}
                    alt=""
                /> */}
            </div>
        </section>
    );
}

export default HeroSection;
