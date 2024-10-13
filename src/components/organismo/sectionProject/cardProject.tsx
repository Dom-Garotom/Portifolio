import Image, { StaticImageData } from "next/image";
import ButtonCTA from "../../moleculas/ButtonCTA";
import ItenSkill from "../hero/itenSkill";
import foto from "../../../../public/images/Foto (1).png";
import { CgPathExclude } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { ReactNode } from "react";
import Link from "next/link";

interface CardProjectProp {
    title: string;
    content: string;
    url: string;
    image?: StaticImageData;
    children?: ReactNode;
}

function CardProject(prop: CardProjectProp) {
    return (
        <div className="flex flex-col lg:flex-row w-full border-y py-10 gap-9 border-gray-700">
            <div className="w-full w-auto lg:min-w-[450px] lg:w-[500px]">
                <Image src={prop.image === undefined ? foto : prop.image} width={450} height={450} alt={prop.title} className="w-full h-full " />
            </div>

            <div className="flex flex-col py-3 gap-5 w-full max-w-[850px]">
                <div className="flex gap-2 items-center">
                    <CgPathExclude className="text-emerald-500 text-3xl" />
                    <p>{prop.title}</p>
                </div>
                <p className="text-gray-400 w-full ">{prop.content}</p>
                <div className="flex flex-wrap gap-2">
                    {prop.children}
                </div>
                <div className="flex gap-2 flex-wrap w-full md:w-[300px]">
                    
                </div>
                <Link href={prop.url} target="_blank" className="flex items-center gap-2 text-gray-300 mt-4 w-32 hover:font-bold transition-all">
                    Ver projeto
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    );
}

export default CardProject;
