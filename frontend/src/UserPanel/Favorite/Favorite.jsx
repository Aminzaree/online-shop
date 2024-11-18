import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { TbBuildingWarehouse, TbShoppingCart } from "react-icons/tb";

export default function Favorite() {
    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="w-full py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                        />
                    </CardHeader>
                    <CardBody className="overflow-visible text-start py-2 px-4">
                        <p className="pt-1">گوشی موبایل iphone 16</p>
                        <small className="flex items-center text-default-500 pt-2"><TbBuildingWarehouse className="me-1" /> موجود در انبار</small>
                        <h4 className="font-bold text-large text-end">۴۰,۱۹۹,۰۰۰ تومان</h4>
                    </CardBody>
                    <CardFooter>
                        <Button
                            color="danger"
                            variant="flat"
                            isIconOnly
                            className="w-1/6 me-2"
                        >
                            <MdDelete size={20} />
                        </Button>
                        <Button 
                            color="success" 
                            variant="ghost"
                            className="w-5/6"
                        >
                            <TbShoppingCart size={20} />
                            افزودن به سبد
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};