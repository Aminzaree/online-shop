import { useEffect, useState } from "react";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { VscError } from "react-icons/vsc";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { instanse } from "../../../Services/instanse";
import { toast } from "react-toastify";
import CheckEmailPassword from "./checkEmailPassword";


export default function ForgetPassword() {

    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state || location.state.fromSignIn) {
            navigate("/signIn")
        }        
    }, [location, navigate])

    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const onSubmit = async (data) => {

        const email = data.email;

        try {
            setIsLoading(true);
            const response = await instanse.post(`Account/ForgetPassword/${email}`);
            const {isSuccess, value, message} = response.data;

            if(isSuccess) {
                setIsModalOpen(true);
                toast.success(message || "درخواست ایمیل شما با موفقیت ارسال شد")
            } else {
                value.map((item) => {
                    toast.error(item)
                });
            }
            
        } catch (error) {

            console.error(error);
            console.log(error);
            
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center mx-auto px-4 md:px-0" >
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 mx-auto text-center py-8 p-4 bg-white dark:bg-[#18181B] rounded-3xl">
                <div className="w-11/12 md:w-8/12 mx-auto">
                    <div className="w-full">
                        <h1 className="font-lale text-2xl font-semibold">بازیابی کلمه عبور</h1>
                        <p className="text-zinc-500 mt-2">لطفا جهت بازیابی کلمه عبور، ایمیل خود را وارد کنید.</p>
                    </div>
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-7">
                            <div className="w-full mt-4 relative">
                                <label htmlFor="email" >
                                    <Input
                                        size={"md"}
                                        variant={"bordered"}
                                        type="email"
                                        label="لطفا ایمیل خود را وارد کنید"
                                        isClearable
                                        isRequired
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
                            <div className="w-full mt-7">
                                <Button
                                    type="submit"
                                    color="default"
                                    className="w-full bg-black text-white dark:bg-[#C6C7F8] dark:text-black mb-7"
                                >
                                    بازیابی کلمه عبور
                                </Button>
                                <Link to="/signIn" className="text-blue-400">بازگشت</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-xs mt-2 text-zinc-300">کلیه حقوق این وبسایت متعلق به تیم توسعه و طراحی ما می‌باشد. کپی نکن !</p>

            {/* Check Email Password Setup */}
            <CheckEmailPassword isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    );
};