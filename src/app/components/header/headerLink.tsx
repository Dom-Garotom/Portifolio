import Link from "next/link";

interface headerLinkProp {
    content: string;
    href: string;
}
function HeaderLink(prop: headerLinkProp) {
    return (
        <>
            <div className="flex  sm:gap-2">
                <span className="text-emerald-500">#</span>

                <Link 
                href={prop.href} 
                className={`flex flex-col gap-1  transition-all hover:font-bold after:w-0 after:h-[1px] 
                after:bg-emerald-300 hover:after:w-[110%] after:transition-all `}
                >
                    {prop.content}
                </Link>
                
            </div>
        </>
    );
}

export default HeaderLink;