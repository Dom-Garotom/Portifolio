interface ItenSkillProps {
    content: string;
    icon?: string;
    variant: string
}

function ItenSkill(prop: ItenSkillProps) {
    return (
        <div className={`flex gap-2 w-auto px-2 py-1 rounded-md items-center ${prop.variant}`}>
            {prop.icon != null ? <i className={prop.icon}></i> : ''}
            {prop.content}
        </div>
    )
}

export default ItenSkill;