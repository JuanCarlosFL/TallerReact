import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface Props {
    company: string;
    setCompany: (company: string) => void;
    setPage: (page: number) => void;
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})

export const SearchMemberComponent: React.FC<Props> = props => {
    const {company, setCompany, setPage} = props;
    const [newCompany, setNewCompany] = React.useState(company);

    const classes = useStyles();

    const handleClick = () => {
        setPage(0);
        setCompany(newCompany);
    }

    return(
        <div className={classes.root}>
            <TextField
                label="Introduce empresa"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
            />
            <Button variant='contained' color='primary' onClick={handleClick}> 
                Buscar
            </Button>
        </div>
    )
}