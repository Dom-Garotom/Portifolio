"use client"

import {   ComponentProps, ReactElement } from "react";
import { motion } from "framer-motion";

type CardSkills = ComponentProps<typeof motion.div> & {
    title: string,
    subTitle: string,
    icon?: ReactElement,
}

function CardSkill({title , subTitle , icon , ...motionsProps}: CardSkills) {
    return (
        <motion.div
        {...motionsProps}
        className="flex flex-col justify-between p-5 bg-gray-800 text-gray-500 text-lg gap-3 min-w-[200px]
        max-w-[600px] w-full h-[7rem] rounded-lg hover:bg-emerald-500 hover:text-white transition-all "
        >
            <div className="flex justify-between w-full ">
                <p className="font-medium">{title}</p>
                <span className="font-normal">{icon}</span>
            </div>
            <p className="w-full text-base">{subTitle}</p>
        </motion.div>
    );
}

export default CardSkill;