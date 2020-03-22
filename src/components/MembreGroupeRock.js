import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


import Link from '@material-ui/core/Link';

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell style={{border:0}} component="th" scope="row">
    <Link href="/rockers/1" onClick={() => null}>
      {membre.name}
    </Link>
    </TableCell>
    <TableCell style={{border:0}} component="th" scope="row">
      {membre.birthDate}
    </TableCell>
  </TableRow>
);

export default MembreGroupeRock;
