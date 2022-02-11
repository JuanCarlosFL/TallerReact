import React from 'react';
import { CartComponent } from './cart.component';
import { useStyles } from './cart.styles';

export const CartContainer: React.FC = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <CartComponent />
        </div>
    )
}