import React from 'react';
import { AppLayout } from '../layouts/app.layout';
import { CartContainer } from '../pods/cart';
import { ImageListContainer } from '../pods/image-list';

export const ImageListScene: React.FC = () => {
    return (
        <AppLayout>
            <div style={{display: 'flex'}}>
                <ImageListContainer />
                <CartContainer />
            </div>
        </AppLayout>
    )
}