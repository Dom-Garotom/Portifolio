'use client';

import ProjectItem from "@/components/moleculas/projectsItem";
import HerosPages from "@/components/organismo/HeroPages";
import Link from "next/link";
import Eduster from "../../../public/tumbs/tumb-eduster.png"
import Pagination from "../../../public/tumbs/tumb-pagination.png"
import Lista from "../../../public/tumbs/tumb-lista.png"
import ToDo from "../../../public/tumbs/tumb-toDo.png"
import Lingua from "../../../public/tumbs/tumb-lingua.png"
import Musik from "../../../public/tumbs/tumb-musik.png"


function ProjectPage() {

    const projects = [
        {
            id : 0 ,
            title: "Pagination",
            url: "https://lista-de-pedidos-black.vercel.app",
            content: "A criação de uma aplicação que consome dados de uma api fazendo a paginação desses dados.",
            image: Pagination,
            tecnologias : "Next , Tailwind ,  hooks do Next"
        },
        {
            id : 1,
            title: "Lingua",
            url: "https://lingua-six.vercel.app",
            content: 'Site de uma escola de inglês chamada Lingua, feita com intuito de praticar o uso de Next js , Tailwind e ShadCn',
            image: Lingua,
            tecnologias : "Next js, Tailwind , ShadCn"
        },
        {
            id : 2,
            title: "Eduster",
            url: "https://dom-garotom.github.io/Projeto---Eduster-/",
            content: "A parte visual de uma aplicação de agendamento e gerenciamento de salas de aulas. O objetivo é criar a parte visual da captação do usuário desde o site da Eduster até a aplicação em si.",
            image: Eduster,
            tecnologias : "Html, css , javascript"
        },
        {
            id : 3,
            title: "Gerenciador de tarefas",
            url: "https://gerenciador-de-tarefas-alpha.vercel.app",
            content: "Criação de um gerenciador de tarefas para aplicar o conhecimento aprendido em estudos anteriores. Uso principal de elementos Dom, datas, css, html e javascript.",
            image: ToDo,
            tecnologias : "Javascript Css Html"
        },
        {
            id : 4,
            title: "Lista de compras",
            url: "https://lista-de-compras-flame-omega.vercel.app",
            content: "Criando uma simples página react com intuito de praticar o uso dos hooks criando uma lista de compras interativa.",
            image: Lista,
            tecnologias : "React e Tailwind"
        },
        {
            id : 5,
            title: "Musik-Concert",
            url: "https://dom-garotom.github.io/Music-Concert/",
            content: "Criação de um site para a divulgação de um evento de festival de músicas organizados pela empresa Music.",
            image: Musik,
            tecnologias : "Javascript Css Html"
        }
    ];



    return (
        <>
            <HerosPages
                title="Meus Projetos"
                subTitle="projetos"
                content="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
                linkText="Voltar para home"
                href="/"
            />

            <section className="flex flex-row justify-center bg-gray-900">
                <div className="flex gap-5 justify-center flex-wrap px-40 py-40">
                    {projects.map((item) => (
                        <Link key={item.id} href={`${item.url}`} target="_blank" >
                            <ProjectItem
                                
                                title={item.title}
                                content={item.content}
                                tecnologia={item.tecnologias}
                                src={item.image}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectPage;
