import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function ListAlign(items) {
    var list = '';
    items.map((item, key) => 
        list += item + ' - '
    );
    return list.substring(0, list.length - 3);
}

const GroupMember = ({ member }) => (
    <li style={{marginBottom:15}}>
        <a href="#/search/infos/member/">{member.name}</a>
        <br></br>_ Instruments : {ListAlign(member.instruments)}
        <br></br>_ Gender : {member.gender}
        <br></br>_ Birthdate : {member.birthDate}
    </li>
);

export default GroupMember;
    