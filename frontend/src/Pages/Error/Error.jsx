import Lottie from "react-lottie"
import animationData from '../../assets/animations/Animation - 1723746139591.json'
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Error() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="w-full md:w-10/12 h-screen flex justify-between items-center mx-auto px-4 md:px-0">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                <h3 className="font-lale text-4xl">صفحه‌ای یافت نشد!</h3>
                <Link to="/" className="mt-4">
                    <Button color="primary" variant="flat">بازگشت به صفحه اصلی</Button>
                </Link>  
            </div>
            <Lottie className="w-full md:w-1/2" options={defaultOptions} height="700px" width="700px" style={{ margin: "0" }} />
        </div>
    )
}