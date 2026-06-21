const CertificateCard = ({
    certificate,
    onEdit,
    onDelete
}) => {

    return (
        <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            duration-300
            "
        >

            <div className="relative">

                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                    w-full
                    h-52
                    object-cover
                    "
                />

                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    to-transparent
                    "
                />

            </div>

            <div className="p-5">

                <h2
                    className="
                    text-xl
                    font-bold
                    text-white
                    line-clamp-2
                    "
                >
                    {certificate.title}
                </h2>

                <p
                    className="
                    text-blue-400
                    mt-2
                    font-medium
                    "
                >
                    {certificate.issuer}
                </p>

                <p
                    className="
                    text-slate-400
                    text-sm
                    mt-2
                    "
                >
                    📅 {certificate.issueDate
                        ? new Date(
                            certificate.issueDate
                        ).toLocaleDateString()
                        : "No Date"}
                </p>

                {certificate.certificateUrl && (

                    <a
                        href={
                            certificate.certificateUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                        inline-block
                        mt-4
                        text-blue-400
                        hover:text-blue-300
                        font-medium
                        "
                    >
                        🔗 View Certificate
                    </a>

                )}

                <div
                    className="
                    grid
                    grid-cols-2
                    gap-3
                    mt-6
                    "
                >

                    <button
                        onClick={() =>
                            onEdit(
                                certificate
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
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            onDelete(
                                certificate._id
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

        </div>
    );
};

export default CertificateCard;