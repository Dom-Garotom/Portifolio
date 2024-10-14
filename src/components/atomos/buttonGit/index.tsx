import Link from "next/link";
import { SiGithub } from "react-icons/si";

interface ButtonCTAprop{
    content: string;
    caminho?: string
};

function ButtonGit (prop:ButtonCTAprop){
    return(
        <button className="flex items-center gap-5 bg-slate-800 px-5 py-3 font-mono text-lg font-medium rounded-lg text-white hover:bg-slate-700 transition-all">
            <Link href={prop.caminho != null ? prop.caminho : "/" }  target="_blank">
                {prop.content}
            </Link>
            <SiGithub />
        </button>
    );
}

export default ButtonGit;