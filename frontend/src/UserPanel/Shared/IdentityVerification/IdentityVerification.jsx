import { Button } from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function IdentityVerification() {
    return (
        <div className="w-full flex justify-between items-center bg-white dark:bg-[#18181B] py-4 px-6 rounded-3xl mb-2 text-sm text-red-500">
            <p className="flex items-center"><FaInfoCircle className="me-2" /> با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید</p>
            <span className="flex items-center cursor-pointer text-sm text-blue-400 hover:text-blue-500">تایید هویت <MdKeyboardArrowLeft /></span>
        </div>
    );
};