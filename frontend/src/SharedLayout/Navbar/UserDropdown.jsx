import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function UserDropdown(props) {

    const {handleLogOut} = props;

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                    key="profile"
                    className="h-14 gap-2"
                >
                    <p className="font-semibold">وارد شده با</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem
                    key="settings"
                    startContent={<CgProfile   size={15} />}
                >
                    <Link to="/profile/Account">پروفایل</Link>
                    
                </DropdownItem>
                <DropdownItem
                    key="team_settings"
                    startContent={<IoSettingsOutline  size={15} />}
                >
                    تنظیمات    
                </DropdownItem>
                <DropdownItem
                    key="analytics"
                    showDivider
                    startContent={<RiLockPasswordLine  size={15} />}
                >
                    تغییر کلمه عبور
                </DropdownItem>                              
                <DropdownItem 
                    key="logout" 
                    color="danger"
                    onClick={handleLogOut}
                    className="text-danger"
                    startContent={<MdOutlineLogout size={25} />}
                >
                    خروج 
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};