import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { RickMortyCard } from './components/rick-morty.card';
import { CharacterVM } from './vm';

interface Props {
    characters: CharacterVM[];
}

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        marginTop: '1rem'
    },
    container: {
        display: 'grid',
        gap: '1rem',
        gridAutoRows: '22rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        marginBottom: '1rem',
    }
})

export const RickMortyComponent: React.FC<Props> = props => {
    const {characters} = props;
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                { characters && 
                    characters.map(character => <RickMortyCard key={character.id} character={character}/>)
                }
            </div>
        </>
    )
}