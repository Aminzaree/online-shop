import { useState } from "react";
import { Button, Checkbox, Input, useDisclosure } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VscError } from "react-icons/vsc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Terms from "../SignUp/Terms";
import PasswordStrengthProgress from "../../Components/Password Strength Progress/PasswordStrengthProgress";

export default function SetupNewPassword() {

    const [isInvalid, setIsInvalid] = useState(false);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState("");
    const [showPasswordStrength, setShowPasswordStrength] = useState(false);
    
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const toggleVisibility = () => setIsVisiblePassword(!isVisiblePassword);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setCheckPassword(value);

        if (value.length > 0) {
            setShowPasswordStrength(true);
        } else {
            setShowPasswordStrength(false);
        }
    };

    const handleError = () => {
        if (Object.keys(errors).length > 0) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        };
    };

    const onSubmit = (data) => {
        alert("Hello World");
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center mx-auto px-4 md:px-0" >
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto text-center py-8 p-4 bg-white dark:bg-[#18181B] rounded-3xl">
                <div className="w-11/12 md:w-8/12 mx-auto">
                    <div className="w-full">
                        <h1 className="font-lale text-2xl font-semibold">ثبت کلمه عبور جدید</h1>
                        <p className="text-zinc-500 mt-2">آیا قبلا رمز عبور خود را ثبت کرده‌اید؟ <Link to="/signIn" className="text-blue-400 hover:text-blue-500 cursor-pointer">ورود</Link></p>
                    </div>
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit, handleError)} className="w-full mt-7">
                            <div className="w-full mt-4 relative">
                                <label htmlFor="password" >
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        name="password"
                                        label="کلمه عبور"
                                        isInvalid={isInvalid && !!errors.password}
                                        isRequired
                                        {...register("password", {
                                            required: "لطفا کلمه عبور خود را وارد کنید."
                                        })}
                                        endContent={
                                            <button type="button" className="focus:outline-none" onClick={() => toggleVisibility()}>
                                                {
                                                    isVisiblePassword ? (<FaEye />) : (<FaEyeSlash />)
                                                }
                                            </button>
                                        }
                                        type={isVisiblePassword ? "text" : "password"}
                                        onChange={(e) => handlePasswordChange(e)}
                                    />
                                </label>
                                {
                                    errors.password &&
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="ml-1" size={15} />{errors.password.message}</p>
                                }
                                <div>
                                    {
                                        showPasswordStrength && 
                                        <>
                                            <PasswordStrengthProgress checkPassword={checkPassword} />
                                            <p className="text-xs leading-4 text-zinc-500">بیشتر از ۸ کارکتر با ترکیبی از اعداد، حرف و نمادها استفاده کنید.</p>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <label htmlFor="confirmPassword">
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        type="password"
                                        name="confirmPassword"
                                        label="تکرار کلمه عبور"
                                        isInvalid={isInvalid && !!errors.confirmPassword}
                                        isClearable
                                        isRequired
                                        {...register("confirmPassword", {
                                            required: "لطفا رمز عبور خود را تکرار کنید."
                                        })}
                                    />
                                </label>
                                {
                                    errors.confirmPassword &&
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="ml-1" size={15} />{errors.confirmPassword.message}</p>
                                }
                            </div>
                            <div className="w-full flex text-start mt-4">
                                <Checkbox defaultSelected color="default"></Checkbox>
                                <span onClick={onOpen} className="text-blue-400 hover:text-blue-500 ml-1 cursor-pointer">قوانین</span>
                                <p className="cursor-pointer text-sm text-zinc-500">استفاده از فروشگاه شما را می‌پذیرم.
                                </p>
                            </div>
                            <div className="w-full mt-7">
                                <Button
                                    type="submit"
                                    color="default"
                                    className="w-full bg-black text-white dark:bg-[#C6C7F8] dark:text-black mb-7"
                                >
                                    ثبت کلمه عبور جدید
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Terms Modal */}
            <Terms isOpen={isOpen} onOpenChange={onOpenChange} />
            <p className="text-xs mt-2 text-zinc-300">کلیه حقوق این وبسایت متعلق به تیم توسعه و طراحی ما می‌باشد. کپی نکن !</p>
        </div>
    );
};