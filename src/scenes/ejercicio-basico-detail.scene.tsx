import React from 'react';
import { AppLayout } from '../layouts/app.layout';
import { DetailPage } from '../pods/ejercicio-basico/detail';

export const EjercicioBasicoDetailScene: React.FC = () => {
    return (
        <AppLayout> 
            <DetailPage />
        </AppLayout>
       
    )
}