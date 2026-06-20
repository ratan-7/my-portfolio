const ViewProjectModal = ({
    project,
    onClose
}) => {

    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">

            <div className="bg-white rounded-2xl max-w-xl w-full p-6">

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-lg"
                />

                <h2 className="text-2xl font-bold mt-4">
                    {project.title}
                </h2>

                <p className="mt-3 text-gray-600">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                    {project.skills?.map(
                        (skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        )
                    )}

                </div>

                <a
                    href={project.url}
                    target="_blank"
                    className="inline-block mt-5 text-blue-600"
                >
                    Live Demo
                </a>

                <button
                    onClick={onClose}
                    className="w-full mt-5 bg-gray-600 text-white py-2 rounded-lg"
                >
                    Close
                </button>

            </div>

        </div>
    );
};

export default ViewProjectModal;