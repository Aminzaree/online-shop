import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instanse } from "../../../Services/instanse"
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import animationData from "../../../assets/animations/Animation - Verify.json"
import aimationData2 from "../../../assets/animations/Animation - VerifyOk.json"

export default function VerifyAccount() {

      const [verify, setVerify] = useState(false)

      const navigate = useNavigate()

      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
            }
      };

      const defaultOptions2 = {
            loop: true,
            autoplay: true,
            animationData: aimationData2,
            rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
            }
      }

      const location = useLocation();

      useEffect(() => {
            const verifyUser = async () => {
                  try {
                        const queryParams = new URLSearchParams(location.search);
                        const code = queryParams.get('code');

                        if (code) {
                              const response = await instanse.post(`Account/${code}`);
                              const { isSuccess, value, message } = response.data;

                              if (isSuccess) {
                                    setVerify(true);

                                    setTimeout(() => {
                                          navigate("/")
                                    }, 2000)

                                    console.log(response.data);
                                    toast.success(message || "حساب کاربری شما با موفقیت فعال شد");
                              } else {
                                    setVerify(false);
                                    toast.error(message || " خطایی در فعال کردن کاربر ایجاد شده است.");
                              }
                        }
                  } catch (error) {
                        setVerify(false);
                        console.error(error);
                        toast.error("خطا در فعال کردن کاربر !");
                  }
            };

            verifyUser();

      }, [location]);


      return (
            <div className="w-full h-screen flex flex-col justify-center items-center mx-auto px-4 md:px-0">
                  {
                        verify
                              ?
                              <>
                                    <Lottie className="w-full md:w-1/2" options={defaultOptions2} height="300px" width="300px" />
                                    <h1 className="sm:text-2xl font-bold text-[#5358fd]">کاربر گرامی! حساب کاربری شما با موفقیت تایید شد.</h1>
                                    <h3 className="sm:text-xl mt-2">به فروشگاه ما خوش آمدید.</h3>
                              </>
                              :
                              <>
                                    <Lottie className="w-full md:w-1/2" options={defaultOptions} height="300px" width="300px" />
                                    <h1 className="sm:text-2xl font-bold -m-10 text-[#007d7c]">درحال بررسی حساب شما هستیم، لطفا شکیبا باشید...</h1>
                              </>
                  }



            </div>
      );
};