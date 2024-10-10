import Image from "next/image";
import ImageDefault from "../../../public/images/Foto (1).png"

interface ProjectItemProps {
    src?: any;
    title: string;
    content: string;
    tecnologia: string;
}

function ProjectItem(prop: ProjectItemProps) {
    return (
        <div className="bg-gray-800 w-[350px] h-full rounded-t-[25px]  rounded-b-[10px] opacity-45 hover:opacity-100 transition-all">
            <Image src={prop.src == undefined ? (ImageDefault) : (prop.src)} alt="Imagem do projeto" width={350} height={192} className="rounded-t-[15px] rounded-b-[0px]" />
            <div className="flex flex-col gap-3 p-7 bg-gray-800 w-[350px] h-[244px] rounded-b-[10px]">
                <h3 className="text-gray-50 font-semibold">{prop.title}</h3>
                <p className="w-[286px] h-[96px] text-base truncate-lines-7 text-gray-400 mb-5">{prop.content}</p>
                <p className="text-gray-300">{prop.tecnologia}</p>

            </div>
        </div>
    )
}

export default ProjectItem;