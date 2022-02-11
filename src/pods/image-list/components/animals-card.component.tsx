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
import { PictureInfo } from '../api';

interface Props {
    animal: PictureInfo;
};

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    }
});

export const AnimalsCard: React.FC<Props> = props => {
    const {animal} = props;
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
       
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={animal.picUrl}
                    title={animal.title}
                />
                <CardContent>
                    <span>
                        {animal.title}
                    </span>

                </CardContent>
            </CardActionArea>
            {/* <CardActions className={classes.button}>
                <Button size="small" variant="contained" color="primary" onClick={handleClick}>
                    Ver Perfil
                </Button>
            </CardActions> */}
        </Card>
    )
}