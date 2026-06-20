import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const stats = [
        {
            title: "Projects",
            count: 12,
            icon: "📁"
        },
        {
            title: "Skills",
            count: 18,
            icon: "🛠️"
        },
        {
            title: "Certificates",
            count: 8,
            icon: "🏆"
        },
        {
            title: "Messages",
            count: 24,
            icon: "📨"
        },
        {
            title: "Visitors",
            count: 1250,
            icon: "👀"
        },
        {
            title: "Resume Downloads",
            count: 67,
            icon: "📄"
        }
    ];


    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
        }

    }, []);

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="text-slate-500 mt-2">
                    Welcome back, Admin 👋
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="flex justify-between items-center">

                            <div>
                                <h2 className="text-slate-500 text-sm">
                                    {item.title}
                                </h2>

                                <p className="text-4xl font-bold text-slate-800 mt-2">
                                    {item.count}
                                </p>
                            </div>

                            <div className="text-5xl">
                                {item.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Recent Messages
                    </h2>

                    <div className="space-y-4">

                        <div className="border-b pb-3">
                            <h3 className="font-medium">
                                John Doe
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Interested in your MERN project...
                            </p>
                        </div>

                        <div className="border-b pb-3">
                            <h3 className="font-medium">
                                Alex
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Can we collaborate?
                            </p>
                        </div>

                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-2 gap-4">

                        <button className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                            Add Project
                        </button>

                        <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
                            Add Skill
                        </button>

                        <button className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700">
                            Add Certificate
                        </button>

                        <button className="bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700">
                            Settings
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;