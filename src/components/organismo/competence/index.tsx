import CardSkill from "./cardSkill";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxComponent1 } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import TitleDefault from "./title";


function CompetenciaSection() {
    const skillsData = [
        {
            title: "Typescript",
            subTitle: "Nível intermediário",
            icon: <SiTypescript />
        },
        {
            title: "Node",
            subTitle: "Nível intermediário",
            icon: <RiJavascriptLine />
        },
        {
            title: "Next",
            subTitle: "Nível intermediário",
            icon: <RiNextjsFill />
        },
        {
            title: "React",
            subTitle: "Nível intermediário",
            icon: <FaReact />
        },
        {
            title: "Tailwind",
            subTitle: "Nível intermediário",
            icon: <RiTailwindCssFill />
        },
        {
            title: "Styled Components",
            subTitle: "Nível intermediário",
            icon: <RxComponent1 />
        }
    ];

    return (
        <section className=" flex flex-col items-center justify-around  bg-gray-900 w-[99vw] py-20">
            <div className="flex flex-col gap-20 justify-between px-2">
                <TitleDefault title="Conhecimentos" subTitle="competências" />

                <div className="grid grid-cols-1 px-2 mobile:px-0  mobile:grid-cols-2  md:grid-cols-3 gap-4 w-[95vw] lg:w-[80vw] ">
                    {skillsData.map((skill, index) => (
                        <CardSkill
                            key={index}
                            title={skill.title}
                            subTitle={skill.subTitle}
                            icon={skill.icon}

                            initial={{y:-50,  opacity:0}}
                            whileInView={{y:0,  opacity:1}}
                            exit={{y:-50,  opacity:0}}
                            transition={{duration: 0.1 , delay: index * 0.1}}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CompetenciaSection;