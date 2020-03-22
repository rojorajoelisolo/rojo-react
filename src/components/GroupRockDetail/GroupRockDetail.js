import React from "react";

import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

import metallica from "../../data/mettalica";

import GeneralitesGroupRock from "../GeneralitesGroupRock/GeneralitesGroupRock";
import GroupMember from "../GeneralitesGroupRock/GroupMember";
import Album from "../Collection/Album";

import {get} from '../Util/Util';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    divAll: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      flexDirection: 'column'
    },
    divFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
}));

function ListAlign(items) {
  var list = '';
  items.map((item, key) => 
    list += item + ' - '
  );
  return list.substring(0, list.length - 3);
}

function Dictionnary(key, value) {
  return { key, value };
}

const GroupRockDetail = () => {

  const classes = useStyles();

  let infosGenerales = [];

  let membersList = [];
  metallica.members.map(item => (
    membersList.push(<GroupMember member={item} />)
  ));

  const memberSection = 
  <span style={{alignItems:'center', backgroundSize: 'auto'}}>
    <details style={{alignSelf:'flex-start', backgroundColor:'rgb(238, 238, 238)', flexBasis:'0%',
    flexDirection:'column', flexGrow:1, flexShrink:1}}>
      <summary style={{boxSizing:'border-box', cursor:'pointer', fontFamily:'Roboto, sans-serif',
      padding:15, margin:0}}>See members</summary>
      <ul style={{fontFamily:'Roboto, sans-serif', fontSize:14, height:'auto', padding:15,
      margin:0, lineHeight:1.5, listStyleType:'none'}}>
        {membersList}
      </ul>
    </details>
  </span>;

  const dictionnaries = [
    Dictionnary('Birthdate', metallica.lifeSpan.begin),
    Dictionnary('Location', ListAlign(metallica.locationInfo)),
    Dictionnary('Genre', ListAlign(metallica.genres)),
    Dictionnary('Genre (DBpedia)', ListAlign(metallica.dbp_genre)),
    Dictionnary('Label', ListAlign(metallica.labels)),
    Dictionnary('Label (DBpedia)', ListAlign(metallica.recordLabel)),
    Dictionnary('Number of Deezer fans', metallica.deezerFans),
    Dictionnary('Associated artist(s)', ListAlign(metallica.associatedMusicalArtist)),
    Dictionnary('Members', memberSection)
  ];

  dictionnaries.map(item => (
    infosGenerales.push(<GeneralitesGroupRock dictionnary={item} />)
  ));

  let listCollections = [];
  metallica.albums.map(item => (
    listCollections.push(<Album album={item} />)
  ));

  let subjects = [];
  metallica.subject.map(item => (
    subjects.push(
      <a style={{color:'white', cursor:'pointer', display:'flex',
      fontFamily:'Roboto, sans-serif', fontSize:12, padding:20, textDecorationLine:'none'}}
        href="#">
          {item}
      </a>
    )
  ));

  return (
    <div className={classes.divAll}> 
        <div className={classes.divFlex} style={{backgroundColor:'white'}}>
          <Avatar>{metallica.name[0]}</Avatar>
          <img src={metallica.picture.medium} />
          <h1>{metallica.name}</h1>
        </div>

        <div>
          <p style={{
            marginLeft: '15%',
            marginRight: '15%',
          }}>
            {metallica.abstract}
          </p>
        </div>

        <div style={{
          display: 'flex',
          flex: 1,
          marginLeft: '15%',
          marginRight: '15%'
        }}>

          <Table size="small" style={{marginTop: 20}}>
            <TableHead>
              <TableRow>
                <TableCell style={{width:'25%'}}></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{background: '#fafafa'}}>
              {infosGenerales}
            </TableBody>
          </Table>

        </div>

        {listCollections}

        <nav style={{
          backgroundColor: 'rgb(168, 168, 168)',
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          marginTop:20,
          marginRight: '15%',
          marginLeft: '15%'
          }}>          
            {subjects}
        </nav>

    </div>
  );
};

export default GroupRockDetail;
