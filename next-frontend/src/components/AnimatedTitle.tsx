import * as React from 'react';
import classes from './styles/AnimatedTitle.module.css';
import { motion } from 'framer-motion';

const AnimatedTitle = () => {
    const text = 'MEV.GG';
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 3,
                staggerChildren: 0.09,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    return <motion.div
        style={{
            position: 'absolute',
        }}
        initial={{
            top: 'calc(50% - 1ch)',
            left: 'calc(50% - 6ch)',
        }}
        animate={{
            top: '0px',
            transition: { delay: 1 }
        }}>
        <motion.h3
            className={classes.titleText}
            variants={sentence}
            initial='hidden'
            animate='visible'>
            {text.split('').map((char, index) => <motion.span
                key={char + '-' + index}
                variants={letter}>
                {char}
            </motion.span>)}
        </motion.h3>
    </motion.div>
};

export default AnimatedTitle;
