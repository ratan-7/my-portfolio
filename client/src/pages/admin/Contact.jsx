import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getAllContacts,
    deleteContact,
    markContactRead
} from "../../services/api";

import ContactCard from "../../components/contacts/ContactCard";
import ContactViewModal from "../../components/contacts/ContactView";

const Contacts = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(true);

    const [contacts, setContacts] =
        useState([]);

    const [selectedContact,
        setSelectedContact] =
        useState(null);

    const [showViewModal,
        setShowViewModal] =
        useState(false);

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetchContacts();

    }, []);

    const fetchContacts = async () => {

        try {

            setLoading(true);

            const data =
                await getAllContacts();

            if (Array.isArray(data)) {

                setContacts(data);

            } else {

                setContacts(
                    data?.contacts || []
                );

            }

        } catch (error) {

            console.log(error);
            setContacts([]);

        } finally {

            setLoading(false);

        }
    };

    const handleView =
        async (contact) => {

            setSelectedContact(
                contact
            );

            setShowViewModal(true);

            if (!contact.isRead) {

                try {

                    await markContactRead(
                        contact._id
                    );

                    fetchContacts();

                } catch (error) {

                    console.log(error);

                }
            }
        };

    const handleDelete =
        async (id) => {

            try {

                const confirmDelete =
                    window.confirm(
                        "Delete this message?"
                    );

                if (!confirmDelete)
                    return;

                await deleteContact(id);

                fetchContacts();

            } catch (error) {

                console.log(error);

            }
        };

    const handleMarkRead =
        async (id) => {

            try {

                await markContactRead(id);

                fetchContacts();

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
                Loading Messages...
            </div>
        );
    }

    return (
        <div className="text-white">

            <div className="mb-10">

                <h1
                    className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    "
                >
                    Contacts 📩
                </h1>

                <p
                    className="
                    text-slate-400
                    mt-2
                    "
                >
                    Manage contact messages
                </p>

            </div>

            {contacts.length === 0 ? (

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
                        No Messages Found
                    </h2>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        New messages will appear here
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

                    {contacts.map(
                        (contact) => (

                            <ContactCard
                                key={
                                    contact._id
                                }
                                contact={
                                    contact
                                }
                                onView={
                                    handleView
                                }
                                onDelete={
                                    handleDelete
                                }
                                onMarkRead={
                                    handleMarkRead
                                }
                            />

                        )
                    )}

                </div>

            )}

            {showViewModal &&
                selectedContact && (

                    <ContactViewModal
                        contact={
                            selectedContact
                        }
                        onClose={() => {

                            setShowViewModal(
                                false
                            );

                            setSelectedContact(
                                null
                            );

                        }}
                    />

                )}

        </div>
    );
};

export default Contacts;