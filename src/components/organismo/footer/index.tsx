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
            <footer className="sm:flex flex-row w-full items-center justify-between  p-5 border-t-2 border-gray-800 sm:p-7">

                <div className="flex flex-col sm:flex-row items-center gap-7">
                    <Image src={logo} alt="" width={50} />
                    <p className="text-gray-600">Copyright ©GeanFerreira2024</p>
                </div>

                <div className="flex flex-rol w-full justify-center sm:justify-end mt-4 sm:mt-0 gap-5 text-[24px] text-gray-500 h-8 " >
                    <Link href={'https://github.com/Dom-Garotom'} target="_blank" className=" hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/gean-ferreira-7580a4304/'} target="_blank" className=" hover:text-white">
                        <FaLinkedinIn />
                    </Link>
                    <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=geanoficial14@gmail.com&su=Contato&body=Como%20gostaria%20de%20trabalhar%20comigo?'} target="_blank" className=" hover:text-white">
                        <SiGmail />
                    </Link>
                    <Link href={"https://discordapp.com/users/591655944635678744"}className="text-white"  target="_blank">
                        <BsDiscord />
                    </Link>                  
                </div>
            </footer>
        </>
    )
}

export default Footer;