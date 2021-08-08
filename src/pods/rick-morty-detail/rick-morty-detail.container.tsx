import React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../rick-morty/api';
import { mapCharacterApiToVM } from '../rick-morty/rick-morty.mapper';
import { CharacterVM } from '../rick-morty/vm';
import { RickMortyDetailComponent } from './rick-morty-detail.component';

export const RickMortyDetailContainer: React.FC = () => {
    const [character, setCharacter] = React.useState<CharacterVM>(null);

    const {id} = useParams<{id: string}>();
    
    const handleLoadCharacter = async (id: number) => {
        const characterApi =  await getCharacter(id);
        const character = mapCharacterApiToVM(characterApi);
        setCharacter(character)
    };

    React.useEffect(()=> {
        handleLoadCharacter(parseInt(id));
    }, [])

    return (
        <>
            <RickMortyDetailComponent character={character}/>
        </>
    )
}