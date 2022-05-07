import * as React from 'react';
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
}: TranslateAnimationProps) => {
    const attributes = shouldPlay ? {
        initial: {
            bottom: start,
        },
        animate: {
            bottom: end,
            transition: { delay, duration },
            transform,
        },
        transition: {
            duration,
        },
    } : {
        initial: {
            bottom: end,
            transform,
        }
    };
    return <motion.div
        className={className}
        style={{
            position: 'relative',
            ...style,
        }}
        {...attributes}>
        { children }
    </motion.div>;
} 

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
}: OpacityAnimationProps) => {
    const attributes = shouldPlay ? {
        initial: {
            opacity: start,
        },
        animate: {
            opacity: end,
            transition: { delay, duration },
            transform,
        },
        transition: { duration },
    } : {
        initial: {
            opacity: end,
        },
    };
    return <motion.div
        className={className}
        style={{
            position: 'relative',
            opacity: 1,
            ...style,
        }}
        {...attributes}>
        { children }
    </motion.div>;
}

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
}: GrowAnimationProps) => {
    const attributes = shouldPlay ? {
        initial: {
            width: start,
            border: borderStart,
        },
        animate: {
            width: end,
            transition: { delay, duration },
            transform,
            border: borderEnd,
        },
        transition: { duration },
    } : {
        initial: {
            transform,
            border: borderEnd,
            width: end,
        },
    };
    return <motion.div
        className={className}
        style={{
            position: 'relative',
            ...style,
        }}
        {...attributes}>
        { children }
    </motion.div>;
}