const ProjectCard = ({
    project,
    onView,
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
            overflow-hidden
            shadow-xl
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            duration-300
            "
        >

            <div className="relative">

                <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-48
                    md:h-56
                    object-cover
                    "
                />

                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    to-transparent
                    "
                />
            </div>

            <div className="p-5">

                <div className="flex justify-between items-start gap-3">

                    <h2
                        className="
                        text-white
                        text-lg
                        md:text-xl
                        font-bold
                        line-clamp-2
                        "
                    >
                        {project.title}
                    </h2>

                    <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-blue-600
                        text-white
                        whitespace-nowrap
                        "
                    >
                        Project
                    </span>

                </div>

                <p
                    className="
                    text-slate-400
                    mt-3
                    text-sm
                    line-clamp-3
                    "
                >
                    {project.description}
                </p>

                <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    mt-4
                    "
                >

                    {project.skills?.map(
                        (skill, index) => (

                            <span
                                key={index}
                                className="
                                px-3
                                py-1
                                rounded-full
                                bg-slate-800
                                text-slate-300
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
                    grid-cols-3
                    gap-2
                    mt-6
                    "
                >

                    <button
                        onClick={() =>
                            onView(project)
                        }
                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-2
                        rounded-xl
                        text-sm
                        font-medium
                        transition-all
                        "
                    >
                        View
                    </button>

                    <button
                        onClick={() =>
                            onEdit(project)
                        }
                        className="
                        bg-emerald-600
                        hover:bg-emerald-700
                        text-white
                        py-2
                        rounded-xl
                        text-sm
                        font-medium
                        transition-all
                        "
                    >
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            onDelete(
                                project._id
                            )
                        }
                        className="
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        py-2
                        rounded-xl
                        text-sm
                        font-medium
                        transition-all
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProjectCard;