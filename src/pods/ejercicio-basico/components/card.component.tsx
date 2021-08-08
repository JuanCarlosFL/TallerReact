import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MemberDetailEntity } from '../vm';

interface Props {
    member: MemberDetailEntity;
    handleClick: () => void;
};

const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    media: {
      height: 300,
    },
    button: {
        justifyContent: 'center',
    }
});

export const CardComponent: React.FC<Props> = props => {
    const {member, handleClick} = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={member.avatar_url} title='Avatar member' />
            <CardContent>
                <Typography variant='h5'>{member.login}</Typography>
                <Typography>{member.bio}</Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button onClick={handleClick} >Back to list page</Button>
            </CardActions>
        </Card>
    )
}