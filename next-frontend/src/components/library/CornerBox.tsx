import * as React from 'react';
import {
    Box,
} from '@chakra-ui/react';

interface CornerBoxProps {
    padding?: number;
    size?: number;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
}

interface CornerDecorationProps {
    padding?: number;
    size?: number;
}

export const CornerBox: React.FC<CornerBoxProps> = ({
    padding = 12,
    size = 6,
    top,
    bottom,
    left,
    right,
}: CornerBoxProps) => {
    return <Box
        {...(top ? { top: 0 } : {})}
        {...(bottom ? { bottom: 0} : {})}
        {...(left ? { left: 0 } : {})}
        {...(right ? { right: 0 } : {})}
        zIndex={10}
        position='absolute'
        width={`${padding}px`}
        height={`${padding}px`}>
        <Box
            {...(top ? { bottom: 0 } : {})}
            {...(bottom ? { top: 0} : {})}
            {...(left ? { right: 0 } : {})}
            {...(right ? { left: 0 } : {})}
            background='white'
            position={'absolute'}
            width={`${size}px`}
            height={`${size}px`}/>
    </Box>
};

export const CornerDecorations: React.FC<CornerDecorationProps> = ({
    padding,
    size,
}: CornerDecorationProps) => (
    <>
        <CornerBox {...( padding ? { padding } : {})} {...( size ? { size } : {})} top left/>
        <CornerBox {...( padding ? { padding } : {})} {...( size ? { size } : {})} top right/>
        <CornerBox {...( padding ? { padding } : {})} {...( size ? { size } : {})} bottom left/>
        <CornerBox {...( padding ? { padding } : {})} {...( size ? { size } : {})} bottom right/>
    </>
);
