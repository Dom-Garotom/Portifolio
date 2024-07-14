import ProjectItem from "@/components/projectsItem";
import LinkDefault from "@/components/sectionProject/linkDefault";
import teste from "../../../public/images/Rectangle 1528.png"
import HerosPages from "@/components/HeroPages";

function ProjectPage() {
    return (
        <>
            <HerosPages
                title="Meus Projetos"
                subTitle="projetos"
                content="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
                linkText="Voltar para home"
                href="/"
            />

            <section className="flex flex-row justify-center  bg-gray-900 ">
                <div className="flex gap-5 justify-center flex-wrap  px-40 py-40">

                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    <ProjectItem
                        title="WideBook"
                        content="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
                        tecnologia="Next,js, Next Auth, Stiches"
                        src={teste}
                    />
                    
                </div>
            </section>
        </>
    );
}

export default ProjectPage;