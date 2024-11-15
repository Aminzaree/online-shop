import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Input } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import onlineShop from "./../../assets/img/online-store.png"
import Cookies from "js-cookie";
import DarkModeToggle from "../../Components/Dark Mode Toggle/DarkModeToggle";
import UserDropdown from "./UserDropdown";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["خانه", "محصولات", "پرسش‌های متداول", "درباره ما", "تماس با ما"];

    const [userToken, setUserToken] = useState(null)
    const storedToken = Cookies.get("userToken");

    const navigate = useNavigate();

    useEffect(() => {
        if (storedToken) {
            setUserToken(storedToken);
        }
    }, [storedToken])

    const handleLogOut = () => {
        Cookies.remove("userToken");
        setUserToken(null);
        navigate("/signIn");
        toast.success("خروج با موفقیت انجام شد.")
    }

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            className="md:py-7"
        >
            {/* Navbar Image Logo */}
            <img
                src={onlineShop}
                alt="online shop"
                width={80}
                className="hidden md:block pl-2"
            />

            {/* Navbar Main Container */}
            <div className="w-full flex flex-col">
                {/* Top Items */}
                <NavbarContent className="hidden md:flex md:pb-4">
                    <div className="md:w-8/12 xl:w-9/12">
                        <NavbarContent className="w-full">
                            <Input
                                isClearable
                                type="search"
                                variant="bordered"
                                className="w-full"
                                radius="sm"
                                placeholder="جستجو"
                                startContent={
                                    <FaSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                            />
                        </NavbarContent>
                    </div>
                    <div className="md:w-4/12 xl:w-3/12">
                        <NavbarContent className="w-full" justify="end">
                            {userToken ?
                                <UserDropdown handleLogOut={handleLogOut} />
                                :
                                <Button
                                    color="default"
                                    variant="bordered"
                                    radius="sm"
                                >
                                    <LuUser2 size={18} />
                                    <NavLink to="/signIn" className="flex" > ورود / عضویت</NavLink>
                                </Button>
                            }
                            <Button
                                isIconOnly
                                color="default"
                                variant="bordered"
                                radius="sm"
                            >
                                <FaShoppingBasket size={25} />
                            </Button>
                            <DarkModeToggle />
                        </NavbarContent>
                    </div>

                </NavbarContent>

                {/* Bottom Items */}
                <NavbarContent>
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="md:hidden"
                        />
                        <NavbarBrand>
                            <p className="font-lale text-xl font-bold text-inherit text-red-600">فروشگاه من</p>
                            <NavbarContent className="hidden md:flex gap-4 mr-4" justify="center">
                                <NavbarItem>
                                    <NavLink to='/' className={({ isActive }) => (isActive ? "active link font-semibold" : "font-normal")}>
                                        خانه
                                    </NavLink>
                                </NavbarItem>
                                <NavbarItem>
                                    <NavLink to='/product' className={({ isActive }) => (isActive ? "active link font-semibold" : "font-normal")}>
                                        محصولات
                                    </NavLink>
                                </NavbarItem>
                                <NavbarItem>
                                    <NavLink to='/about' className={({ isActive }) => (isActive ? "active link font-semibold" : "font-normal")}>
                                        درباره ما
                                    </NavLink>
                                </NavbarItem>
                                <NavbarItem>
                                    <NavLink to='/contact' className={({ isActive }) => (isActive ? "active link font-semibold" : "font-normal")}>
                                        تماس با ما
                                    </NavLink>
                                </NavbarItem>
                            </NavbarContent>
                        </NavbarBrand>
                    </NavbarContent>

                    {/* Left Buttons */}
                    <NavbarContent justify="end">
                        <Button
                            color="transparent"
                            radius="sm"
                            className="px-0 hidden md:flex"
                        >
                            <AiOutlineFileSearch size={20} />
                            پیگیری کالا
                            <IoIosArrowBack size={20} />
                        </Button>
                        <Button
                            color="default"
                            variant="bordered"
                            radius="sm"
                            className="md:hidden"
                        >
                            <LuUser2 size={18} />
                            <NavLink to="/signIn" className="flex" > ورود / عضویت</NavLink>
                        </Button>
                    </NavbarContent>
                </NavbarContent>
            </div>

            {/* Responsive Menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <li
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="md"
                        >
                            {item}
                        </li>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
