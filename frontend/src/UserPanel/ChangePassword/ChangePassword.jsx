import { Button, Input } from "@nextui-org/react";
import { RiLockPasswordLine } from "react-icons/ri";

export default function ChangePassword() {
    return (
        <div className="full">
            <form className="w-full">
                <div className="w-full">
                    <label htmlFor="currentPassword" >
                        <Input
                            size={"md"}
                            variant={"underlined"}
                            name="currentPassword"
                            label="رمز عبور فعلی"
                            isRequired
                            startContent={
                                <RiLockPasswordLine />
                            }
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <label htmlFor="newPassword" >
                        <Input
                            size={"md"}
                            variant={"underlined"}
                            name="newPassword"
                            label="رمز عبور جدید"
                            isRequired
                            className="flex justify-center"
                            startContent={
                                <RiLockPasswordLine />
                            }
                        />
                    </label>
                    <label htmlFor="confirmNewPassword" >
                        <Input
                            size={"md"}
                            variant={"underlined"}
                            name="confirmNewPassword"
                            label="تکرار رمز عبور جدید"
                            isRequired
                            className="flex justify-center"
                            startContent={
                                <RiLockPasswordLine />
                            }
                        />
                    </label>
                </div>
                <div className="w-full mt-7 text-end">
                    <Button
                        type="submit"
                        color="success"
                        variant="flat"
                    >
                        ثبت کلمه عبور جدید
                    </Button>
                </div>
            </form>
        </div>
    );
};