import React from 'react';
import { AppLayout } from '../layouts/app.layout';
import { RickMortyContainer } from '../pods/rick-morty/rick-morty.container';

export const RickMortyScene: React.FC = () => {
    return (
      <AppLayout>
          <RickMortyContainer />
      </AppLayout>
    )
}