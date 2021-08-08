import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';
import { CharacterVM } from '../../rick-morty/vm';

interface Props {
    character: CharacterVM;
};

const useStyles = makeStyles({
    root: {
      minWidth: 345,
    },
    media: {
      height: 140,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
    }
});

export const RickMortyDetailCard: React.FC<Props> = props => {
    const {character} = props;
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push(`/rick-morty`)
    }

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={character.url}
                        title={character.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            {character.name}
                        </Typography>
                        <Typography variant="h6" >
                            Status: {character.status == 'Alive' ? '😀' : character.status == 'Dead' ? '💀' : '🤷‍♂️'} - {character.species}
                        </Typography>
                        <Typography variant="h6">
                            Gender: {character.gender == 'Male' ? '👨' : character.gender === 'Female' ? '👩' : '🤷‍♂️'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                    <Button size="small" variant="contained" color="primary" onClick={handleClick}>
                        Volver
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}