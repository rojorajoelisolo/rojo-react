import React from "react";
import "./GeneralitesGroupRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const GeneralitesGroupRock = ({ dictionnary }) => (
    <TableRow>
        <TableCell style={{border:0}} component="th" scope="row">
            <strong>{dictionnary.key}</strong>
        </TableCell>
        <TableCell style={{border:0}} component="th" scope="row">
            {dictionnary.value}
        </TableCell>
    </TableRow>
);

export default GeneralitesGroupRock;
