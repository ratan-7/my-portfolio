import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllSkills,
    addSkill,
    updateSkill,
    deleteSkill
} from "../../services/api";

import SkillCard from "../../components/skills/SkillCard";
import AddSkillModal from "../../components/skills/AddSkill";
import EditSkillModal from "../../components/skills/EditSkill";

const Skills = () => {

    const navigate = useNavigate();

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showAddModal, setShowAddModal] =
        useState(false);

    const [showEditModal, setShowEditModal] =
        useState(false);

    const [selectedSkill, setSelectedSkill] =
        useState(null);

    const [formData, setFormData] = useState({
        name: "",
        level: "",
        catagory: "",
        icon: "",
        order: 0
    });

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchSkills();

    }, []);

    const fetchSkills = async () => {

        try {

            setLoading(true);

            const data =
                await getAllSkills();

            setSkills(
                data?.skills || data || []
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    const handleAddSkill =
        async (e) => {

            e.preventDefault();

            try {

                await addSkill(formData);

                setShowAddModal(false);

                setFormData({
                    name: "",
                    level: "",
                    catagory: "",
                    icon: "",
                    order: 0
                });

                fetchSkills();

            } catch (error) {

                console.log(error);

            }
        };

    const handleUpdateSkill =
        async (
            id,
            updatedData
        ) => {

            try {

                await updateSkill(
                    id,
                    updatedData
                );

                setShowEditModal(false);

                setSelectedSkill(null);

                fetchSkills();

            } catch (error) {

                console.log(error);

            }
        };

    const handleDeleteSkill =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this skill?"
                    );

                if (!confirmDelete)
                    return;

                await deleteSkill(id);

                fetchSkills();

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
                Loading Skills...
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
                        Skills ⚡
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Manage your skills and expertise
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
                    + Add Skill
                </button>

            </div>

            {/* Empty State */}

            {skills.length === 0 && (

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
                        No Skills Found
                    </h2>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Add your first skill
                    </p>

                </div>

            )}

            {/* Skills Grid */}

            {skills.length > 0 && (

                <div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    "
                >

                    {skills.map((skill) => (

                        <SkillCard
                            key={skill._id}
                            skill={skill}
                            onEdit={() => {

                                setSelectedSkill(
                                    skill
                                );

                                setShowEditModal(
                                    true
                                );

                            }}
                            onDelete={
                                handleDeleteSkill
                            }
                        />

                    ))}

                </div>

            )}

            {/* Add Modal */}

            {showAddModal && (

                <AddSkillModal
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={
                        handleAddSkill
                    }
                    onClose={() =>
                        setShowAddModal(
                            false
                        )
                    }
                />

            )}

            {/* Edit Modal */}

            {showEditModal &&
                selectedSkill && (

                    <EditSkillModal
                        skill={
                            selectedSkill
                        }
                        onUpdate={
                            handleUpdateSkill
                        }
                        onClose={() => {

                            setShowEditModal(
                                false
                            );

                            setSelectedSkill(
                                null
                            );

                        }}
                    />

                )}

        </div>
    );
};

export default Skills;