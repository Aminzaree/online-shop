import { Button } from "@nextui-org/react";
import { Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";
import { IoAppsOutline } from "react-icons/io5";
import { MdAlternateEmail, MdDelete, MdOutlineAddLocationAlt, MdOutlineLocalPhone } from "react-icons/md";
import imageMap from "../../assets/img/map.png"
import { AiOutlineUser } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

export default function Addresses() {
    return (
        <div className="w-full">
            <div className="w-full text-end">
                <Button
                    color="danger"
                    variant="ghost"
                    startContent={
                        <MdOutlineAddLocationAlt size={20} />
                    }
                >ثبت آدرس جدید</Button>
            </div>
            <div className="w-full mt-8 pb-4 border-b">
                <div className="w-full flex items-center justify-between">
                    <p> سعادت آباد - خیابان صراف‌ها - پلاک ۱۲ واحد ۴</p>
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button
                                variant="flat"
                                color="warning"
                                isIconOnly
                            >
                                <IoAppsOutline />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            <DropdownItem
                                key="new"
                                startContent={
                                    <CiEdit size={20} />
                                }
                            >ویرایش آدرس</DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                startContent={
                                    <MdDelete size={20} />
                                }
                            >
                                حذف
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="w-full flex items-center justify-between mt-4">
                    <div>
                        <p className="flex items-center text-zinc-500 "><SlLocationPin className="me-1 " />  تهران</p>
                        <p className="flex items-center text-zinc-500 mt-2"><MdAlternateEmail className="me-1" /> ۱۶۸۵۶۵۶۶۸۵</p>
                        <p className="flex items-center text-zinc-500 mt-2"><MdOutlineLocalPhone className="me-1" /> ۰۹۳۶۳۰۶۳۶۷</p>
                        <p className="flex items-center text-zinc-500 mt-2"><AiOutlineUser className="me-1" /> karbar froshgah</p>
                    </div>
                    <img
                        src={imageMap}
                        alt="عکس نقشه"
                        className="rounded-lg w-36"
                    />
                </div>
            </div>
            <div className="w-full mt-8 pb-4">
                <div className="w-full flex items-center justify-between">
                    <p> سعادت آباد - خیابان صراف‌ها - پلاک ۱۲ واحد ۴</p>
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button
                                variant="flat"
                                color="warning"
                                isIconOnly
                            >
                                <IoAppsOutline />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            <DropdownItem
                                key="new"
                                startContent={
                                    <CiEdit size={20} />
                                }
                            >ویرایش آدرس</DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                startContent={
                                    <MdDelete size={20} />
                                }
                            >
                                حذف
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="w-full flex items-center justify-between mt-4">
                    <div>
                        <p className="flex items-center text-zinc-500 "><SlLocationPin className="me-1 " />  تهران</p>
                        <p className="flex items-center text-zinc-500 mt-2"><MdAlternateEmail className="me-1" /> ۱۶۸۵۶۵۶۶۸۵</p>
                        <p className="flex items-center text-zinc-500 mt-2"><MdOutlineLocalPhone className="me-1" /> ۰۹۳۶۳۰۶۳۶۷</p>
                        <p className="flex items-center text-zinc-500 mt-2"><AiOutlineUser className="me-1" /> karbar froshgah</p>
                    </div>
                    <img
                        src={imageMap}
                        alt="عکس نقشه"
                        className="rounded-lg w-36"
                    />
                </div>
            </div>
        </div>
    );
};