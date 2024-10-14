"use client"

import Header from "@/components/organismo/header";
import HerosPages from "@/components/organismo/HeroPages";
import { DataBaseProject } from "@/types/dataBase";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { marked }from "marked"




export default function ArticlesPage() {
    const { id } = useParams();
    const [projectData, setProjectData] = useState<DataBaseProject[]>([]);
    const [readme, setReadme] = useState("");


    useEffect(() => {
        axios.get("http://localhost:3000/api/getData")
        .then(response => {
            setProjectData(response.data);
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        })

        
    }, [])


    useEffect(() =>{
        if (projectData.length > 0){
            const dataProject = projectData.find(element => element.id == id);
            
            if (dataProject){
                const html = marked(dataProject?.readme) as string;
                setReadme(html);
            } else {
                console.error("Data Project não existe");
            }
        }
    })

    return (
        <main>
            <Header />

            <HerosPages
                title="Nome Do projeto"
                subTitle="projeto"
                content="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
                linkText="Voltar para Projetos"
                href="/projetos"
            />

            <section className="w-full flex justify-center py-9">
                <p className="max-w-[80vw] w-full" dangerouslySetInnerHTML={{__html:readme}}/>
            </section>

        </main>
    )
}