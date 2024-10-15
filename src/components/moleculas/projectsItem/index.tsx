import Image from "next/image";
import ImageDefault from "../../../../public/images/Foto (1).png"
import { StaticImageData } from "next/image";

interface ProjectItemProps {
    src?: StaticImageData;
    title: string;
    content: string;
    tecnologia: string[];
}

function ProjectItem(prop: ProjectItemProps) {
    return (
        <div className="bg-gray-800 max-w-[350px] w-full min-h-[390px] rounded-t-[25px]  rounded-b-[10px] opacity-45 hover:opacity-100 transition-all">
            <Image src={prop.src == undefined ? (ImageDefault) : (prop.src)} alt="Imagem do projeto" width={350} className="rounded-t-[15px] rounded-b-[0px] h-[189px] w-full" />
            <div className="flex flex-col gap-3 p-3 lg:p-7 bg-gray-800 max-w-[350px] w-full h-[250px] rounded-b-[10px]">
                <h3 className="text-gray-50 font-semibold">{prop.title}</h3>
                <p className="max-w-[286px] w-full h-[96px] text-base truncate-lines-7 text-gray-400 mb-5">{prop.content}</p>
                <p className="text-gray-300">{
                    prop.tecnologia.map(text => ((
                        text + " "
                    )))
                }</p>

            </div>
        </div>
    )
}

export default ProjectItem;