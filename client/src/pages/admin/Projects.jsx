import { useEffect, useState } from "react";

import {
    getAllProjects,
    addProject,
    updateProject,
    deleteProject
} from "../../services/api";

import ProjectCard from "../../components/ProjectCard"
import AddProjectModal from "../../components/AddProject";
import EditProjectModal from "../../components/EditProject";
import ViewProjectModal from "../../components/ViewProjectModel";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    const [showAddModal, setShowAddModal] =
        useState(false);

    const [showViewModal, setShowViewModal] =
        useState(false);

    const [showEditModal, setShowEditModal] =
        useState(false);

    const [selectedProject, setSelectedProject] =
        useState(null);

    const [image, setImage] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        skills: "",
        url: ""
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {

        try {

            const data =
                await getAllProjects();

            setProjects(data.projects);

        } catch (error) {
            console.log(error);
        }
    };

    const handleAddProject =
        async (e) => {

            e.preventDefault();

            try {

                const data =
                    new FormData();

                data.append(
                    "title",
                    formData.title
                );

                data.append(
                    "description",
                    formData.description
                );

                data.append(
                    "skills",
                    formData.skills
                );

                data.append(
                    "url",
                    formData.url
                );

                if (image) {
                    data.append(
                        "image",
                        image
                    );
                }

                await addProject(data);

                setShowAddModal(false);

                setFormData({
                    title: "",
                    description: "",
                    skills: "",
                    url: ""
                });

                fetchProjects();

            } catch (error) {
                console.log(error);
            }
        };

    const handleDelete =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this project?"
                    );

                if (!confirmDelete)
                    return;

                await deleteProject(id);

                fetchProjects();

            } catch (error) {
                console.log(error);
            }
        };

    const handleUpdate =
        async (id, updatedData) => {

            try {

                await updateProject(
                    id,
                    updatedData
                );

                setShowEditModal(false);

                fetchProjects();

            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Projects
                    </h1>

                    <p className="text-gray-500">
                        Manage all your projects
                    </p>

                </div>

                <button
                    onClick={() =>
                        setShowAddModal(
                            true
                        )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
                >
                    + Add Project
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {projects?.map(
                    (project) => (

                        <ProjectCard
                            key={
                                project._id
                            }
                            project={
                                project
                            }
                            onView={() => {

                                setSelectedProject(
                                    project
                                );

                                setShowViewModal(
                                    true
                                );
                            }}
                            onEdit={() => {

                                setSelectedProject(
                                    project
                                );

                                setShowEditModal(
                                    true
                                );
                            }}
                            onDelete={
                                handleDelete
                            }
                        />

                    )
                )}

            </div>

            {showAddModal && (

                <AddProjectModal
                    formData={formData}
                    setFormData={
                        setFormData
                    }
                    setImage={
                        setImage
                    }
                    handleSubmit={
                        handleAddProject
                    }
                    onClose={() =>
                        setShowAddModal(
                            false
                        )
                    }
                />

            )}

            {showViewModal && (

                <ViewProjectModal
                    project={
                        selectedProject
                    }
                    onClose={() =>
                        setShowViewModal(
                            false
                        )
                    }
                />

            )}

            {showEditModal &&
                selectedProject && (

                    <EditProjectModal
                        project={
                            selectedProject
                        }
                        onUpdate={
                            handleUpdate
                        }
                        onClose={() =>
                            setShowEditModal(
                                false
                            )
                        }
                    />

                )}

        </div>
    );
};

export default Projects;