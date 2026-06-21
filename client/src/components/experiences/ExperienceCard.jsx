const ExperienceCard = ({
    experience,
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
            p-6
            shadow-xl
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            duration-300
            "
        >

            <div className="flex justify-between items-start gap-3">

                <div>

                    <h2
                        className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-white
                        "
                    >
                        {experience.title}
                    </h2>

                    <p
                        className="
                        text-blue-400
                        font-medium
                        mt-1
                        "
                    >
                        {experience.company}
                    </p>

                    {experience.location && (

                        <p
                            className="
                            text-slate-400
                            text-sm
                            mt-1
                            "
                        >
                            📍 {experience.location}
                        </p>

                    )}

                </div>

                {experience.currentlyWorking && (

                    <span
                        className="
                        bg-emerald-600
                        text-white
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        whitespace-nowrap
                        "
                    >
                        Current
                    </span>

                )}

            </div>

            <div className="mt-4">

                <p className="text-slate-400 text-sm">

                    {new Date(
                        experience.startDate
                    ).toLocaleDateString()}

                    {" - "}

                    {experience.currentlyWorking
                        ? "Present"
                        : new Date(
                            experience.endDate
                        ).toLocaleDateString()}

                </p>

            </div>

            <p
                className="
                text-slate-300
                mt-4
                line-clamp-3
                "
            >
                {experience.description}
            </p>

            <div
                className="
                flex
                flex-wrap
                gap-2
                mt-5
                "
            >

                {experience.skills?.map(
                    (skill, index) => (

                        <span
                            key={index}
                            className="
                            bg-slate-800
                            text-slate-300
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            "
                        >
                            {skill}
                        </span>

                    )
                )}

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
                        onEdit(experience)
                    }
                    className="
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    py-2.5
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
                            experience._id
                        )
                    }
                    className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-2.5
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

export default ExperienceCard;