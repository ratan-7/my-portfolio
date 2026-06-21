import { useState } from "react";
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [open, setOpen] =
        useState(false);

    const links = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "🏠"
        },
        {
            name: "Projects",
            path: "/projects",
            icon: "📁"
        },
        {
            name: "Skills",
            path: "/skills",
            icon: "⚡"
        },
        {
            name: "Experience",
            path: "/experiences",
            icon: "💼"
        },
        {
            name: "Education",
            path: "/educations",
            icon: "🎓"
        },
        {
            name: "Certificates",
            path: "/certificates",
            icon: "🏆"
        },
        {
            name: "Contacts",
            path: "/contacts",
            icon: "📩"
        },
        {
            name: "Settings",
            path: "/settings",
            icon: "⚙️"
        }
    ];

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (
        <>
            {/* Mobile Button */}

            <button
                onClick={() =>
                    setOpen(true)
                }
                className="
                md:hidden
                fixed
                top-4
                left-4
                z-50
                bg-slate-800
                text-white
                p-3
                rounded-xl
                shadow-lg
                "
            >
                ☰
            </button>

            {/* Mobile Overlay */}

            {open && (

                <div
                    onClick={() =>
                        setOpen(false)
                    }
                    className="
                    md:hidden
                    fixed
                    inset-0
                    bg-black/50
                    z-40
                    "
                />

            )}

            {/* Sidebar */}

            <aside
                className={`
                fixed
                md:static
                top-0
                left-0
                z-50
                h-screen
                w-72
                bg-slate-900
                border-r
                border-slate-800
                p-6
                flex
                flex-col
                transform
                transition-transform
                duration-300

                ${open
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }
                `}
            >

                {/* Mobile Close */}

                <div className="md:hidden flex justify-end mb-4">

                    <button
                        onClick={() =>
                            setOpen(false)
                        }
                        className="
                        text-white
                        text-2xl
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* Logo */}

                <h1
                    className="
                    text-3xl
                    font-bold
                    mb-10

                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400

                    text-transparent
                    bg-clip-text
                    "
                >
                    Portfolio CMS
                </h1>

                {/* Links */}

                <nav className="flex flex-col gap-3">

                    {links.map((link) => (

                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() =>
                                setOpen(false)
                            }
                            className={`
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            transition-all

                            ${location.pathname ===
                                    link.path
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-slate-300 hover:bg-slate-800"
                                }
                            `}
                        >

                            <span>
                                {link.icon}
                            </span>

                            <span>
                                {link.name}
                            </span>

                        </Link>

                    ))}

                </nav>

                {/* Footer */}

                <div className="mt-auto">

                    <button
                        onClick={
                            handleLogout
                        }
                        className="
                        w-full
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition-all
                        "
                    >
                        Logout
                    </button>

                </div>

            </aside>
        </>
    );
};

export default Sidebar;