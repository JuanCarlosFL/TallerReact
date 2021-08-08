import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { CharacterVM } from '../vm';

interface Props {
    characterFilter: string;
    setCharacterFilter: (character: string) => void;
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
});


export const RickMortySearch: React.FC<Props> = props => {
    const { setCharacterFilter, characterFilter} = props;
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField label="Buscar personaje" value={characterFilter} onChange={(e) => setCharacterFilter(e.target.value)}/>
        </div>
    )
}