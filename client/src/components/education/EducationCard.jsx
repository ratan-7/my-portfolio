const EducationCard = ({
    education,
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
                        {education.degree}
                    </h2>

                    <p
                        className="
                        text-blue-400
                        font-medium
                        mt-1
                        "
                    >
                        {education.school}
                    </p>

                    {education.field && (

                        <p
                            className="
                            text-slate-400
                            text-sm
                            mt-1
                            "
                        >
                            🎓 {education.field}
                        </p>

                    )}

                </div>

                {education.currentlyWorking && (

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
                        education.startDate
                    ).toLocaleDateString()}

                    {" - "}

                    {education.currentlyWorking
                        ? "Present"
                        : new Date(
                            education.endDate
                        ).toLocaleDateString()}

                </p>

            </div>

            {education.grade && (

                <div
                    className="
                    mt-4
                    inline-block
                    bg-slate-800
                    text-blue-400
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    "
                >
                    Grade: {education.grade}
                </div>

            )}

            <p
                className="
                text-slate-300
                mt-4
                line-clamp-3
                "
            >
                {education.description}
            </p>

            <div
                className="
                flex
                flex-wrap
                gap-2
                mt-5
                "
            >

                {education.skills?.map(
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
                        onEdit(
                            education
                        )
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
                            education._id
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

export default EducationCard;