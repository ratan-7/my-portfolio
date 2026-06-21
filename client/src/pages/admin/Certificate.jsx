import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllCertificates,
    addCertificate,
    updateCertificate,
    deleteCertificate
} from "../../services/api";

import CertificateCard from "../../components/certificates/CertificateCard";
import AddCertificateModal from "../../components/certificates/AddCertificate";
import EditCertificateModal from "../../components/certificates/EditCertificate";

const Certificates = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(true);

    const [certificates, setCertificates] =
        useState([]);

    const [showAddModal, setShowAddModal] =
        useState(false);

    const [showEditModal, setShowEditModal] =
        useState(false);

    const [selectedCertificate,
        setSelectedCertificate] =
        useState(null);

    const [image, setImage] =
        useState(null);

    const [formData, setFormData] =
        useState({
            title: "",
            issuer: "",
            issueDate: "",
            certificateUrl: ""
        });

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchCertificates();

    }, []);

    const fetchCertificates =
        async () => {

            try {

                setLoading(true);

                const data =
                    await getAllCertificates();

                setCertificates(
                    data?.certificates ||
                    data ||
                    []
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

    const handleAddCertificate =
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
                    "issuer",
                    formData.issuer
                );

                data.append(
                    "issueDate",
                    formData.issueDate
                );

                data.append(
                    "certificateUrl",
                    formData.certificateUrl
                );

                if (image) {
                    data.append(
                        "image",
                        image
                    );
                }

                await addCertificate(
                    data
                );

                setShowAddModal(false);

                setFormData({
                    title: "",
                    issuer: "",
                    issueDate: "",
                    certificateUrl: ""
                });

                setImage(null);

                fetchCertificates();

            } catch (error) {

                console.log(error);

            }
        };

    const handleUpdateCertificate =
        async (
            id,
            updatedData
        ) => {

            try {

                await updateCertificate(
                    id,
                    updatedData
                );

                setShowEditModal(false);

                setSelectedCertificate(
                    null
                );

                fetchCertificates();

            } catch (error) {

                console.log(error);

            }
        };

    const handleDeleteCertificate =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this certificate?"
                    );

                if (!confirmDelete)
                    return;

                await deleteCertificate(id);

                fetchCertificates();

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
                Loading Certificates...
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
                        Certificates 🏆
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Manage your certifications
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
                    + Add Certificate
                </button>

            </div>

            {certificates.length === 0 ? (

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
                        No Certificates Found
                    </h2>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Add your first certificate
                    </p>

                </div>

            ) : (

                <div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                    "
                >

                    {certificates.map(
                        (certificate) => (

                            <CertificateCard
                                key={
                                    certificate._id
                                }
                                certificate={
                                    certificate
                                }
                                onEdit={() => {

                                    setSelectedCertificate(
                                        certificate
                                    );

                                    setShowEditModal(
                                        true
                                    );

                                }}
                                onDelete={
                                    handleDeleteCertificate
                                }
                            />

                        )
                    )}

                </div>

            )}

            {showAddModal && (

                <AddCertificateModal
                    formData={formData}
                    setFormData={
                        setFormData
                    }
                    setImage={setImage}
                    handleSubmit={
                        handleAddCertificate
                    }
                    onClose={() =>
                        setShowAddModal(
                            false
                        )
                    }
                />

            )}

            {showEditModal &&
                selectedCertificate && (

                    <EditCertificateModal
                        certificate={
                            selectedCertificate
                        }
                        onUpdate={
                            handleUpdateCertificate
                        }
                        onClose={() => {

                            setShowEditModal(
                                false
                            );

                            setSelectedCertificate(
                                null
                            );

                        }}
                    />

                )}

        </div>
    );
};

export default Certificates;