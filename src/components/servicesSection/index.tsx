import ButtonCTA from "../ButtonCTA";
import CardSkill from "../competence/cardSkill";
import TitleDefault from "../competence/title";
import ItenSkill from "../hero/itenSkill";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CardService from "./cardService";



function ServiceSection() {
    return (
        <section className=" flex flex-col items-center justify-around pt-10 bg-gray-900 w-[99vw] pb-40 ">
            <div className="flex flex-col gap-20 justify-between">
                <TitleDefault title="Como posso te ajudar ?" subTitle="Serviços" />

                <div className="flex gap-4 w-[80vw] ">

                    <CardService
                        title="Designer UX/UI"
                        content="Crio layouts e designs atraentes para interfaces de usuário, garantindo uma experiência visualmente agradável e intuitiva com o uso de ferramentas como o figma."
                    />

                    <CardService
                        title="Desenvolvedor web"
                        content="Com conhecimentos aplicados em projetos de sites e aplicações web, te ajudo na criação de sites interativos e responsivos usando  frameworks como React e Next js e a magia da estilização advinda do  Tailwind e Sass ."
                    />

                    

                </div>

            </div>
        </section>
    )
}

export default ServiceSection;