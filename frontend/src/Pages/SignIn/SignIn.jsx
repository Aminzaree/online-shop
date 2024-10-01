import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { MdMobileFriendly } from "react-icons/md";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"
import { VscError } from "react-icons/vsc";
import { useState } from "react";


export default function SignIn() {

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const toggleVisibility = () => setIsVisiblePassword(!isVisiblePassword);

    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const onSubmit = (data) => {
        console.log("hello world");
    }

    const handleError = () => {
        if(Object.keys(errors).length > 0) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        };
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center mx-auto px-4 md:px-0">
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto text-center py-8 p-4 bg-white dark:bg-[#18181B] rounded-3xl">
                <div className="w-11/12 md:w-8/12 mx-auto">
                    <div className="w-full">
                        <h1 className="font-lale text-2xl font-semibold">ورود</h1>
                        <p className="text-zinc-500 mt-2">خوش آمدید! فروشگاه ما آماده خدمت رسانی به شماست.</p>
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
                                <label htmlFor="email">
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        type="email"
                                        label="ایمیل"
                                        isClearable
                                        isRequired
                                        isInvalid={isInvalid && !!errors.email}
                                        {...register("email", {
                                            required: "لطفا ایمیل خود را وارد کنید."
                                        })}
                                    />
                                </label>
                                {
                                    errors.email &&
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="ml-1" size={15} />{errors.email.message}</p>
                                }
                            </div>
                            <div className="w-full mt-4 relative">
                                <label htmlFor="password" >
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        label="کلمه عبور"
                                        isRequired
                                        isInvalid={isInvalid && !!errors.password}
                                        endContent={
                                            <button type="button" className="focus:outline-none" onClick={() => toggleVisibility()}>
                                                {
                                                    isVisiblePassword ? <FaEye /> : <FaEyeSlash />
                                                }
                                            </button>
                                        }
                                        type={isVisiblePassword ? "text" : "password"}
                                        {...register("password", {
                                           required: "لطفا کلمه عبور خود را وارد کنید." 
                                        })}
                                    />
                                </label>
                                {
                                    errors.password && 
                                    <p className="flex items-center text-xs text-start text-red-600 mt-1"><VscError className="ml-1" size={15} />{errors.password.message}</p>
                                }
                            </div>
                            <div className="w-full text-end mt-4">
                                <span className="cursor-pointer text-sm text-blue-400 hover:text-blue-500">کلمه عبور خود را فراموش کرده‌اید ؟</span>
                            </div>
                            <div className="w-full mt-7">
                                <Button
                                    type="submit"
                                    color="default"
                                    className="w-full bg-black text-white dark:bg-[#C6C7F8] dark:text-black"
                                >
                                    ورود
                                </Button>
                            </div>
                        </form>
                        <div className="w-full mt-7">
                            <p className="text-zinc-500">هنوز عضو فروشگاه نشده‌اید؟ <Link to="/SignUp" className="text-blue-400 hover:text-blue-500 cursor-pointer">عضویت</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs mt-2 text-zinc-300">کلیه حقوق این وبسایت متعلق به تیم توسعه و طراحی ما می‌باشد. کپی نکن !</p>
        </div>
    );
};