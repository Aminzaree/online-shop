import CustomModal from "../../Components/Modal/customModal";
import { ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

export default function Terms(props) {

    const {isOpen, onOpenChange} = props;

    return (
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalHeader className="font-lale flex flex-col gap-1">قوانین استفاده از فروشگاه</ModalHeader>
            <ModalBody>
                <p>با استفاده از فروشگاه ما، شما موافقت خود را با شرایط و قوانین زیر اعلام می‌کنید:</p>
                <ul className="list-disc text-zinc-400">
                    <li>ثبت نام و حساب کاربری: برای استفاده بهینه از خدمات فروشگاه، کاربران باید یک حساب کاربری ثبت نام کنند و اطلاعات صحیح و کامل ارائه دهند.</li>
                    <li>قیمت‌ها و پرداخت‌ها: قیمت‌ها در فروشگاه به‌روز و دقیق اعلام می‌شوند. کاربران موظف به پرداخت هزینه‌های مربوط به خریدهای خود هستند.</li>
                    <li>تحویل کالا: زمان و شرایط تحویل کالا در صفحه محصول مشخص شده است. کاربران باید آدرس دقیق و صحیح خود را ارائه دهند.</li>
                    <li>بازگشت کالا: شرایط و مراحل بازگشت کالا طبق سیاست‌های فروشگاه مشخص شده است و کاربران باید با این شرایط آشنا شوند.</li>
                    <li>حفاظت از اطلاعات: تمامی اطلاعات شخصی کاربران تحت قوانین مربوط به حفظ حریم خصوصی محافظت می‌شود و در اختیار شخص ثالث قرار نمی‌گیرد.</li>
                </ul>
                <p>با استفاده از فروشگاه، شما تأیید می‌کنید که تمام قوانین و شرایط فوق را مطالعه و قبول کرده‌اید.</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onPress={() => onOpenChange(false)}>
                    بستن
                </Button>
            </ModalFooter>
        </CustomModal>
    );
};