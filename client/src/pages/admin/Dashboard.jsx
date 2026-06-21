import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllProjects,
    getAllSkills,
    getAllExperiences,
    getAllEducations,
    getAllCertificates,
    getAllContacts,
    getAnalytics
} from "../../services/api";

const Dashboard = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        projects: 0,
        skills: 0,
        experiences: 0,
        educations: 0,
        certificates: 0,
        contacts: 0,
        visitors: 0,
        downloads: 0
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchDashboardData();

    }, []);

    const fetchDashboardData = async () => {

        try {

            const [
                projects,
                skills,
                experiences,
                educations,
                certificates,
                contacts,
                analytics
            ] = await Promise.all([
                getAllProjects(),
                getAllSkills(),
                getAllExperiences(),
                getAllEducations(),
                getAllCertificates(),
                getAllContacts(),
                getAnalytics()
            ]);

            setStats({
                projects:
                    projects?.projects?.length ||
                    projects?.length ||
                    0,

                skills:
                    skills?.skills?.length ||
                    skills?.length ||
                    0,

                experiences:
                    experiences?.experiences?.length ||
                    experiences?.length ||
                    0,

                educations:
                    educations?.educations?.length ||
                    educations?.length ||
                    0,

                certificates:
                    certificates?.certificates?.length ||
                    certificates?.length ||
                    0,

                contacts:
                    contacts?.contacts?.length ||
                    contacts?.length ||
                    0,

                visitors:
                    analytics?.totalVisitors ||
                    analytics?.analytics?.totalVisitors ||
                    0,

                downloads:
                    analytics?.resumeDownloads ||
                    analytics?.analytics?.resumeDownloads ||
                    0
            });

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    const cards = [
        {
            title: "Projects",
            value: stats.projects,
            icon: "📁"
        },
        {
            title: "Skills",
            value: stats.skills,
            icon: "⚡"
        },
        {
            title: "Experience",
            value: stats.experiences,
            icon: "💼"
        },
        {
            title: "Education",
            value: stats.educations,
            icon: "🎓"
        },
        {
            title: "Certificates",
            value: stats.certificates,
            icon: "🏆"
        },
        {
            title: "Messages",
            value: stats.contacts,
            icon: "📩"
        },
        {
            title: "Visitors",
            value: stats.visitors,
            icon: "👀"
        },
        {
            title: "Downloads",
            value: stats.downloads,
            icon: "📄"
        }
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white">
                Loading Dashboard...
            </div>
        );
    }

    return (
        <div className="text-white">

            {/* Header */}
            <div className="mb-10">

                <h1 className="text-3xl md:text-5xl font-bold">
                    Dashboard 👋
                </h1>

                <p className="text-slate-400 mt-2">
                    Welcome back. Here's your portfolio overview.
                </p>

            </div>

            {/* Stats Cards */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-4
                gap-6
            ">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="
                            group
                            bg-slate-900
                            border
                            border-slate-800
                            rounded-3xl
                            p-6
                            hover:border-blue-500
                            hover:-translate-y-1
                            transition-all
                            duration-300
                            shadow-xl
                        "
                    >

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-slate-800
                                flex
                                items-center
                                justify-center
                                text-3xl
                                mb-4
                            "
                        >
                            {card.icon}
                        </div>

                        <h3 className="text-slate-400">
                            {card.title}
                        </h3>

                        <h2 className="text-4xl font-bold mt-2">
                            {card.value}
                        </h2>

                    </div>

                ))}

            </div>

            {/* Quick Actions */}
            <div className="mt-10">

                <h2 className="text-2xl font-bold mb-5">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <button
                        onClick={() => navigate("/projects")}
                        className="bg-blue-600 hover:bg-blue-700 p-4 rounded-2xl font-semibold"
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => navigate("/skills")}
                        className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-2xl font-semibold"
                    >
                        Skills
                    </button>

                    <button
                        onClick={() => navigate("/experiences")}
                        className="bg-purple-600 hover:bg-purple-700 p-4 rounded-2xl font-semibold"
                    >
                        Experience
                    </button>

                    <button
                        onClick={() => navigate("/educations")}
                        className="bg-green-600 hover:bg-green-700 p-4 rounded-2xl font-semibold"
                    >
                        Education
                    </button>

                </div>

            </div>

            {/* Summary + Analytics */}
            <div className="
                mt-10
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-6
            ">

                <div className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-6
                ">

                    <h2 className="text-2xl font-bold mb-5">
                        Portfolio Summary
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span>Projects</span>
                            <span>{stats.projects}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Skills</span>
                            <span>{stats.skills}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Experience</span>
                            <span>{stats.experiences}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Education</span>
                            <span>{stats.educations}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Certificates</span>
                            <span>{stats.certificates}</span>
                        </div>

                    </div>

                </div>

                <div className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-6
                ">

                    <h2 className="text-2xl font-bold mb-5">
                        Analytics
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span>Total Visitors</span>
                            <span>{stats.visitors}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Resume Downloads</span>
                            <span>{stats.downloads}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Messages</span>
                            <span>{stats.contacts}</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;