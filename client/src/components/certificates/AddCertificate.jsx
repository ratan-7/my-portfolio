const AddCertificateModal = ({
    formData,
    setFormData,
    setImage,
    handleSubmit,
    onClose
}) => {

    return (
        <div
            className="
            fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm
            flex items-center
            justify-center
            p-4
            "
        >

            <div
                className="
                w-full
                max-w-xl
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
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
                        Add Certificate 🏆
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
                        placeholder="Certificate Title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value
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
                        placeholder="Issuer"
                        value={formData.issuer}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                issuer: e.target.value
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
                        type="date"
                        value={formData.issueDate}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                issueDate:
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
                        type="text"
                        placeholder="Certificate URL"
                        value={
                            formData.certificateUrl
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                certificateUrl:
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

                    <div>

                        <label
                            className="
                            block
                            text-slate-300
                            mb-2
                            "
                        >
                            Certificate Image
                        </label>

                        <input
                            type="file"
                            onChange={(e) =>
                                setImage(
                                    e.target.files[0]
                                )
                            }
                            className="
                            w-full
                            text-slate-300
                            "
                        />

                    </div>

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
                            Save Certificate
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

export default AddCertificateModal;