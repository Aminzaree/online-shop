import { Card, CardHeader, CardBody, Image, CardFooter, Button, Pagination } from "@nextui-org/react";
import { MdFavoriteBorder } from "react-icons/md";
import { TbBuildingWarehouse, TbShoppingCart, TbShoppingCartPlus } from "react-icons/tb";
import ProductList from './ProductList.json'

export default function Index() {


    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 pt-2 pb-10">
                {
                    ProductList.map((item, index) => {
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
                                    <h6 className="pt-1">{label}</h6>
                                    <small className={`flex items-center py-3 ${inventory ? "text-default-400" : "text-red-600"}`}><TbBuildingWarehouse className="me-1" />{inventory ? "موجود در انبار" : "ناموجود در انبار"}</small>
                                    <h5 className="font-semibold text-large text-end">{price} تومان</h5>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        color="danger"
                                        variant="flat"
                                        isIconOnly
                                        className="w-1/6 me-2"
                                    >
                                        <MdFavoriteBorder size={20} />
                                    </Button>
                                    <Button
                                        color="success"
                                        variant="flat"
                                        isIconOnly
                                        className="w-1/6 me-2"
                                    >
                                        <TbShoppingCartPlus  size={20} />
                                    </Button>
                                    
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>

            {/* Start Pagination */}
            <div className="w-full flex justify-center">
                <Pagination
                    total={10}
                    initialPage={1}
                    
                />
            </div>
        </div>
    );
};