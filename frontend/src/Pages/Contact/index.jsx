import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { FaInstagram, FaTelegramPlane, FaTwitter, FaLinkedin, FaLongArrowAltLeft } from "react-icons/fa";
import locationMap from "../../assets/img/locationMap.png"
import { Button } from "@nextui-org/react";


export default function Index() {
    return (
        <div className="w-full h-screen flex justify-center items-center mx-auto px-6 md:px-0" >
            <div className="w-full lg:flex md:w-8/12 lg:w-10/12 xl:w-9/12 mx-auto text-center py-20 px-12 bg-white dark:bg-[#18181B] rounded-3xl">
                <div className="w-full px-9">
                    <div className="w-full flex justify-start border-b-2 border-solid border-zinc-200 pb-6 mb-6">
                        <IoLocationOutline className="ml-1" size={35} />
                        <p className="text-md text-start font-extrabold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                    </div>
                    <div className="w-full items-center justify-start border-b-2 border-solid border-zinc-200 pb-6 mb-6">
                        <p className="w-full text-start font-extrabold pb-4">تلفن پشتیبانی:</p>
                        <div className="w-full xl:flex items-center justify-between pb-4">
                            <p className="w-full xl:w-1/2 pb-4 xl:pb-0 text-start text-md text-zinc-400">همه روزه از ساعت ۷ تا ۲۴</p>
                            <p className="w-full xl:w-1/2 flex justify-end text-md">۸۹۵۷٭٭٭۰۹۳۶ <BiSupport className="mr-1" /></p>
                        </div>
                        <p className="w-full flex items-center justify-end text-xl">myshop@gamil.com <HiOutlineMail className="mr-1" /></p>
                    </div>
                    <div className="w-full items-center justify-start border-b-2 border-solid border-zinc-200 pb-6 mb-6">
                        <p className="text-md text-start font-extrabold pb-4">فروشگاه لورم ایپسوم در شبکه‌های اجتماعی:</p>
                        <ul className="w-full flex items-center justify-evenly">
                            <li className="cursor-pointer" ><FaInstagram className="hover:text-zinc-400" size={25} /></li>
                            <li className="cursor-pointer" ><FaTelegramPlane className="hover:text-zinc-400" size={25} /></li>
                            <li className="cursor-pointer" ><FaTwitter className="hover:text-zinc-400" size={25} /></li>
                            <li className="cursor-pointer" ><FaLinkedin className="hover:text-zinc-400" size={25} /></li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-start pb-6 mb-6">
                        <ul className="w-full">
                            <li className="flex items-center cursor-pointer hover:text-zinc-400 pb-2">ارسال پیام به پشتیبانی <FaLongArrowAltLeft className="mr-1" /></li>
                            <li className="flex items-center cursor-pointer hover:text-zinc-400">پشتیبانی و سوال‌های متداول <FaLongArrowAltLeft className="mr-1" /></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-9">
                    <img src={locationMap} alt="Location" className="rounded-xl" />
                    <Button
                        color="default"
                        className="w-full mt-4 bg-black text-white dark:bg-[#C6C7F8] dark:text-black"
                    >
                        باز کردن نقشه
                        <FaLongArrowAltLeft className="mr-1" size={20} />
                    </Button>
                </div>
            </div>
        </div>
    );
};