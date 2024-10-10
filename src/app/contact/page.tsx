import ButtonCTA from "@/components/moleculas/ButtonCTA";
import { MdArrowForward } from "react-icons/md";

function ContactPage() {
    return (
        <>

            <section className="flex flex-col items-center lg:flex-row   lg:items-start justify-around  pt-40 py-20  w-full bg-gray-900 ">

                <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
                    <h2 className="text-6xl font-bold w-[560px] text-emerald-500">Vamos Trabalhar Juntos</h2>
                    <p className="w-[550px] font-medium text-gray-500">
                        Estou sempre à procura de novos desafios e oportunidades de colaboração. Se você tem um projeto em mente, uma ideia inovadora ou simplesmente deseja conversar sobre como podemos criar algo incrível juntos, eu adoraria ouvir de você.
                    </p>

                    <MdArrowForward className="text-7xl font-light text-gray-700 rotate-90 lg:rotate-0" />

                </div>

                <form action="mailto:seu-email@example.com" method="POST" encType="text/plain" className="flex flex-col gap-3">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Nome</label>
                        <input
                            className="w-[500px] h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="text" 
                            name="" 
                            placeholder="Fulano Machado "
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Número do whatsap </label>
                        <input
                            className="w-[500px] h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="text" 
                            name="" 
                            placeholder="(84) 00000-0000"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            className="w-[500px] h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="email" 
                            name="" 
                            placeholder="exemple@gmail.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Assunto</label>
                        <textarea
                            className="w-[500px] rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            name="" 
                            rows={4}
                            required
                        />
                    </div>
                   

                    <button 
                        type="submit"
                        className="w-full bg-emerald-500 py-3 px-4 rounded text-center text-xl font-semibold hover:bg-emerald-800"
                    >
                        Enviar
                    </button>



                </form>

            </section>
        </>
    );
}


export default ContactPage;