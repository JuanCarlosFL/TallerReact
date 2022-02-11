import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { PictureInfo, getImageList } from './api';
import { ImageListComponent } from './image-list.component';
import { useStyles } from './image-list.styles';

export const ImageListContainer: React.FC = () => {
    const [animals, setAnimals] = React.useState<PictureInfo[]>([]);
    const classes = useStyles();

    const handleLoadData = async () => {
        await getImageList().then(setAnimals);
    }

    React.useEffect(()=> {
        handleLoadData();
    }, []);

    return (
        <div className={classes.root}>
            <ImageListComponent animals={animals}/>
        </div>
    )
}