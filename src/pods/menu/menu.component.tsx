import Button from '@material-ui/core/Button';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import ImageIcon from '@material-ui/icons/Image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        textAlign: 'center',
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
    },
    icon: {
        width: '30vw',
        fontSize: '15vw',
        margin: '0.5rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        width: '33%',
        color: 'darkBlue',
    }
});

export const MenuComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Laboratorios React - Lemoncode</h1>
            <div className={classes.container}>
                <Link
                    to="/ejercicio-basico"
                    className={classes.items}
                >
                    <GitHubIcon className={classes.icon}  />
                    <Typography variant="h5">Ejercicio Básico</Typography>
                    <Typography variant="h6">Lista usuarios Github</Typography>
                    
                </Link>
                <Link
                    to="/image-list"
                    className={classes.items}
                >
                    <ImageIcon className={classes.icon}  />
                    <Typography variant="h5">Ejercicio Opcional 1</Typography>
                    <Typography variant="h6">Listado imágenes</Typography>
                </Link>
                <Link
                    to="/ejercicio-basico"
                    className={classes.items}
                >
                    <ShoppingCartIcon className={classes.icon}  />
                    <Typography variant="h5">Ejercicio Opcional 2</Typography>
                    <Typography variant="h6">Pedido desafío</Typography>
                </Link>
                
            </div>
        </div>
    )
}