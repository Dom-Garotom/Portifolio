import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonCTAprop{
    content: string;
    caminho?: string
};

function ButtonCTA (prop:ButtonCTAprop){
    return(
        <button className="flex items-center gap-5 bg-emerald-600 px-5 py-3 font-mono text-lg font-light rounded-lg text-white hover:bg-emerald-800 transition-all">
            <Link href={prop.caminho != null ? prop.caminho : "/" } >
                {prop.content}
            </Link>
            <FaArrowRightLong />
        </button>
    );
}

export default ButtonCTA;