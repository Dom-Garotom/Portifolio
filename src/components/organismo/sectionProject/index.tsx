"use client"

import TitleDefault from "../competence/title";
import CardProject from "./cardProject";
import ItenSkill from "../hero/itenSkill";
import LinkDefault from "./linkDefault";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataBaseProject } from "@/types/dataBase";

function ProjectSection() {
    const [data, setData] = useState<DataBaseProject[]>([]);
    const [loading , setLoading] = useState(true);


    useEffect(() => {
        axios.get("https://portifolio-alpha-green.vercel.app/api/getData")
            .then(response => {
                const stars = response.data.filter((item: DataBaseProject) => item.star);
                setData(stars)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally( () => setLoading(false));
    }, [])




    return (
        <section className="flex flex-col items-center pt-20 bg-gray-900 w-full pb-20">
            <div className="flex flex-col items-start w-11/12 lg:w-4/5">
                <TitleDefault title="Projetos em destaque" subTitle="destaques" />

                <div className="mt-10 mb-5 w-full">
                    {loading ? <p>Carregando...</p> : data.map((project, index) => (
                        <CardProject
                            key={index}
                            title={project.nome}
                            url={`/project/${project.id}`}
                            content={project.description}
                            image={project.poster}
                        >
                            {project.stacks.map((skill, skillIndex) => (
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
