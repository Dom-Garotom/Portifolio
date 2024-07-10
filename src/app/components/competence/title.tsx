interface TitleDefaultProps{
    title:string,
    subTitle:string
}

function TitleDefault(prop:TitleDefaultProps) {
    return (
        <div className="flex items-start flex-col gap-5">
            <span className="text-emerald-500 tracking-wider text-lg ">. . /{prop.subTitle}</span>
            <h2 className="text-4xl font-medium">{prop.title}</h2>
        </div>
    )
}

export default TitleDefault;