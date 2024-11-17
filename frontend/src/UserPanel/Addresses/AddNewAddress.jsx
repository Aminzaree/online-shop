import CustomModal from "../../Components/Modal/customModal";
import { ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useDisclosure, Select, SelectItem } from "@nextui-org/react";

export default function AddNewAddress(props) {

    const { isOpen, onOpenChange } = props;

    return (
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalHeader className="font-lale flex flex-col gap-1">ثبت آدرس جدید</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Select
                            label="استان"
                            color="primary"
                            className="flex justify-center"
                        >
                            <SelectItem key="tehran">
                                تهران
                            </SelectItem>
                        </Select>
                        <Select
                            label="شهر"
                            color="primary"
                            className="flex justify-center"
                        >
                            <SelectItem key="tehran">
                                تهران
                            </SelectItem>
                        </Select>
                    </div>
                    <div className="w-full mt-4">
                        <Select
                            label="محله"
                            color="primary"
                            className="flex justify-center"
                        >
                            <SelectItem key="tehran">
                                تجریش
                            </SelectItem>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label htmlFor="number">
                            <Input
                                size={"md"}
                                variant={"bordered"}
                                type="text"
                                name="number"
                                label="پلاک"
                                isClearable
                                isRequired
                                color="primary"
                                className="mt-4"
                            />
                        </label>
                        <label htmlFor="number">
                            <Input
                                size={"md"}
                                variant={"bordered"}
                                type="text"
                                name="number"
                                label="واحد" 
                                isClearable
                                isRequired
                                color="primary"
                                className="mt-4"
                            />
                        </label>
                        <label htmlFor="zipCode">
                            <Input
                                size={"md"}
                                variant={"bordered"}
                                type="text"
                                name="zipCode"
                                label="کد پستی"
                                isClearable
                                isRequired
                                color="primary"
                                className="mt-4"
                            />
                        </label>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
                  بستن
                </Button>
                <Button color="primary">
                    ثبت
                </Button>
            </ModalFooter>
        </CustomModal>
    );
};