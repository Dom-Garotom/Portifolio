"use client"

import HerosPages from "@/components/organismo/HeroPages";
import { DataBaseProject } from "../../../types/dataBase";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { marked } from "marked"
import ButtonDeploy from "@/components/atomos/buttonDeploy";
import ButtonGit from "@/components/atomos/buttonGit";
import ItenSkill from "@/components/organismo/hero/itenSkill";
import ButtonTop from "@/components/atomos/buttonTop";




export default function ArticlesPage() {
    const { id } = useParams();
    const [projectData, setProjectData] = useState<DataBaseProject[]>([]);
    const [data, setData] = useState<DataBaseProject>();
    const [readme, setReadme] = useState("");


    useEffect(() => {
        axios.get("https://portifolio-alpha-green.vercel.app/api/getData")
            .then(response => {
                setProjectData(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            })


    }, [])


    useEffect(() => {
        if (projectData.length > 0) {
            const dataProject = projectData.find(element => element.id == id);

            if (dataProject) {
                const html = marked(dataProject?.readme) as string;
                setReadme(html);
                setData(dataProject);
            } else {
                console.error("Data Project não existe");
            }
        }
    }, [projectData])

    return (
        <main>
            <ButtonTop/>
            <HerosPages
                title={data?.nome!}
                subTitle="projeto"
                content={data?.description!}
                linkText="Voltar para Projetos"
                href="/projetos"
            >

                <div className="flex gap-3 justify-center w-full flex-wrap ">
                    {data?.stacks.map( (stack , index) => ((
                        <ItenSkill
                            key={index}
                            content={stack}
                        />
                    )))}
                </div>

                <div className="flex w-full sm:flex-row flex-col gap-5 items-center justify-center">
                    <ButtonGit
                        content="GitHub do projeto"
                        caminho={data?.github}
                    />

                    <ButtonDeploy
                        caminho={data?.deploy}
                        content="Deploy do projeto"
                    />
                </div>
            </HerosPages>


            <section className="w-full flex justify-center border-t-2 border-gray-800">
                <div className="prose prose-lg format sm:max-w-[80vw] w-full px-2 sm:px-10 py-28 border-gray-800 border-x-2
                 " dangerouslySetInnerHTML={{ __html: readme }} />
            </section>

        </main>
    )
}