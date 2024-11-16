import { NavLink } from "react-router-dom";
import { User, Link } from "@nextui-org/react";
import { TbLayoutDashboard, TbMoneybag, TbShoppingCart } from "react-icons/tb";
import { MdFavoriteBorder, MdOutlineLogout } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

export default function UserPanelSidebar() {
    return (
        <aside className="w-full lg:w-1/4 p-4 rounded lg:rounded-none lg:rounded-l-lg">
            <nav>
                <NavLink
                    to="account"
                    className={({ isActive }) =>
                        `${isActive ? "bg-white dark:bg-[#18181B] font-bold" : "bg-white dark:bg-[#18181B]"} flex p-2 rounded-3xl mb-2`
                    }
                >
                    <User
                        name="کاربر فروشگاه"
                        description={(
                            <Link href="javascript:void(0)" size="sm">
                                karbar_froshgah@
                            </Link>
                        )}
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                        }}
                    />
                </NavLink>

                <div className="w-full bg-white dark:bg-[#18181B] px-2 rounded-3xl overflow-hidden">
                    {[
                        { to: "myBag", icon: <TbMoneybag className="me-1" />, label: "کیف پول" },
                        { to: "addresses", icon: <SlLocationPin className="me-1" />, label: "آدرس‌ها" },
                        { to: "orders", icon: <TbShoppingCart className="me-1" />, label: "سفارش‌ها" },
                        { to: "myFavorites", icon: <MdFavoriteBorder className="me-1" />, label: "علاقه‌مندی‌های من" },
                        { to: "messages", icon: <IoNotificationsOutline className="me-1" />, label: "پیغام‌ها" },
                        { to: "settings", icon: <IoSettingsOutline className="me-1" />, label: "تنظیمات" },
                        { to: "changePassword", icon: <RiLockPasswordLine className="me-1" />, label: "تغییر کلمه عبور" },
                        // { to: "change-password", icon: <MdOutlineLogout className="me-1" />, label: "خروج" },
                    ].map((link, index, array) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `${isActive ? "font-bold border-r-4 border-red-600" : "dark:bg-[#18181B]"} flex items-center p-2 my-2 border-b border-b-gray-200 ${index === array.length - 1 ? "border-b-0" : ""
                                }`
                            }
                        >
                            {link.icon}
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </aside>
    );
};