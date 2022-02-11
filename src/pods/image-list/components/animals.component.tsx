import React from 'react';
import { PictureInfo } from '../api';
import { AnimalsCard } from './animals-card.component';

interface Props {
    animals: PictureInfo[];
}

export const AnimalsComponent: React.FC<Props> = props => {
    const {animals} = props;
    console.log(animals)

    return (
        <>
            {animals && animals.map(animal => <AnimalsCard key={animal.id} animal={animal} />)}
        </>
    )
}