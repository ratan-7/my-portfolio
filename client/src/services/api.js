import { API_URL } from "../config";

export const loginUser = async (data) => {
    try {

        const res = await fetch(
            `${API_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await res.json();

        return result;

    } catch (error) {

        console.error(error);

        throw error;
    }
};

export const getAllProjects = async () => {
    const res = await fetch(`${API_URL}/projects`);
    return await res.json();
};

export const addProject = async (formData) => {

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });

    return await res.json();
};

export const updateProject = async (id, data) => {

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    return await res.json();
};

export const deleteProject = async (id) => {

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return await res.json();
};