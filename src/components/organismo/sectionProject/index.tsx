import Link from "next/link";
import TitleDefault from "../competence/title";
import CardProject from "./cardProject";
import ItenSkill from "../hero/itenSkill";
import LinkDefault from "./linkDefault";
import Pagination from "../../../../public/tumbs/tumb-pagination.png";
import Lista from "../../../../public/tumbs/tumb-lista.png";
import ToDo from "../../../../public/tumbs/tumb-toDo.png";
function ProjectSection() {
    const projects = [
        {
            title: "Pagination",
            url: "https://github.com/Dom-Garotom/Lista-de-pedidos",
            content: "A criação de uma aplicação que consome dados de uma api fazendo a paginação desses dados.",
            image: Pagination,
            skills: ["Next", "Tailwind", "hooks do Next"],
        },
        {
            title: "Gerenciador de tarefas",
            url: "https://github.com/Dom-Garotom/Gerenciador-de-tarefas",
            content: "Criação de um gerenciador de tarefas para aplicar o conhecimento aprendido em estudos anteriores. Uso principal de elementos Dom, datas, css, html e javascript.",
            image: ToDo,
            skills: ["Javascript", "Css", "Html"],
        },
        {
            title: "Lista de compras",
            url: "https://github.com/Dom-Garotom/Lista-de-compras-react",
            content: "Criando uma simples página react com intuito de praticar o uso dos hooks criando uma lista de compras interativa.",
            image: Lista,
            skills: ["React js", "Tailwind"],
        },
    ];

    


    return (
        <section className="flex flex-col items-center pt-20 bg-gray-900 w-full pb-20">
            <div className="flex flex-col items-start w-11/12 lg:w-4/5">
                <TitleDefault title="Projetos em destaque" subTitle="destaques" />

                <div className="mt-10 mb-5 w-full">
                    {projects.map((project, index) => (
                        <CardProject
                            key={index}
                            title={project.title}
                            url={project.url}
                            content={project.content}
                            image={project.image}
                        >
                            {project.skills.map((skill, skillIndex) => (
                                <ItenSkill key={skillIndex} content={skill} />
                            ))}
                        </CardProject>
                    ))}
                </div>

                <LinkDefault href="/projetos" text="Se interessou?" linkText="Ver todos" right />
            </div>
        </section>
    );
}

export default ProjectSection;
