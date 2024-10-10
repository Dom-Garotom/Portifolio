import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

interface LinkDefaultProp {
    text?: string;
    linkText: string;
    href: string;
    left?: true;
    right?: true;
}

function LinkDefault(prop: LinkDefaultProp) {
    return (
        <span className="flex gap-2 text-gray-500">
            {prop.text} {''}
            < Link href={prop.href} className="flex items-center gap-3 text-white " >
                {prop.left && (<FaArrowLeftLong />)}

                <span className="transition-all hover:font-bold ">
                    {prop.linkText}
                </span>

                {prop.right && (<FaArrowRightLong />)}
            </Link >
        </span >
    )
}

export default LinkDefault;