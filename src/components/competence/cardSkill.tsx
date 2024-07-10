import { ReactElement } from "react";

interface CardSkillProps{
    title: string,
    subTitle: string,
    icon ?: ReactElement,
}

function CardSkill (prop:CardSkillProps){
    return(
        <div className="flex flex-col justify-between p-5 bg-gray-800 text-gray-500 text-lg gap-3 w-[18.5rem] h-[7rem] rounded-lg hover:bg-emerald-500 hover:text-white transition-all ">
            <div className="flex justify-between w-full ">
                <p className="font-medium">{prop.title}</p>
                <span className="font-normal">{prop.icon}</span>
            </div>
            <p className="w-full text-base">{prop.subTitle}</p>
        </div>
    );
}

export default CardSkill;