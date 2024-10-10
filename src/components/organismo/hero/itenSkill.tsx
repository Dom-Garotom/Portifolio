interface ItenSkillProps {
    content: string;
    icon?: string;
}

function ItenSkill(prop: ItenSkillProps) {
    return (
        <div className={`flex gap-2 w-auto px-2 py-1 rounded-md items-center bg-emerald-900 text-emerald-400 `}>
            {prop.icon != null ? <i className={prop.icon}></i> : ''}
            {prop.content}
        </div>
    )
}

export default ItenSkill;