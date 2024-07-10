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
        <span>
            {prop.text} {''}
            < Link href={prop.href} className="flex items-center gap-3 text-white" >
                {prop.linkText}
                {prop.right ? (
                    <FaArrowRightLong />
                ) : (
                    <FaArrowLeftLong />
                )
                }
            </Link >
        </span >
    )
}

export default LinkDefault;