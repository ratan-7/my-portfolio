const ContactViewModal = ({
    contact,
    onClose
}) => {

    if (!contact) return null;

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
                max-w-3xl
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                shadow-2xl
                overflow-hidden
                "
            >

                <div
                    className="
                    flex
                    justify-between
                    items-center
                    p-6
                    border-b
                    border-slate-800
                    "
                >

                    <h2
                        className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        "
                    >
                        Contact Message 📩
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                        text-slate-400
                        hover:text-red-400
                        text-3xl
                        "
                    >
                        ×
                    </button>

                </div>

                <div className="p-6 space-y-6">

                    <div
                        className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-5
                        "
                    >

                        <div
                            className="
                            bg-slate-800
                            rounded-2xl
                            p-4
                            "
                        >

                            <p className="text-slate-400 text-sm">
                                Name
                            </p>

                            <p className="text-white font-semibold mt-1">
                                {contact.name}
                            </p>

                        </div>

                        <div
                            className="
                            bg-slate-800
                            rounded-2xl
                            p-4
                            "
                        >

                            <p className="text-slate-400 text-sm">
                                Email
                            </p>

                            <p className="text-white font-semibold mt-1 break-all">
                                {contact.email}
                            </p>

                        </div>

                        <div
                            className="
                            bg-slate-800
                            rounded-2xl
                            p-4
                            "
                        >

                            <p className="text-slate-400 text-sm">
                                Subject
                            </p>

                            <p className="text-white font-semibold mt-1">
                                {contact.subject ||
                                    "No Subject"}
                            </p>

                        </div>

                        <div
                            className="
                            bg-slate-800
                            rounded-2xl
                            p-4
                            "
                        >

                            <p className="text-slate-400 text-sm">
                                Received
                            </p>

                            <p className="text-white font-semibold mt-1">
                                {new Date(
                                    contact.createdAt
                                ).toLocaleString()}
                            </p>

                        </div>

                    </div>

                    <div>

                        <p
                            className="
                            text-slate-400
                            mb-3
                            "
                        >
                            Message
                        </p>

                        <div
                            className="
                            bg-slate-800
                            text-slate-200
                            rounded-2xl
                            p-5
                            min-h-[180px]
                            whitespace-pre-wrap
                            break-words
                            "
                        >
                            {contact.message}
                        </div>

                    </div>

                    <div className="flex justify-end">

                        <button
                            onClick={onClose}
                            className="
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-6
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

export default ContactViewModal;