import React from 'react';
import { RickMortyCard } from '../rick-morty/components/rick-morty.card';
import { CharacterVM } from '../rick-morty/vm';
import { RickMortyDetailCard } from './components/rick-morty-detail.card';

interface Props {
    character: CharacterVM;
};

export const RickMortyDetailComponent: React.FC<Props> = props => {

    const { character } = props;

    return (
        <>
            {
                character && <RickMortyDetailCard character={character} />
            }
            
        </>
    )
}