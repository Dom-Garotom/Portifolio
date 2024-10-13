interface CardServiceProp {
    title: string;
    content: string;
}

function CardService({ title, content }: CardServiceProp) {
    return (
        <div className="flex flex-col w-full max-w-xl gap-3 cursor-pointer  border rounded-lg py-10 px-5 bg-transparent shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-slate-950 border-gray-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100-800">{title}</h2>
            <p className="text-xs sm:text-base md:text-lg font-medium text-gray-500 hover:text-emerald-600">{content}</p>
        </div>
    );
}

export default CardService;
