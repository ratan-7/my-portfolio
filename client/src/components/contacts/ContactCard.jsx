const ContactCard = ({
    contact,
    onView,
    onDelete,
    onMarkRead
}) => {

    return (
        <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-5
            shadow-xl
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            duration-300
            "
        >

            <div className="flex justify-between items-start gap-3">

                <div>

                    <h2
                        className="
                        text-xl
                        font-bold
                        text-white
                        "
                    >
                        {contact.name}
                    </h2>

                    <p
                        className="
                        text-slate-400
                        text-sm
                        mt-1
                        break-all
                        "
                    >
                        {contact.email}
                    </p>

                </div>

                {!contact.isRead && (

                    <span
                        className="
                        bg-red-500
                        text-white
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        "
                    >
                        New
                    </span>

                )}

            </div>

            <div className="mt-4">

                <p
                    className="
                    text-blue-400
                    font-medium
                    "
                >
                    {contact.subject ||
                        "No Subject"}
                </p>

                <p
                    className="
                    text-slate-500
                    text-sm
                    mt-2
                    "
                >
                    {new Date(
                        contact.createdAt
                    ).toLocaleDateString()}
                </p>

            </div>

            <div
                className="
                mt-4
                bg-slate-800
                rounded-xl
                p-3
                "
            >

                <p
                    className="
                    text-slate-300
                    text-sm
                    line-clamp-3
                    "
                >
                    {contact.message}
                </p>

            </div>

            <div
                className="
                grid
                gap-3
                mt-5
                "
                style={{
                    gridTemplateColumns:
                        contact.isRead
                            ? "1fr 1fr"
                            : "1fr 1fr 1fr"
                }}
            >

                <button
                    onClick={() =>
                        onView(contact)
                    }
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-2.5
                    rounded-xl
                    font-medium
                    transition-all
                    "
                >
                    View
                </button>

                {!contact.isRead && (

                    <button
                        onClick={() =>
                            onMarkRead(
                                contact._id
                            )
                        }
                        className="
                        bg-emerald-600
                        hover:bg-emerald-700
                        text-white
                        py-2.5
                        rounded-xl
                        font-medium
                        transition-all
                        "
                    >
                        Read
                    </button>

                )}

                <button
                    onClick={() =>
                        onDelete(
                            contact._id
                        )
                    }
                    className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-2.5
                    rounded-xl
                    font-medium
                    transition-all
                    "
                >
                    Delete
                </button>

            </div>

        </div>
    );
};

export default ContactCard;