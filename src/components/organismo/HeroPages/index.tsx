import { ReactNode } from "react";
import LinkDefault from "../sectionProject/linkDefault";

interface HeroPagesProps{
    title : string,
    subTitle : string,
    content : string,
    href : string,
    linkText : string,
    children ?: ReactNode;
}

function HerosPages(prop : HeroPagesProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-5  bg-hero-image bg-cover bg-no-repeat h-[100vh]">

            <div className="flex flex-col items-center text-center gap-3">
                <span className="text-emerald-500 font-light text-lg">. . /{prop.subTitle}</span>
                <h1 className="text-5xl font-mono font-semibold mb-4">{prop.title}</h1>
                <div className="">
                    <p className="w-[640px] text-gray-500 ">{prop.content}</p>
                </div>
            </div>

            <div className="flex flex-col gap-16 mb-10">
                {prop.children}
            </div>

            <LinkDefault href={prop.href} linkText={prop.linkText} left />

        </section>
    )
}

export default HerosPages;