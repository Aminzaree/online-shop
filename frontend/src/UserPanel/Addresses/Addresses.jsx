import { Button, image, user, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, useDisclosure } from "@nextui-org/react";
import { MdAlternateEmail, MdDelete, MdOutlineAddLocationAlt, MdOutlineLocalPhone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoAppsOutline } from "react-icons/io5";
import imageMap from "../../assets/img/map.png"
import { AiOutlineUser } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import AddNewAddress from "./AddNewAddress";

export default function Addresses() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const addressesObject = [
        {
            id: 1,
            area: "سعادت آباد - خیابان صراف‌ها - پلاک ۱۲ واحد ۴",
            city: "تهران",
            zipCode: "۱۶۸۵۶۵۶۶۸۵",
            phoneNumber: "۰۹۳۶۳۰۶۳۶۷",
            userName: "karbar_froshgah",
            image: imageMap
        },
        {
            id: 2,
            area: "سعادت آباد - خیابان صراف‌ها - پلاک ۱۲ واحد ۴",
            city: "تهران",
            zipCode: "۱۶۸۵۶۵۶۶۸۵",
            phoneNumber: "۰۹۳۶۳۰۶۳۶۷",
            userName: "karbar_froshgah",
            image: imageMap
        },
        {
            id: 3,
            area: "سعادت آباد - خیابان صراف‌ها - پلاک ۱۲ واحد ۴",
            city: "تهران",
            zipCode: "۱۶۸۵۶۵۶۶۸۵",
            phoneNumber: "۰۹۳۶۳۰۶۳۶۷",
            userName: "karbar_froshgah",
            image: ""
        },

    ];

    return (
        <div className="w-full">
            {/* Add New Address */}
            <div className="w-full text-end">
                <Button
                    color="danger"
                    variant="ghost"
                    startContent={
                        <MdOutlineAddLocationAlt size={20} />
                    }
                    onClick={onOpen}
                >ثبت آدرس جدید</Button>
            </div>

            <div className="w-full mt-8 pb-4">
                {
                    addressesObject.map((item, index, array) => {

                        const { id, area, city, zipCode, phoneNumber, userName, image } = item;

                        return (
                            <div className={`py-4 border-b ${index === array.length - 1 ? "border-b-0" : ""}`} key={id}>
                                <div className="w-full flex items-center justify-between">
                                    <p>{area}</p>
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
                                        <p className="flex items-center text-zinc-500 "><SlLocationPin className="me-1 " /> {city}</p>
                                        <p className="flex items-center text-zinc-500 mt-2"><MdAlternateEmail className="me-1" /> {zipCode}</p>
                                        <p className="flex items-center text-zinc-500 mt-2"><MdOutlineLocalPhone className="me-1" /> {phoneNumber}</p>
                                        <p className="flex items-center text-zinc-500 mt-2"><AiOutlineUser className="me-1" /> {userName}</p>
                                    </div>
                                    <img
                                        src={image ? image : imageMap}
                                        alt="عکس نقشه"
                                        className="rounded-lg w-36"
                                    />
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>

            <AddNewAddress isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
};