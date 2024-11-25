import { Link } from "react-router-dom";
import onlineShop from "./../../assets/img/online-store.png"
import { BsMenuApp } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbHome } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-900">

            {/* Main Footer Content */}
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 mx-auto p-4 py-6 lg:py-8">

                {/* Top Content */}
                <div className="md:flex md:justify-between">

                    {/* Right Content - Description */}
                    <div className="w-full md:w-2/5 px-5 mb-6 md:mb-0">
                        <div>
                            <Link to="https://github.com/Aminzaree/online-shop" className="flex items-center">
                                <img
                                    src={onlineShop}
                                    className="h-8 me-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="font-lale self-center text-2xl font-semibold whitespace-nowrap">
                                    فروشگاه آنلاین ما
                                </span>
                            </Link>
                            <p className="text-sm text-justify text-default-500 mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                        </div>
                    </div>

                    {/* Left Content - List */}
                    <div className="w-full md:w-3/5">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 px-5">

                            {/* Quick Menu */}
                            <div>
                                <h2 className="flex items-center text-sm font-bold border-b-1 border-default-500 mb-4 pb-4">
                                    <BsMenuApp className="me-1" />
                                    دسترسی سریع
                                </h2>
                                <ul className="text-default-500">
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <TbHome className="me-1" />
                                            خانه
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <HiOutlineShoppingCart className="me-1" />
                                            محصولات
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <RiInformationLine className="me-1" />
                                            درباره ما
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center" to="/">
                                            <MdOutlineLocalPhone className="me-1" />
                                            تماس با ما
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h2 className="flex items-center text-sm font-bold border-b-1 border-default-500 mb-4 pb-4">
                                    <IoShareSocialOutline className="me-1" />
                                    ما را دنبال کنید
                                </h2>
                                <ul className="text-default-500">
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <FaInstagram className="me-1" />
                                            اینستاگرام
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <LiaTelegram className="me-1" />
                                            تلگرام
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <FaGithub className="me-1" />
                                            Amin Zare (Github)
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">Nader Hossein Nezhad (Github)</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="flex items-center text-sm font-bold border-b-1 border-default-500 mb-4 pb-4">
                                    <BiMessageRoundedDetail className="me-1" />
                                    تماس با ما
                                </h2>
                                <ul className="text-default-500">
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <MdOutlineLocalPhone className="me-1" />
                                            0936****957
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link className="w-full flex items-center hover:text-black" to="/">
                                            <MdAlternateEmail className="me-1" />
                                            froshgah@yahoo.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Content - Copy Right Text */}
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        تمامی حقوق مادی و معنوی این فروشگاه متعلق به <a className="text-blue-400 hover:text-blue-500" href="https://github.com/Aminzaree">امین زارع</a> و <a className="text-blue-400 hover:text-blue-500" href="https://github.com/Nader-hosseinnezhad"> نادر حسین‌نژاد</a> می‌باشد.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link
                            to="/"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            {/* Add appropriate SVG for the icon */}
                        </Link>
                        {/* Repeat for other social media icons */}
                    </div>
                </div>

            </div>
        </footer>
    );
};