import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex">

            <Sidebar />

            <main className="flex-1 overflow-x-hidden md:ml-0">
                <div className="p-4 md:p-8">
                    <Outlet />
                </div>
            </main>

        </div>
    );
};

export default AdminLayout;