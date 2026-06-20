import { useState } from "react";

const EditProjectModal = ({
    project,
    onUpdate,
    onClose
}) => {

    const [formData, setFormData] =
        useState({
            title: project.title,
            description:
                project.description,
            skills:
                project.skills.join(","),
            url: project.url
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdate(
            project._id,
            formData
        );
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">

            <div className="bg-white rounded-2xl p-6 max-w-lg w-full">

                <h2 className="text-2xl font-bold mb-5">
                    Edit Project
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title:
                                    e.target.value
                            })
                        }
                        className="w-full border p-3 rounded-lg"
                    />

                    <textarea
                        value={
                            formData.description
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description:
                                    e.target.value
                            })
                        }
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        value={formData.skills}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                skills:
                                    e.target.value
                            })
                        }
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        value={formData.url}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                url:
                                    e.target.value
                            })
                        }
                        className="w-full border p-3 rounded-lg"
                    />

                    <div className="flex gap-2">

                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            Update
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditProjectModal;