import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllExperiences,
    addExperience,
    updateExperience,
    deleteExperience
} from "../../services/api";

import ExperienceCard from "../../components/experiences/ExperienceCard";
import AddExperienceModal from "../../components/experiences/AddExperience";
import EditExperienceModal from "../../components/experiences/EditExperience";

const Experience = () => {

    const navigate = useNavigate();

    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showAddModal, setShowAddModal] =
        useState(false);

    const [showEditModal, setShowEditModal] =
        useState(false);

    const [selectedExperience, setSelectedExperience] =
        useState(null);

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: true,
        description: "",
        skills: ""
    });

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchExperiences();

    }, []);

    const fetchExperiences = async () => {

        try {

            setLoading(true);

            const data =
                await getAllExperiences();

            setExperiences(
                data?.experiences ||
                data ||
                []
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    const handleAddExperience =
        async (e) => {

            e.preventDefault();

            try {

                const payload = {
                    ...formData,
                    skills: formData.skills
                        .split(",")
                        .map(skill =>
                            skill.trim()
                        )
                        .filter(Boolean)
                };

                await addExperience(
                    payload
                );

                setShowAddModal(false);

                setFormData({
                    title: "",
                    company: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: true,
                    description: "",
                    skills: ""
                });

                fetchExperiences();

            } catch (error) {

                console.log(error);

            }
        };

    const handleUpdateExperience =
        async (
            id,
            updatedData
        ) => {

            try {

                const payload = {
                    ...updatedData,
                    skills:
                        typeof updatedData.skills ===
                            "string"
                            ? updatedData.skills
                                .split(",")
                                .map(skill =>
                                    skill.trim()
                                )
                                .filter(Boolean)
                            : updatedData.skills
                };

                await updateExperience(
                    id,
                    payload
                );

                setShowEditModal(false);
                setSelectedExperience(null);

                fetchExperiences();

            } catch (error) {

                console.log(error);

            }
        };

    const handleDeleteExperience =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this experience?"
                    );

                if (!confirmDelete)
                    return;

                await deleteExperience(id);

                fetchExperiences();

            } catch (error) {

                console.log(error);

            }
        };

    if (loading) {

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
                Loading Experience...
            </div>
        );

    }

    return (
        <div className="text-white">

            {/* Header */}

            <div
                className="
                flex
                flex-col
                md:flex-row
                justify-between
                md:items-center
                gap-5
                mb-10
                "
            >

                <div>

                    <h1
                        className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        "
                    >
                        Experience 💼
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Manage your work experience
                    </p>

                </div>

                <button
                    onClick={() =>
                        setShowAddModal(true)
                    }
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    px-6
                    py-3
                    rounded-2xl
                    font-semibold
                    shadow-lg
                    transition-all
                    hover:scale-105
                    "
                >
                    + Add Experience
                </button>

            </div>

            {/* Empty State */}

            {experiences.length === 0 && (

                <div
                    className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-12
                    text-center
                    "
                >

                    <h2
                        className="
                        text-2xl
                        font-bold
                        "
                    >
                        No Experience Found
                    </h2>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Add your first experience
                    </p>

                </div>

            )}

            {/* Experience Grid */}

            {experiences.length > 0 && (

                <div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    "
                >

                    {experiences.map(
                        (experience) => (

                            <ExperienceCard
                                key={
                                    experience._id
                                }
                                experience={
                                    experience
                                }
                                onEdit={() => {

                                    setSelectedExperience(
                                        experience
                                    );

                                    setShowEditModal(
                                        true
                                    );

                                }}
                                onDelete={
                                    handleDeleteExperience
                                }
                            />

                        )
                    )}

                </div>

            )}

            {showAddModal && (

                <AddExperienceModal
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={
                        handleAddExperience
                    }
                    onClose={() =>
                        setShowAddModal(
                            false
                        )
                    }
                />

            )}

            {showEditModal &&
                selectedExperience && (

                    <EditExperienceModal
                        experience={
                            selectedExperience
                        }
                        onUpdate={
                            handleUpdateExperience
                        }
                        onClose={() => {

                            setShowEditModal(
                                false
                            );

                            setSelectedExperience(
                                null
                            );

                        }}
                    />

                )}

        </div>
    );
};

export default Experience;