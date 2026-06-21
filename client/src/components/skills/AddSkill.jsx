const AddSkillModal = ({
    formData,
    setFormData,
    handleSubmit,
    onClose
}) => {

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
                w-full
                max-w-lg
                p-6
                shadow-2xl
                "
            >

                <div className="flex justify-between items-center mb-6">

                    <h2
                        className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        "
                    >
                        Add Skill ⚡
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                        text-slate-400
                        hover:text-white
                        text-2xl
                        "
                    >
                        ✕
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        placeholder="Skill Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                        className="
                        w-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-white
                        p-3
                        rounded-xl
                        outline-none
                        focus:border-blue-500
                        "
                    />

                    <input
                        type="number"
                        placeholder="Level (0-100)"
                        value={formData.level}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                level: e.target.value
                            })
                        }
                        className="
                        w-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-white
                        p-3
                        rounded-xl
                        outline-none
                        focus:border-blue-500
                        "
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={formData.catagory}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                catagory: e.target.value
                            })
                        }
                        className="
                        w-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-white
                        p-3
                        rounded-xl
                        outline-none
                        focus:border-blue-500
                        "
                    />

                    <input
                        type="text"
                        placeholder="Icon URL"
                        value={formData.icon}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                icon: e.target.value
                            })
                        }
                        className="
                        w-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-white
                        p-3
                        rounded-xl
                        outline-none
                        focus:border-blue-500
                        "
                    />

                    <input
                        type="number"
                        placeholder="Display Order"
                        value={formData.order}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                order: e.target.value
                            })
                        }
                        className="
                        w-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-white
                        p-3
                        rounded-xl
                        outline-none
                        focus:border-blue-500
                        "
                    />

                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                        pt-2
                        "
                    >

                        <button
                            type="submit"
                            className="
                            flex-1
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            py-3
                            rounded-xl
                            font-semibold
                            transition-all
                            "
                        >
                            Save Skill
                        </button>

                        <button
                            type="button"
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
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddSkillModal;