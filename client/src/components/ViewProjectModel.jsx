const ViewProjectModal = ({
    project,
    onClose
}) => {

    if (!project) return null;

    return (
        <div
            className="
            fixed
            inset-0
            z-50
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
            "
        >

            <div
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                w-full
                max-w-3xl
                shadow-2xl
                "
            >

                {/* Header */}

                <div className="relative">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                        w-full
                        h-64
                        md:h-80
                        object-cover
                        "
                    />

                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950
                        via-slate-950/40
                        to-transparent
                        "
                    />

                    <button
                        onClick={onClose}
                        className="
                        absolute
                        top-4
                        right-4
                        w-10
                        h-10
                        rounded-full
                        bg-black/50
                        text-white
                        hover:bg-black/70
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* Content */}

                <div className="p-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <h2
                            className="
                            text-2xl
                            md:text-4xl
                            font-bold
                            text-white
                            "
                        >
                            {project.title}
                        </h2>

                        <span
                            className="
                            bg-blue-600
                            text-white
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                            "
                        >
                            Project
                        </span>

                    </div>

                    <p
                        className="
                        text-slate-400
                        mt-5
                        leading-relaxed
                        "
                    >
                        {project.description}
                    </p>

                    {/* Skills */}

                    <div
                        className="
                        flex
                        flex-wrap
                        gap-2
                        mt-6
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
                                    text-sm
                                    "
                                >
                                    {skill}
                                </span>

                            )
                        )}

                    </div>

                    {/* Footer Buttons */}

                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                        mt-8
                        "
                    >

                        {project.url && (

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                flex-1
                                text-center
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                py-3
                                rounded-xl
                                font-semibold
                                transition-all
                                "
                            >
                                🚀 Live Demo
                            </a>

                        )}

                        <button
                            onClick={onClose}
                            className="
                            flex-1
                            bg-slate-700
                            hover:bg-slate-600
                            text-white
                            py-3
                            rounded-xl
                            font-semibold
                            transition-all
                            "
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ViewProjectModal;