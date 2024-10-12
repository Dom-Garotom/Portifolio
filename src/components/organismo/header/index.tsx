"use client"

import Image from "next/image";
import HeaderLink from "./headerLink";
import img from '../../../../public/images/logo.svg'
import { useState } from "react";

function Header() {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <header className="sm:absolute sm:bg-transparent top-2 w-full z-10  flex items-center justify-center flex-col bg-hero-image" >

                <div className="flex justify-between w-full  items-center  container  p-5">

                    <div>
                        <Image
                            alt=""
                            src={img}
                            width={50}
                            height={50}
                        />
                    </div>

                    <nav className="hidden sm:flex  gap-5 sm:gap-10">
                        <HeaderLink href="/" content="Home" />
                        <HeaderLink href="/projetos" content="Projetos" />
                        <HeaderLink href="/contact" content="Contatos" />
                    </nav>

                    <div className="sm:hidden"  onClick={() => setIsVisible(!isVisible)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>
                </div>

                {isVisible &&
                    <nav className="flex flex-col w-full items-center gap-4  bg-hero-image transition-all transition-[300ms] sm:hidden ">
                        <HeaderLink href="/" content="Home" />
                        <HeaderLink href="/projetos" content="Projetos" />
                        <HeaderLink href="/contact" content="Contatos" />
                    </nav>
                }



            </header>
        </>
    );
}

export default Header;