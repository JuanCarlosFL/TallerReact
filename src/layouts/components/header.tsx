import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: '10vh',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  container: {
    height: '100%',
  }
});

export const HeaderComponent: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.container}>
            <Typography variant="h6" className={classes.title}>
                Laboratorio React - Lemoncode
            </Typography>
            </Toolbar>
        </AppBar>
    )
}