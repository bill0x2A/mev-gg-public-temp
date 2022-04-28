import * as React from 'react';
import clsx from 'clsx';
import classes from './styles/ShinyButton.module.css';

interface ShinyButtonProps {
    onClick: (variable?: any) => any;
    text: string;
    styles?: {
        container?: string;
        button?: string;
    };
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
    onClick,
    text,
    styles,
}) => { 
    return <div className={clsx(classes.buttonContainer, styles && styles.container)}>
        <button
            onClick={onClick}
            className={clsx(classes.button, styles && styles.button)}>
            {text}
        </button>
        <div className={classes.shine}></div>
    </div>
};

export default ShinyButton;