import * as React from 'react';
import classes from './styles/BackgroundGrid.module.css';

interface BackgroundGridProps {
    top: number | string;
    left: number | string;
    inverted?: boolean;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({
    top,
    left,
    inverted,
}: BackgroundGridProps) => {

    const horizontalArray = new Array(16).fill('defacto');
    const verticalArray = new Array(40).fill('defacto');

    const verticals = React.useMemo(() => (
        verticalArray.map((n, i) => (
            <div key={`${i}-${n}-vertiGrid`}
                style={{
                gridColumnStart: i + 1,
                gridColumnEnd: i + 2,
                gridRowStart: 1,
                gridRowEnd: 31,
            }} className={classes.vertical}/>
        ))
    ), []);

    const horizontals = React.useMemo(() => (
        horizontalArray.map((n, i) => (
            <div key={`${i}-${n}-horizGrid`}
                style={{
                gridRowStart: i + 1,
                gridRowEnd: i + 2,
                gridColumnStart: 1,
                gridColumnEnd: 100,
            }} className={classes.horizontal}/>
        ))
    ), []);

    return <div style={ inverted ? { transform : 'rotate(180deg)'} : {}}><div style={{top, left}} className={classes.grid}>
        {horizontals}
        {verticals}
    </div>
    </div>
};

export default BackgroundGrid;
