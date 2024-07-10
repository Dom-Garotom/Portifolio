import ButtonCTA from "../ButtonCTA";
import CardSkill from "../competence/cardSkill";
import TitleDefault from "../competence/title";
import ItenSkill from "../hero/itenSkill";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";



function ContactSection() {
    return (
        <section className=" flex flex-col items-center justify-around pt-20 bg-gray-900 w-[99vw] pb-20">
            <div className="flex flex-col gap-20 justify-between">
                <TitleDefault title="Como posso te ajudar ?" subTitle="Serviços" />

                <div className="flex gap-4 w-[80vw] ">
                    <div className="flex flex-col gap-4 border rounded-lg py-10 px-10 border-gray-500 ">
                        <h2 className="text-3xl font-medium ">Criação de projeto</h2>
                        <p className="w-[35rem] font-medium text-gray-500">Com conhecimentos aplicados em projetos de sites e landing pages. Te ajudo na criação de sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React e Next js e a magia da estilização advinda do  Tailwind e Sass .</p>
                        <div className="flex flex-wrap gap-2 ">
                            <ItenSkill content="websites" />
                            <ItenSkill content="Landin pages" />
                            <ItenSkill content="E-comerce" />
                            <ItenSkill content="Blogs" />
                        </div>
                        <button className="flex items-center gap-5 w-[15rem]  bg-emerald-600 px-5 py-3 font-mono text-lg font-light rounded-lg text-white hover:bg-emerald-800 transition-all">
                            <Link href={''} >
                                Vamos conversar
                            </Link>
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 border rounded-lg py-10 px-10 border-gray-500">
                        <h2 className="text-3xl font-medium ">Designer UX/UI</h2>
                        <p className="w-[35rem] font-medium text-gray-500">Crio layouts e designs atraentes para interfaces de usuário, garantindo uma experiência visualmente agradável e intuitiva com o uso de ferramentas como o figma.</p>
                        <div className="flex flex-wrap gap-2 ">
                            <ItenSkill content="wire-frames" />
                            <ItenSkill content="Protótipos" />
                            <ItenSkill content="Sites completos" />
                            <ItenSkill content="Design" />
                        </div>
                        <button className="flex items-center gap-5 w-[17rem]  bg-emerald-600 px-5 py-3 font-mono text-lg font-light rounded-lg text-white hover:bg-emerald-800 transition-all">
                            <Link href={''} >
                                Solicitar uma proposta
                            </Link>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default ContactSection;