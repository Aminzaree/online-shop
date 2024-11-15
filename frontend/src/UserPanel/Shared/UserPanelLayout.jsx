import { NavLink, Outlet } from "react-router-dom";
import IdentityVerification from "./IdentityVerification/IdentityVerification";

export default function UserPanelLayout() {
    return (
        <div className="flex flex-col lg:flex-row w-full xl:w-10/12 xxl:w-9/12 mx-auto min-h-screen p-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 p-4 rounded lg:rounded-none lg:rounded-l-lg">
                <nav>
                <NavLink
                        to="dashboard"
                        className={({ isActive }) =>
                            isActive ? "block p-2 rounded bg-gray-300 mb-2" : "block p-2 rounded bg-white dark:bg-[#18181B] mb-2"
                        }
                    >
                        داشبورد
                    </NavLink>
                    <NavLink
                        to="account"
                        className={({ isActive }) =>
                            isActive ? "block p-2 rounded bg-gray-300 mb-2" : "block p-2 rounded bg-white dark:bg-[#18181B] mb-2"
                        }
                    >
                        پروفایل
                    </NavLink>
                    <NavLink
                        to="orders"
                        className={({ isActive }) =>
                            isActive ? "block p-2 rounded bg-gray-300 my-2" : "block p-2 rounded bg-white dark:bg-[#18181B] my-2"
                        }
                    >
                        سفارشات
                    </NavLink>
                    <NavLink
                        to="favorites"
                        className={({ isActive }) =>
                            isActive ? "block p-2 rounded bg-gray-300 my-2" : "block p-2 rounded bg-white dark:bg-[#18181B] my-2"
                        }
                    >
                        تنظیمات
                    </NavLink>
                </nav>
            </aside>

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
