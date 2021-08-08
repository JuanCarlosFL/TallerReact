import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { useContext } from "react";
import { CompanyContext } from "../../core/company";
import { RowComponent } from "./components";
import { SearchMemberComponent } from "./components/search-member.component";
import { MemberEntity } from "./vm";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
  },
  title: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  }
})

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {company, setCompany} = useContext(CompanyContext);

  const classes = useStyles();

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => response.json())
      .then(setMembers)
  }, [company]);

  return (
    <>
      <div className={classes.title}>
        <h2 >Ejercicio Básico React</h2>
        <SearchMemberComponent company={company} setCompany={setCompany}/>
        <Link to="/rick-morty" className={classes.link}>
          <Typography>Ir a la página de Rick&Morty</Typography>
        </Link>
      </div>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="list table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Avatar</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <RowComponent member={member} key={member.id}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
};
