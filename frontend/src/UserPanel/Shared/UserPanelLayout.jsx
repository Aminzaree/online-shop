import { Outlet } from "react-router-dom";
import IdentityVerification from "./IdentityVerification/IdentityVerification";
import UserPanelSidebar from "./UserPanelSidebar/UserPanelSidebar";

export default function UserPanelLayout() {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:w-10/12 xxl:w-9/12 mx-auto min-h-screen p-6">
            {/* Sidebar */}
            <UserPanelSidebar />

            {/* Main Content */}
            <main className="w-full lg:w-3/4">
                <div className="p-4 rounded lg:rounded-none lg:rounded-r-lg">
                <IdentityVerification />
                <div className="bg-white dark:bg-[#18181B] p-6 rounded-3xl">
                    <Outlet />
                </div>
                </div>
            </main>
        </div>
    );
}
