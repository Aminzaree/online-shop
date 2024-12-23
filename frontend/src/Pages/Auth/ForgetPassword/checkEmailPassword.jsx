import CustomModal from "../../../Components/Modal/customModal";
import { ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import Lottie from "react-lottie";
import animationData from "../../../assets/animations/Animation - Check Email.json"

export default function CheckEmailPassword(props) {

    const {isOpen, onOpenChange} = props;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalBody>
                <div className="w-full text-center py-9">
                    <p className="font-lale text-2xl pb-4">لطفا ایمیل خود را بررسی کنید!</p>
                    <p>کاربر گرامی! جهت بازیابی کلمه عبور خود وارد ایمیلتان شوید و با کلیک بر روی دکمه "ثبت کلمه عبور جدید" کلمه عبور جدید خود را تنظیم کنید.</p>
                    <Lottie className="w-full md:w-1/2" options={defaultOptions} height="200px" width="200px" />
                    <Button color="primary" variant="flat">
                        باز کردن ایمیل
                    </Button>  
                </div>
            </ModalBody>
        </CustomModal>
    );
};