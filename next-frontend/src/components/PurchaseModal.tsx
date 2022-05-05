import * as React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Center,
} from '@chakra-ui/react';
import { CornerDecorations } from './library';

interface PurchaseModalProps {
    children: React.ReactNode;
    closeModal: () => void;
    isOpen: boolean;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({
    children,
    closeModal,
    isOpen,
}: PurchaseModalProps) => {
    return <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {}}>
        <ModalOverlay onClick={closeModal}/>
        <ModalContent
            borderRadius={'none'}
            border={'3px solid white'}
            padding={'20px'}>
            <CornerDecorations/>
            <Center flexDirection={'column'}>
                {children}
            </Center>
        </ModalContent>
    </Modal>
};

export default PurchaseModal;
