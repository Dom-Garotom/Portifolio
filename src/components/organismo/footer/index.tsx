import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import logo from "../../../../public//images/logo.svg"

function Footer() {
    return (
        <>
            <footer className="flex flex-row w-full fixed  absolute z-10 items-center justify-between py-7 px-10 bg-gray-900 border-t-2 border-gray-800 ">

                <div className="flex flex-row items-center gap-7">
                    <Image src={logo} alt="" width={50} />
                    <p className="text-gray-600">Copyright © Gean Ferreira</p>
                </div>

                <div className="flex flex-rol gap-5 text-[24px] text-gray-500 h-8 " >
                    <Link href={'https://github.com/Dom-Garotom'} target="_blank" className=" hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/gean-ferreira-7580a4304/'} target="_blank" className=" hover:text-white">
                        <FaLinkedinIn />
                    </Link>
                    <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=geanoficial14@gmail.com&su=Contato&body=Como%20gostaria%20de%20trabalhar%20comigo?'} target="_blank" className=" hover:text-white">
                        <SiGmail />
                    </Link>
                    <Link href={'https://discord.com/channels/@me'} className="text-white" title="gean9770"  target="_blank">
                        <BsDiscord />
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;