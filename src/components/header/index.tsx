import Image from "next/image";
import HeaderLink from "./headerLink";
import img from '../../../public/images/logo.svg'

function Header() {
    return (
        <>
            <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center mb-10" >
                <div className="flex justify-between w-full  items-center  container  px-5 lg:p-0">

                    <div>
                        <Image
                            alt=""
                            src={img}
                            width={50}
                            height={50}
                        />
                    </div>

                    <nav className="flex  gap-5 sm:gap-10">
                        <HeaderLink href="/" content="Home" />
                        <HeaderLink href="/projetos" content="Projetos" />
                        <HeaderLink href="/contact" content="Contatos" />
                    </nav>
                </div>

            </header>
        </>
    );
}

export default Header;