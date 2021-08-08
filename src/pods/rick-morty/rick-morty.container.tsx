import React from 'react';
import { RickMortyComponent } from './rick-morty.component';
import { getAll } from './api';
import { CharacterVM } from './vm';
import { mapCharacterListFromApiToVm } from './rick-morty.mapper';
import { RickMortySearch } from './components/rick-morty-search';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        marginTop: '1rem'
    },
    link: {
        textDecoration: 'none',
        textAlign: 'right'
    }
})

export const RickMortyContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<CharacterVM[]>([]);
    const [characterFilter, setCharacterFilter] = React.useState('');
    const [charactersFiltered, setCharactersFiltered] = React.useState<CharacterVM[]>([]);
    const [debounceFilter] = useDebounce(characterFilter, 2000);

    const classes = useStyles();

    const handleLoadData = async () => {
        const apiCharacters = await getAll();
        const viewModelCharacterList = mapCharacterListFromApiToVm(apiCharacters);
        setCharacters(viewModelCharacterList);
    }

    React.useEffect(() => {
        handleLoadData();
    }, [])

    React.useEffect(() => {
        const filteredList = characters.filter(character => character.name.toLowerCase().includes(debounceFilter.toLowerCase()))
        setCharactersFiltered(filteredList);
    }, [characters, debounceFilter])

    return(
        <>
            <div>
                <Typography className={classes.title} variant="h5">Personajes de Rick & Morty</Typography>
                <Link to="/ejercicio-basico" className={classes.link}>
                    <Typography>Volver al ejercicio básico</Typography>
                </Link>
            </div>
            <RickMortySearch characterFilter={characterFilter} setCharacterFilter={setCharacterFilter}/>
            <RickMortyComponent characters={charactersFiltered} />
        </>
    )
}