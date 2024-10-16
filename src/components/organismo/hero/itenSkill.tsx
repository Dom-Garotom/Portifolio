"use client"

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type ItenSkillProps = ComponentProps<typeof motion.div> & {
    content: string;
    icon?: string;
}

function ItenSkill( {content , icon , ...motionProps} : ItenSkillProps) {
    return (
        <motion.div 
        {...motionProps}
        className={`flex max-w-[200px] h-[32px] px-2 py-1 rounded-md items-center bg-emerald-900 text-emerald-400 cursor-pointer`}>
            {icon != null ? <i className={icon}></i> : ''}
            {content}
        </motion.div>
    )
}

export default ItenSkill;