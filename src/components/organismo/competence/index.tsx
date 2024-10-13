import CardSkill from "./cardSkill";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import TitleDefault from "./title";


function CompetenciaSection() {
    return (
        <section className=" flex flex-col items-center justify-around  bg-gray-900 w-[99vw] py-20">
            <div className="flex flex-col gap-20 justify-between px-2">
                <TitleDefault title="Conhecimentos" subTitle="competências" />

                <div className="grid grid-cols-1 px-2 mobile:px-0  mobile:grid-cols-2  md:grid-cols-3 gap-4 w-[95vw] lg:w-[80vw] ">
                    <CardSkill title="Javascript" subTitle="Nível intermédiario" icon={<RiJavascriptLine />} />
                    <CardSkill title="Typescript" subTitle="Nível intermédiario" icon={<SiTypescript />} />
                    <CardSkill title="Next" subTitle="Nível intermédiario" icon={<RiNextjsFill />} />
                    <CardSkill title="React" subTitle="Nível intermédiario" icon={<FaReact />} />
                    <CardSkill title="Tailwnd" subTitle="Nível intermédiario" icon={<RiTailwindCssFill />} />
                    <CardSkill title="Css" subTitle="Nível avançado" icon={<IoLogoCss3 />} />
                    <CardSkill title="Html" subTitle="Nível avançado" icon={<FaHtml5 />} />
                    <CardSkill title="Sass" subTitle="Nível básico" icon={<SiSass />} />
                </div>
            </div>
        </section>
    )
}

export default CompetenciaSection;