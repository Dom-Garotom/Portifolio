"use client"
import { motion } from "framer-motion"

interface TitleDefaultProps{
    title:string,
    subTitle:string
}

function TitleDefault(prop:TitleDefaultProps) {
    return (
        <motion.div 
        initial={{x: -100 , opacity : 0 }}
        whileInView={{x:0 , opacity: 1}}
        exit={{x: -100 , opacity: 0}}
        transition={{duration: 0.6}}
        className="flex items-start flex-col gap-5">
            <span className="text-emerald-500 tracking-wider text-base sm:text-lg ">. . /{prop.subTitle}</span>
            <h2 className="text-3xl sm:text-4xl font-medium">{prop.title}</h2>
        </motion.div>
    )
}

export default TitleDefault;