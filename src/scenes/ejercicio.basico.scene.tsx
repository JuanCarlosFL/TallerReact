import React from 'react';
import { AppLayout } from '../layouts/app.layout';
import { ListPage } from '../pods/ejercicio-basico/list';

export const EjercicioBasicoScene: React.FC = () => {
    return (
        <AppLayout> 
            <ListPage />
        </AppLayout>
       
    )
}