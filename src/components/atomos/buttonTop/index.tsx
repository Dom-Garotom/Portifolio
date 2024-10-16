import { BiChevronUp } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function ButtonTop() {
    const [isBlock, setIsBlock] = useState(false);

    const toTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scroll = (100 * scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

            if (scroll > 20) {
                setIsBlock(true);
            } else {
                setIsBlock(false);
            }

            if ( scroll > 80){
                setIsBlock(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [isBlock] )


    return (
        <>
            {isBlock && 
            
            <button
                className="flex justify-center items-center w-[50px] h-[50px] bg-emerald-500 rounded-md hover:bg-emerald-700 fixed bottom-[20px] right-[20px] shadow shadow-emerald-700"
                onClick={() => toTop()}
            >
                <BiChevronUp className="text-[1.6rem] font-bold text-gray-950" />
            </button>
            
            }
        </>
    )
}