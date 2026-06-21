import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllEducations,
    addEducation,
    updateEducation,
    deleteEducation
} from "../../services/api";

import EducationCard from "../../components/education/EducationCard";
import AddEducationModal from "../../components/education/AddEducation";
import EditEducationModal from "../../components/education/EditEducation";

const Education = () => {

    const navigate = useNavigate();

    const [educations, setEducations] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [showAddModal, setShowAddModal] =
        useState(false);

    const [showEditModal, setShowEditModal] =
        useState(false);

    const [selectedEducation, setSelectedEducation] =
        useState(null);

    const [formData, setFormData] =
        useState({
            school: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            currentlyWorking: true,
            grade: "",
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

        fetchEducations();

    }, []);

    const fetchEducations = async () => {

        try {

            setLoading(true);

            const data =
                await getAllEducations();

            setEducations(
                data?.educations ||
                data ||
                []
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    const handleAddEducation =
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

                await addEducation(
                    payload
                );

                setShowAddModal(false);

                setFormData({
                    school: "",
                    degree: "",
                    field: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: true,
                    grade: "",
                    description: "",
                    skills: ""
                });

                fetchEducations();

            } catch (error) {

                console.log(error);

            }
        };

    const handleUpdateEducation =
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

                await updateEducation(
                    id,
                    payload
                );

                setShowEditModal(false);
                setSelectedEducation(null);

                fetchEducations();

            } catch (error) {

                console.log(error);

            }
        };

    const handleDeleteEducation =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this education record?"
                    );

                if (!confirmDelete)
                    return;

                await deleteEducation(id);

                fetchEducations();

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
                Loading Education...
            </div>
        );

    }

    return (
        <div className="text-white">

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
                        Education 🎓
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Manage your education details
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
                    + Add Education
                </button>

            </div>

            {educations.length === 0 && (

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
                        No Education Found
                    </h2>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Add your first education
                    </p>

                </div>

            )}

            {educations.length > 0 && (

                <div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    "
                >

                    {educations.map(
                        (education) => (

                            <EducationCard
                                key={
                                    education._id
                                }
                                education={
                                    education
                                }
                                onEdit={() => {

                                    setSelectedEducation(
                                        education
                                    );

                                    setShowEditModal(
                                        true
                                    );

                                }}
                                onDelete={
                                    handleDeleteEducation
                                }
                            />

                        )
                    )}

                </div>

            )}

            {showAddModal && (

                <AddEducationModal
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={
                        handleAddEducation
                    }
                    onClose={() =>
                        setShowAddModal(false)
                    }
                />

            )}

            {showEditModal &&
                selectedEducation && (

                    <EditEducationModal
                        education={
                            selectedEducation
                        }
                        onUpdate={
                            handleUpdateEducation
                        }
                        onClose={() => {

                            setShowEditModal(
                                false
                            );

                            setSelectedEducation(
                                null
                            );

                        }}
                    />

                )}

        </div>
    );
};

export default Education;