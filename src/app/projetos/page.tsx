'use client';

import ProjectItem from "@/components/moleculas/projectsItem";
import HerosPages from "@/components/organismo/HeroPages";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataBaseProject } from "@/types/dataBase";


function ProjectPage() {
    const [data, setData] = useState<DataBaseProject[]>([]);


    useEffect(() => {
        axios.get("http://localhost:3000/api/getData")
            .then(response => {
                setData(response.data);
            })
            .catch((error) =>{
                console.error(error)
            })
    }, [])



    return (
        <>
            <HerosPages
                title="Meus Projetos"
                subTitle="projetos"
                content="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
                linkText="Voltar para home"
                href="/"
            />

            <section className="flex flex-row justify-center bg-gray-900 py-16">
                <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[90vw] lg:max-w-[80vw] w-full">
                    {data.map((item) => (
                        <Link key={item.id} href={`/project/${item.id}`} target="_blank" className="">
                            <ProjectItem

                                title={item.nome}
                                content={item.description}
                                tecnologia={item.stacks}
                                src={undefined}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectPage;
