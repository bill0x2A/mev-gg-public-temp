import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface AnimationProps {
    className?: string;
    shouldPlay: boolean;
    delay: number;
    duration?: number;
    transform?: string;
    style?: {[key: string]: string};
    children: React.ReactNode;
}

type TranslateAnimationProps = AnimationProps & { start?: string; end?: string; }
type OpacityAnimationProps = AnimationProps & { start?: number; end?: number; }
type GrowAnimationProps = AnimationProps & {
        start?: string | 0;
        end?: string;
        borderStart?: string;
        borderEnd?: string
    }

export const TranslateAnimation: React.FC<TranslateAnimationProps> = ({
    className,
    shouldPlay,
    delay,
    duration,
    transform,
    start,
    end = '0px',
    style,
    children,
}: TranslateAnimationProps) => shouldPlay ? <motion.div
    className={className}
    style={{
        position: 'relative',
        ...style,
    }}
    initial={{
        bottom: start,
    }}
    animate={{
        bottom: end,
        transition: { delay, duration },
        transform,
    }}
    transition={{ duration }}>
    { children }
</motion.div> : <Box
    bottom={end}
    className={className}
    position={'relative'}
    { ...style }
    transform={transform}>
    { children }
</Box>;

export const OpacityAnimation: React.FC<OpacityAnimationProps> = ({
    className,
    shouldPlay,
    delay,
    duration,
    transform,
    start = 0,
    end = 1,
    style,
    children,
}: OpacityAnimationProps) => shouldPlay ? <motion.div
    className={className}
    style={{
        position: 'relative',
        ...style,
    }}
    initial={{
        opacity: start,
    }}
    animate={{
        opacity: end,
        transition: { delay, duration },
        transform,
    }}
    transition={{ duration }}>
    { children }
</motion.div> : <Box
    opacity={end}
    className={className}
    position={'relative'}
    { ...style }
    transform={transform}>
    { children }
</Box>;

export const GrowAnimation: React.FC<GrowAnimationProps> = ({
    className,
    shouldPlay,
    delay,
    duration,
    transform,
    start = 0,
    end = '100%',
    borderStart = '0px solid white',
    borderEnd = '3px solid white',
    style,
    children,
}: GrowAnimationProps) => shouldPlay ? <motion.div
    className={className}
    style={{
        position: 'relative',
        ...style,
    }}
    initial={{
        width: start,
        border: borderStart,
    }}
    animate={{
        width: end,
        transition: { delay, duration },
        transform,
        border: borderEnd,
    }}
    transition={{ duration }}>
    { children }
</motion.div> : <Box
    className={className}
    position={'relative'}
    { ...style }
    transform={transform}
    width={end}
    border={borderEnd}>
    { children }
</Box>;