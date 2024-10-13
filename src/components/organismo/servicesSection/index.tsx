import TitleDefault from "../competence/title";
import CardService from "./cardService";
import { MdOutlineQuestionMark } from "react-icons/md";


function ServiceSection() {
    return (
        <section className=" flex flex-col items-center justify-around pt-10 bg-gray-900 w-[99vw] pb-32 ">
            <div className="flex flex-col gap-10 justify-between  w-[80vw]  ">
                <TitleDefault title="Como posso te ajudar..." subTitle="Serviços"  />

                <div className="flex lg:flex-row  flex-col-reverse  gap-4 max-w-[80vw] w-ful items-center justify-between">

                    <div className="flex flex-col justify-center items-center gap-4 ">
                        <CardService
                            title="Designer UX/UI"
                            content="Crio layouts e designs atraentes para interfaces de usuário, garantindo uma experiência visualmente agradável e intuitiva com o uso de ferramentas como o figma."
                        />

                        <CardService
                            title="Desenvolvedor web"
                            content="Com conhecimentos aplicados em projetos de sites e aplicações web, te ajudo na criação de sites interativos e responsivos usando  frameworks como React e Next js e a magia da estilização advinda do  Tailwind e Sass ."
                        />
                    </div>


                    <div className="flex w-full items-center justify-center max-w-[400px]">
                        <MdOutlineQuestionMark className="text-[20rem] text-slate-800 hover:text-emerald-600" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ServiceSection;