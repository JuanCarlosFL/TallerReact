import React from 'react';
import { AppLayout } from '../layouts/app.layout';
import { RickMortyDetailContainer } from '../pods/rick-morty-detail';

export const RickMortyDetailScene: React.FC = () => {
    return (
        <AppLayout> 
            <RickMortyDetailContainer />
        </AppLayout>
       
    )
}