import { Avatar, Button, Input } from "@nextui-org/react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { CiCalendarDate, CiEdit, CiMobile3 } from "react-icons/ci";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { LuUserCheck2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";

export default function Account() {
    return (
        <div className="w-full">
            <div className="w-full relative">
                <Avatar
                    isBordered
                    color="primary"
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    className="w-24 h-24 text-large"
                />
                <Button 
                    isIconOnly 
                    color="warning" 
                    variant="solid" 
                    size="sm"
                    className="absolute -bottom-1 right-16"
                >
                    <CiEdit size={25} />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <label htmlFor="firstName">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="firstName"
                        label="نام"
                        isClearable
                        className="flex justify-center"
                        // placeholder="نام خود را وارد کنید"
                        startContent={
                            <RiUserLine className="text-default-400" />
                        }
                        endContent={
                            <BiRename className="text-green-600" />
                        }
                        value={"امین"}
                    />
                </label>
                <label htmlFor="lastName">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="lastName"
                        label="نام خانوادگی"
                        isClearable
                        className="flex justify-center"
                        // placeholder="نام خانوادگی خود را وارد کنید"
                        startContent={
                            <FaUserFriends className="text-default-400" />
                        }
                        endContent={
                            <BiRename className="text-green-600" />
                        }
                    />
                </label>
                <label htmlFor="nationalCode">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="nationalCode"
                        label="کد ملی"
                        isClearable
                        className="flex justify-center"
                        // placeholder="کد ملی خود را وارد کنید"
                        startContent={
                            <LuUserCheck2 className="text-default-400" />
                        }
                        endContent={
                            <AiOutlineEdit className="text-green-600" />
                        }
                    />
                </label>
                <label htmlFor="mobileNumber">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="mobileNumber"
                        label="شماره موبایل"
                        isClearable
                        className="flex justify-center"
                        // placeholder=" شماره موبایل خود را وارد کنید"
                        startContent={
                            <CiMobile3 className="text-default-400" />
                        }
                        endContent={
                            <AiOutlineEdit className="text-green-600" />
                        }
                    />
                </label>
                <label htmlFor="email">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="email"
                        label="ایمیل"
                        isClearable
                        className="flex justify-center"
                        // placeholder=" ایمیل خود را وارد کنید (اختیاری)"
                        startContent={
                            <MdOutlineMailOutline className="text-default-400" />
                        }
                        endContent={
                            <AiOutlineEdit className="text-green-600" />
                        }
                    />
                </label>
                <label htmlFor="password">
                    <Input
                        disabled
                        size={"md"}
                        variant={"underlined"}
                        type="password"
                        name="password"
                        label="کلمه عبور"
                        isClearable
                        className="flex justify-center"
                        placeholder="غیر قابل نمایش"
                        value={"123456"}
                        startContent={
                            <RiLockPasswordLine className="text-default-400" />
                        }
                        endContent={
                            <AiOutlineEdit className="text-green-600" />
                        }
                    />
                </label>
                <label htmlFor="birthDate">
                    <Input
                        size={"md"}
                        variant={"underlined"}
                        type="text"
                        name="birthDate"
                        label="تاریخ تولد (اختیاری)"
                        isClearable
                        className="flex justify-center"
                        // placeholder="تاریخ تولد خود را وارد کنید"
                        startContent={
                            <CiCalendarDate className="text-default-400" />
                        }
                        endContent={
                            <AiOutlineEdit className="text-green-600" />
                        }
                    />
                </label>
            </div>
            <div className="w-full mt-4 text-end">
                <Button
                    color="warning"
                    variant="flat"
                // isLoading
                >ویرایش</Button>
            </div>
        </div>
    );
};