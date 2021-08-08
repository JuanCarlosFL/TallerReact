import React from 'react';
import { MenuContainer } from '../pods/menu/menu.container';
import { AppLayout } from '../layouts/app.layout';

export const MenuScene: React.FC = () => {
    return (
      <AppLayout>
        <MenuContainer />
      </AppLayout>
    )
}