import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/MainNavbar";
import Footer from "./Footer/Footer";
import BreadcrumbComponent from "../Components/Breadcrumbs Component/BreadcrumbsComponent";

export default function Index() {
    return (
        <div className="flex flex-col items-center">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 py-8">

                {/* Breadcrumb Component */}
                <BreadcrumbComponent />

                {/* Main Content */}
                <Outlet />
                
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
