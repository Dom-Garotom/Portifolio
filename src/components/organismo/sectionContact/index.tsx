"use client"
import { motion } from "framer-motion";

function SectionContact() {
    return (
        <div className="w-full h-[50vh] max-h-[350px] flex flex-col items-center justify-center gap-7 bg-gray-900 border-y-2 border-gray-800 p-4 md:p-0">
            <motion.h1 
            className="text-2xl md:text-4xl font-semibold text-emerald-500 text-center max-w-lg md:max-w-2xl"
            initial={{x:-100, opacity: 0}}
            whileInView={{x:0 , opacity:1}}
            exit={{x:-100, opacity: 0}}
            transition={{ type:"spring", duration: 1.8}}
            >
                Vamos começar a construir o futuro que você imagina!
            </motion.h1>
        </div>
    );
}

export default SectionContact;
