import { Input, Button, Checkbox } from "@nextui-org/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"
import PasswordStrengthProgress from "./PasswordStrengthProgress";
import { VscError } from "react-icons/vsc";
import { MdMobileFriendly } from "react-icons/md";

export default function SignUp() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [isInvalid, setIsInvalid] = useState(false)
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const [checkPassword, setCheckPassword] = useState("")

    const onSubmit = (data) => {
        alert("Hello World");
    };
    
    const handleError = () => {
        if (Object.keys(errors).length > 0) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        };
    };
    
    const toggleVisibility = () => setIsVisiblePassword(!isVisiblePassword);

    return (
        <div className="w-full h-screen flex justify-center items-center mx-auto px-4 md:px-0">
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto text-center py-8 p-4 bg-white dark:bg-[#18181B] rounded-3xl">
                <div className="w-11/12 md:w-8/12 mx-auto">
                    <div className="w-full">
                        <h1 className="font-lale text-2xl font-semibold">عضویت</h1>
                        <p className="text-zinc-500 mt-2">سلام! به فروشگاه ما خوش آمدید :)</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full mt-7 flex justify-center items-center">
                            <Button
                                color="default"
                                variant="bordered"
                                className="w-1/2"
                            >
                                <span><FaGoogle size={20} /></span>
                                با حساب گوگل
                            </Button>
                            <Button
                                color="default"
                                variant="bordered"
                                className="w-1/2 mr-4"
                            >
                                <span><MdMobileFriendly size={20} /></span>
                                با شماره موبایل
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 mb-6 mt-7">
                            <div className="flex-grow h-px border-1"></div>
                            <div className="text-second-icon-color font-medium text-small-font">یا از طریق ایمیل</div>
                            <div className="flex-grow h-px border-1"></div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit, handleError)} className="w-full mt-7">
                            <div>
                                <label htmlFor="phoneNumber">
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        type="email"
                                        name="email"
                                        label="ایمیل"
                                        isInvalid={isInvalid && !!errors.email}
                                        isClearable
                                        isRequired
                                        {...register("email", {
                                            required: "لطفا ایمیل خود را وارد کنید."
                                        })}
                                    />
                                </label>
                                {
                                    errors.email &&
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="mr-1" size={15} />{errors.email.message}</p>
                                }
                            </div>
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
                                        onChange={(e) => setCheckPassword(e.target.value)}
                                    />
                                </label>
                                {
                                    errors.password &&
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="mr-1" size={15} />{errors.password.message}</p>
                                }
                                <div>
                                    <PasswordStrengthProgress checkPassword={checkPassword} />
                                    <p className="text-xs leading-4 text-zinc-500">بیشتر از ۸ کارکتر با ترکیبی از اعداد، حرف و نمادها استفاده کنید.</p>
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
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="mr-1" size={15} />{errors.confirmPassword.message}</p>
                                }
                            </div>
                            <div className="w-full flex text-start mt-4">
                                <Checkbox defaultSelected color="default"></Checkbox>
                                <span className="text-blue-400 hover:text-blue-500 ml-1 cursor-pointer">قوانین</span>
                                <p className="cursor-pointer text-sm text-zinc-500">استفاده از فروشگاه شما را می‌پذیرم.
                                </p>
                            </div>
                            <div className="w-full mt-7">
                                <Button
                                    type="submit"
                                    color="default"
                                    isLoading={false}
                                    className="w-full bg-black text-white dark:bg-[#C6C7F8] dark:text-black"
                                >
                                    عضویت
                                </Button>
                            </div>
                        </form>
                        <div className="w-full mt-7">
                            <p className="text-zinc-500">آیا قبلا در فروشگاه ما عضو شده‌اید؟
                                <Link to="/SignIn" className="text-blue-400 hover:text-blue-500 cursor-pointer"> ورود</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};