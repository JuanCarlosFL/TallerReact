import React from 'react';
import { FooterComponent, HeaderComponent } from './components';
import * as classes from './app.layout.styles';


export const AppLayout: React.FC = ({ children }) => (

    <div className={classes.container} >
        <HeaderComponent />
            <main className={classes.main} >{children}</main>
        <FooterComponent />
    </div>
);