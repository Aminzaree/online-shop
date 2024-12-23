import { Outlet } from "react-router-dom";
import IdentityVerification from "./IdentityVerification/IdentityVerification";
import UserPanelSidebar from "./UserPanelSidebar/UserPanelSidebar";
import BreadcrumbComponent from "../../Components/Breadcrumbs Component/BreadcrumbsComponent";

export default function UserPanelLayout() {
    return (
        <div className="flex flex-col lg:flex-row w-full mx-auto min-h-screen">

            {/* Sidebar */}
            <UserPanelSidebar />

            {/* Main Content */}
            <main className="w-full lg:w-3/4">
                <div className="p-4 rounded lg:rounded-none lg:rounded-r-lg">

                    {/* Breadcrumb Component */}
                    <BreadcrumbComponent />

                    {/* Identity Verification Component */}
                    <IdentityVerification />

                    {/* Content */}
                    <div className="bg-white dark:bg-[#18181B] p-6 rounded-3xl">
                        <Outlet />
                    </div>

                </div>
            </main>
        </div>
    );
}
