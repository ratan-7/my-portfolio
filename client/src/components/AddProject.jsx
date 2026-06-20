const AddProjectModal = ({
    formData,
    setFormData,
    setImage,
    handleSubmit,
    onClose
}) => {

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">

            <div className="bg-white rounded-2xl w-full max-w-lg p-6">

                <h2 className="text-2xl font-bold mb-5">
                    Add Project
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value
                            })
                        }
                    />

                    <textarea
                        placeholder="Description"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description:
                                    e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="React,Node,MongoDB"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                skills:
                                    e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Project URL"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                url: e.target.value
                            })
                        }
                    />

                    <input
                        type="file"
                        onChange={(e) =>
                            setImage(
                                e.target.files[0]
                            )
                        }
                    />

                    <div className="flex gap-2">

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Save
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

export default AddProjectModal;