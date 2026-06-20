import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {


    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
        }

    }, []);

    return (
        <>
            Dashboard page
        </>

    );
};

export default Dashboard;