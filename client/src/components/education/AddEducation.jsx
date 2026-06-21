const AddEducationModal = ({
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
                max-w-2xl
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
                        Add Education 🎓
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
                        placeholder="School / University"
                        value={formData.school}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                school: e.target.value
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
                        placeholder="Degree"
                        value={formData.degree}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                degree: e.target.value
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
                        placeholder="Field of Study"
                        value={formData.field}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                field: e.target.value
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

                    <div className="grid md:grid-cols-2 gap-4">

                        <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    startDate:
                                        e.target.value
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
                            "
                        />

                        <input
                            type="date"
                            value={formData.endDate}
                            disabled={
                                formData.currentlyWorking
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    endDate:
                                        e.target.value
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
                            disabled:opacity-50
                            "
                        />

                    </div>

                    <label
                        className="
                        flex
                        items-center
                        gap-3
                        text-slate-300
                        "
                    >

                        <input
                            type="checkbox"
                            checked={
                                formData.currentlyWorking
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    currentlyWorking:
                                        e.target.checked
                                })
                            }
                        />

                        Currently Studying Here

                    </label>

                    <input
                        type="text"
                        placeholder="Grade / CGPA"
                        value={formData.grade}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                grade:
                                    e.target.value
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

                    <textarea
                        rows={4}
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description:
                                    e.target.value
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
                        placeholder="C++, React, DSA"
                        value={formData.skills}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                skills:
                                    e.target.value
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
                            "
                        >
                            Save Education
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

export default AddEducationModal;