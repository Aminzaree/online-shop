import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";


export default function customModal(props) {

    const {isOpen, onOpenChange, size, children} = props;
    // Guide: backdrops = "opaque" <==> "blur" <==> "transparent"

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size} backdrop="blur">
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};