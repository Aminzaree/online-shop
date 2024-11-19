import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../Modal/customModal";
import { Button, Checkbox, Input, Link, ModalBody, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { instanse } from "../../Services/instanse";
import { toast } from "react-toastify";

export default function RouteGuard({ children }) {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const hideCloseButton = true;
    const [loading, setLoading] = useState(true); // حالت بارگذاری
    const [isAuthenticated, setIsAuthenticated] = useState(false); // وضعیت احراز هویت

    useEffect(() => {
        const userToken = Cookies.get("userToken");

        if (!userToken) {
            onOpen();
            setLoading(false);
            return;
        }

        // اعتبارسنجی توکن از سمت سرور
        (async () => {
            try {
                const response = await instanse.get("/Account/ValidateToken", {
                    headers: { Authorization: `Bearer ${userToken}` },
                });

                if (response.data.isValid) {
                    setIsAuthenticated(true);
                } else {
                    Cookies.remove("userToken");
                    onOpen();
                }

            } catch (error) {
                Cookies.remove("userToken");
                onOpen();
            } finally {
                setLoading(false); // بارگذاری پایان یافته
            }
        })();
    }, [onOpen]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await instanse.post("Account/Login", data);
            const { isSuccess, message, value } = response.data;

            if (isSuccess) {
                Cookies.set("userToken", value.token, { expires: 1 });
                Cookies.set("userID", value.userId, { expires: 1 });
                toast.success(message || "ورود با موفقیت انجام شد");
                setIsAuthenticated(true);
                onClose();
            } else {
                toast.error(message || "نام کاربری یا کلمه عبور اشتباه است.");
            }
        } catch (error) {
            toast.error("خطایی رخ داده است!");
        }
    };

    // نمایش حالت بارگذاری اولیه
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>در حال بارگذاری...</p>
            </div>
        );
    }

    // نمایش مودال لاگین اگر کاربر احراز هویت نشده باشد
    if (!isAuthenticated && isOpen) {
        return (
            <CustomModal isOpen={isOpen} hideCloseButton={hideCloseButton}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader className="font-lale flex flex-col gap-1">
                        وارد شوید
                    </ModalHeader>
                    <ModalBody>
                        <div className="w-full mt-4">
                            <Input
                                autoFocus
                                label="ایمیل"
                                type="email"
                                placeholder="ایمیل را وارد کنید."
                                variant="bordered"
                                endContent={<MdAlternateEmail />}
                                {...register("email", {
                                    required: "لطفا ایمیل خود را وارد کنید.",
                                })}
                                isInvalid={errors.email}
                                errorMessage={errors.email?.message}
                            />
                        </div>
                        <div className="w-full mt-4">
                            <Input
                                label="کلمه عبور"
                                placeholder="کلمه عبور را وارد کنید."
                                variant="bordered"
                                type="password"
                                endContent={<RiLockPasswordLine />}
                                {...register("password", {
                                    required: "لطفا کلمه عبور خود را وارد کنید.",
                                })}
                                isInvalid={errors.password}
                                errorMessage={errors.password?.message}
                            />
                        </div>
                        <div className="flex py-2 px-1 justify-between">
                            <Checkbox classNames={{ label: "text-small" }}>
                                مرا به خاطر بسپار
                            </Checkbox>
                            <Link color="primary" href="#" size="sm">
                                فراموشی رمز عبور؟
                            </Link>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">
                            ورود
                        </Button>
                    </ModalFooter>
                </form>
            </CustomModal>
        );
    }

    // نمایش محتوای محافظت‌شده اگر کاربر احراز هویت شده باشد
    return <>{children}</>;
}
