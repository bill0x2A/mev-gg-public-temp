import * as React from 'react';
import {
    Button,
} from '@chakra-ui/react';
import classes from './styles/PrettyButton.module.css';
import { CornerDecorations } from './CornerBox';

interface PrettyButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const PrettyButton: React.FC<PrettyButtonProps> = ({
    onClick,
    children,
}: PrettyButtonProps) => {
    return <Button
        _hover={{background: 'rgb(36, 42, 54)'}}
        // _focus={{outline: 'none', background: 'rgb(36, 42, 54)'}}
        fontSize={'24px'}
        onClick={onClick}
        minWidth={'150px'}
        padding='32px 48px'
        background='rgb(26, 32, 44)'
        border={'3px solid white'}
        borderRadius={'none'}>
        <CornerDecorations/>
        {children}
    </Button>
}

export default PrettyButton;
