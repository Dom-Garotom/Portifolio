interface CardServiceProp {
    title: string,
    content: string,
}

function CardService(prop: CardServiceProp) {
    return (

        <div className="flex flex-col w-[40rem] gap-4 border rounded-lg py-10 px-10 border-gray-500 ">
            <h2 className="text-3xl font-medium ">{prop.title}</h2>
            <p className="max-w-[35rem] font-medium text-gray-500">{prop.content}</p>
        </div>

    )
}

export default CardService;