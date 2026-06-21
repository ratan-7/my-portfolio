import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getSettings,
    updateSettings
} from "../../services/api";

const Settings = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [fetching, setFetching] =
        useState(true);

    const [formData, setFormData] =
        useState({
            resumeUrl: "",
            github: "",
            linkedin: "",
            leetcode: "",
            email: "",
            phone: ""
        });

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchSettings();

    }, []);

    const fetchSettings = async () => {

        try {

            setFetching(true);

            const data =
                await getSettings();

            const settings =
                data?.settings || data || {};

            setFormData({
                resumeUrl:
                    settings.resumeUrl || "",
                github:
                    settings.github || "",
                linkedin:
                    settings.linkedin || "",
                leetcode:
                    settings.leetcode || "",
                email:
                    settings.email || "",
                phone:
                    settings.phone || ""
            });

        } catch (error) {

            console.log(error);

        } finally {

            setFetching(false);

        }
    };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);

                const res =
                    await updateSettings(
                        formData
                    );

                alert(
                    res?.message ||
                    "Settings Updated Successfully"
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

    if (fetching) {

        return (
            <div
                className="
                min-h-screen
                flex
                items-center
                justify-center
                text-white
                "
            >
                Loading Settings...
            </div>
        );
    }

    return (
        <div className="text-white">

            <div className="mb-10">

                <h1
                    className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    "
                >
                    Settings ⚙️
                </h1>

                <p
                    className="
                    text-slate-400
                    mt-2
                    "
                >
                    Manage your portfolio information
                </p>

            </div>

            <div
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
                md:p-8
                shadow-xl
                "
            >

                <form
                    onSubmit={handleSubmit}
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                    "
                >

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            Resume URL
                        </label>

                        <input
                            type="text"
                            value={
                                formData.resumeUrl
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    resumeUrl:
                                        e.target.value
                                })
                            }
                            placeholder="Resume Link"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            GitHub URL
                        </label>

                        <input
                            type="text"
                            value={
                                formData.github
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    github:
                                        e.target.value
                                })
                            }
                            placeholder="GitHub Profile"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            LinkedIn URL
                        </label>

                        <input
                            type="text"
                            value={
                                formData.linkedin
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    linkedin:
                                        e.target.value
                                })
                            }
                            placeholder="LinkedIn Profile"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            LeetCode URL
                        </label>

                        <input
                            type="text"
                            value={
                                formData.leetcode
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    leetcode:
                                        e.target.value
                                })
                            }
                            placeholder="LeetCode Profile"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            value={
                                formData.email
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email:
                                        e.target.value
                                })
                            }
                            placeholder="Email Address"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                            block
                            mb-2
                            text-slate-300
                            "
                        >
                            Phone Number
                        </label>

                        <input
                            type="text"
                            value={
                                formData.phone
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone:
                                        e.target.value
                                })
                            }
                            placeholder="Phone Number"
                            className="
                            w-full
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                            "
                        />

                    </div>

                    <div className="md:col-span-2">

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            py-4
                            rounded-2xl
                            font-semibold
                            text-lg
                            transition-all
                            hover:scale-[1.01]
                            disabled:opacity-50
                            "
                        >
                            {loading
                                ? "Saving..."
                                : "Save Settings"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default Settings;