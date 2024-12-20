import { MdArrowForward } from "react-icons/md";


export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center lg:flex-row   lg:items-start justify-around  pt-40 py-20  w-full border-gray-800 border-t-2 bg-gray-900 ">

                <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left p-3">
                    <h2 className="text-6xl font-bold max-w-[560px] w-ful text-emerald-500">Vamos Trabalhar Juntos</h2>
                    <p className="max-w-[550px] w-full font-medium text-gray-500">
                        Estou sempre à procura de novos desafios e oportunidades de colaboração. Se você tem um projeto em mente, uma ideia inovadora ou simplesmente deseja conversar sobre como podemos criar algo incrível juntos, eu adoraria ouvir de você.
                    </p>

                    <MdArrowForward className="text-7xl font-light text-gray-700 rotate-90 lg:rotate-0" />

                </div>

                <form action="mailto:seu-email@example.com" method="POST" encType="text/plain" className="flex flex-col gap-3 max-w-[700px] w-full p-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Nome</label>
                        <input
                            className="max-w-[700px] w-full h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="text" 
                            name="" 
                            placeholder="Fulano Machado "
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Número do whatsap </label>
                        <input
                            className="max-w-[700px] w-full h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="text" 
                            name="" 
                            placeholder="(84) 00000-0000"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            className="max-w-[700px] w-full h-14 rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
                            type="email" 
                            name="" 
                            placeholder="exemple@gmail.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Assunto</label>
                        <textarea
                            className="max-w-[700px] w-full rounded bg-gray-800 px-3 py-2 border border-transparent focus:outline-none focus:border-blue-500 " 
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
  )
}
