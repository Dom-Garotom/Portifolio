import Link from "next/link";
import { GrDeploy } from "react-icons/gr";

interface ButtonCTAprop{
    content: string;
    caminho?: string
};

function ButtonDeploy (prop:ButtonCTAprop){
    return(
        <button className="flex items-center gap-5 bg-emerald-600 px-5 py-3 font-mono text-lg font-medium rounded-lg text-white hover:bg-emerald-800 transition-all">
            <Link href={prop.caminho != null ? prop.caminho : "/" } target="_blank" >
                {prop.content}
            </Link>
            <GrDeploy />
        </button>
    );
}

export default ButtonDeploy;