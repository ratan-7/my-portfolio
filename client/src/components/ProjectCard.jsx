const ProjectCard = ({
    project,
    onView,
    onEdit,
    onDelete
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {project.title}
                </h2>

                <p className="text-gray-500 mt-2 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">

                    {project.skills?.map(
                        (skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        )
                    )}

                </div>

                <div className="flex gap-2 mt-5">

                    <button
                        onClick={() => onView(project)}
                        className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                    >
                        View
                    </button>

                    <button
                        onClick={() => onEdit(project)}
                        className="bg-green-500 text-white px-3 py-2 rounded-lg"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(project._id)}
                        className="bg-red-500 text-white px-3 py-2 rounded-lg"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProjectCard;