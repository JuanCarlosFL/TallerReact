import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { MemberEntity } from '../vm';

interface Props {
    member: MemberEntity;
}

export const RowComponent: React.FC<Props> = props => {
    const {member} = props;

    return (
        <TableRow>
            <TableCell align="right">
                <img src={member.avatar_url} style={{ width: "2rem" }} />
            </TableCell>
            <TableCell align="right">{member.id}</TableCell>
            <TableCell align="right">
                <Link to={generatePath("/ejercicio-basico-detail/:id", { id: member.login })} style={{textDecoration: 'none'}}>
                    {member.login}
                </Link>
            </TableCell>
        </TableRow>
    )
}