import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { CardComponent } from "./components";
import { MemberDetailEntity } from "./vm";


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  }
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(null);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push('/ejercicio-basico');
  }

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(response => response.json())
      .then(setMember);
  }, [id]);

  return (
    <>
      { member && (
        <div className={classes.container}>
          <CardComponent member={member} handleClick={handleClick}/>
        </div>
        )
      }
    </>
  );
};
