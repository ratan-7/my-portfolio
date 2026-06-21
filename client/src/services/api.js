import { API_URL } from "../config";

//==========================Login Section=================================//
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


//========================= Project Section ===================================//
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

//==================== Skills Section ===================================//
export const getAllSkills = async () => {
    try {

        const res = await fetch(
            `${API_URL}/skills`
        );
        return await res.json();
    } catch (error) {

        console.log(error);

    }
};

export const addSkill = async (data) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/skills`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const updateSkill = async (
    id,
    data
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/skills/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const deleteSkill = async (
    id
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/skills/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {
        console.log(error);
    }
};

//===============Experience section===============================================//
export const getAllExperiences = async () => {
    try {

        const res = await fetch(
            `${API_URL}/experiences`
        );
        return await res.json();
    } catch (error) {

        console.log(error);

    }
};

export const addExperience = async (data) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/experiences`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const updateExperience = async (
    id,
    data
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/experiences/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const deleteExperience = async (
    id
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/experiences/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {
        console.log(error);
    }
};


//======================Education section===================================//
export const getAllEducations = async () => {
    try {

        const res = await fetch(
            `${API_URL}/educations`
        );
        return await res.json();
    } catch (error) {

        console.log(error);

    }
};

export const addEducation = async (data) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/educations`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const updateEducation = async (
    id,
    data
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/educations/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type":
                        "application/json",
                    Authorization:
                        `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const deleteEducation = async (
    id
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/educations/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {
        console.log(error);
    }
};

//===========================Certificates Section=============================//
export const getAllCertificates = async () => {
    try {

        const res = await fetch(
            `${API_URL}/certificates`
        );
        return await res.json();
    } catch (error) {

        console.log(error);

    }
};

export const addCertificate = async (formData) => {

    const token = localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/certificates`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }
    );

    return await res.json();
};

export const updateCertificate = async (
    id,
    formData
) => {

    const token = localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/certificates/${id}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }
    );

    return await res.json();
};

export const deleteCertificate = async (
    id
) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/certificates/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {
        console.log(error);
    }
};

//==========================Contact Section===============================//
export const getAllContacts = async () => {

    const token =
        localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/contacts`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    return await res.json();
};
export const markContactRead = async (id) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/contacts/${id}/read`,
            {
                method: "PUT",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

export const deleteContact = async (id) => {

    try {

        const token =
            localStorage.getItem("token");

        const res = await fetch(
            `${API_URL}/contacts/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

        return await res.json();

    } catch (error) {

        console.log(error);

    }
};

//============analysis section==============================//
export const getAnalytics = async () => {

    const token =
        localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/analytics`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    return await res.json();
};

//===============setting section ============================//
export const getSettings = async () => {

    const token =
        localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/settings`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    return await res.json();
};

export const updateSettings = async (
    data
) => {

    const token =
        localStorage.getItem("token");

    const res = await fetch(
        `${API_URL}/settings`,
        {
            method: "PATCH",
            headers: {
                "Content-Type":
                    "application/json",
                Authorization:
                    `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
    );

    return await res.json();
};