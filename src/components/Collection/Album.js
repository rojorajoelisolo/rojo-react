import React from "react";
import Single from "./Single";

function ListSingle(album) {
    let singleList = [];
    album.songs.map(item => (
        singleList.push(<Single single={item.title_accent_fold} />)
    ));
    return singleList;
}

function screenCover(album) {
    let albumCover = '';
    if (album.cover != null) {
        albumCover = <img src={album.cover.medium} />;
    }
    return albumCover;
}

const Album = ({ album }) => (
    <div style={{
        display: 'flex',
        flex: 1,
        marginTop: 20,
        marginLeft: '15%',
        marginRight: '15%',
        }}>

        <div>
          {screenCover(album)}
        </div>
        <div style={{
          maxHeight: 250,
          overflowY: 'scroll',
          overflowX: 'scroll',
          flex: 1,
          marginLeft: 10
        }}>
          <ol>
            {ListSingle(album)}
          </ol>
        </div>

    </div>
);

export default Album;
    