import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { TbBuildingWarehouse, TbShoppingCart } from "react-icons/tb";

export default function Favorite() {

    const favoriteList = [
        {
            id: 1,
            label: "گوشی موبایل iphone 16",
            inventory: true,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        },
        {
            id: 2,
            label: "گوشی موبایل iphone 16 pro",
            inventory: false,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        },
        {
            id: 3,
            label: "گوشی موبایل iphone 16 pro",
            inventory: true,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        },
        {
            id: 4,
            label: "گوشی موبایل iphone 16 pro",
            inventory: false,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        },
        {
            id: 5,
            label: "گوشی موبایل iphone 16 pro",
            inventory: true,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        }, 
        {
            id: 6,
            label: "گوشی موبایل iphone 16 pro",
            inventory: false,
            price: "۴۰,۱۹۹,۰۰۰",
            image: "https://nextui.org/images/hero-card-complete.jpeg"
        },
    ]

    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    favoriteList.map((item, index) => {
                        const { id, label, inventory, price, image } = item;
                        return (
                            <Card
                                key={id}
                                isHoverable
                                className="w-full py-4"
                            >
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={image}
                                    />
                                </CardHeader>
                                <CardBody className="overflow-visible text-start py-2 px-4">
                                    <p className="pt-1">{label}</p>
                                    <small className={`flex items-center pt-2 ${inventory ? "text-default-400" : "text-red-600"}`}><TbBuildingWarehouse className="me-1" />{inventory ? "موجود در انبار" : "ناموجود در انبار"}</small>
                                    <h4 className="font-bold text-large text-end">{price} تومان</h4>
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
                        )
                    })
                }
            </div>
        </div>
    );
};