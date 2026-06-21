const SkillCard = ({
    skill,
    onEdit,
    onDelete
}) => {

    return (
        <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-5
            shadow-xl
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            duration-300
            "
        >

            <div className="flex items-center gap-4">

                <div
                    className="
                    w-16
                    h-16
                    bg-slate-800
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    "
                >

                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="
                        w-10
                        h-10
                        object-contain
                        "
                    />

                </div>

                <div className="flex-1">

                    <h2
                        className="
                        text-lg
                        md:text-xl
                        font-bold
                        text-white
                        "
                    >
                        {skill.name}
                    </h2>

                    <p
                        className="
                        text-slate-400
                        text-sm
                        "
                    >
                        {skill.catagory}
                    </p>

                </div>

            </div>

            <div className="mt-5">

                <div
                    className="
                    flex
                    justify-between
                    mb-2
                    "
                >

                    <span
                        className="
                        text-slate-400
                        text-sm
                        "
                    >
                        Skill Level
                    </span>

                    <span
                        className="
                        text-blue-400
                        font-bold
                        "
                    >
                        {skill.level}%
                    </span>

                </div>

                <div
                    className="
                    w-full
                    h-3
                    bg-slate-800
                    rounded-full
                    overflow-hidden
                    "
                >

                    <div
                        className="
                        h-full
                        bg-gradient-to-r
                        from-blue-500
                        to-cyan-400
                        rounded-full
                        transition-all
                        duration-500
                        "
                        style={{
                            width:
                                `${skill.level}%`
                        }}
                    />

                </div>

            </div>

            <div
                className="
                grid
                grid-cols-2
                gap-3
                mt-6
                "
            >

                <button
                    onClick={() =>
                        onEdit(skill)
                    }
                    className="
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    py-2
                    rounded-xl
                    font-medium
                    transition-all
                    "
                >
                    Edit
                </button>

                <button
                    onClick={() =>
                        onDelete(
                            skill._id
                        )
                    }
                    className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-2
                    rounded-xl
                    font-medium
                    transition-all
                    "
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default SkillCard;