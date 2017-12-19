import React, { Component } from "react";
import ReactDOM from "react-dom";

export default function SingleAlbum(props) {
  const singleAlbum = props.singleAlbum;
  const isPlaying = props.isPlaying
  console.log("look", props);
  return (
    <div className="album col-xs-10">
      <div>
        <h3>{singleAlbum.name}</h3>
        <img src={singleAlbum.imageUrl} className="img-thumbnail" />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Artists</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {singleAlbum.songs && singleAlbum.songs.map(song => {
            
            console.log("sid", song.id);
            return (
              <tr key={song.id} >
                <td>
                  <button className="btn btn-default btn-xs"onClick={()=> {
                    props.currentSong(song);
                    console.log('csid',song)
                  }} >
                    <span />
                    { 
                      isPlaying && props.currentSong.id === song.id ?
                      <span className="glyphicon glyphicon-pause"></span>
                      :<span className="glyphicon glyphicon-play"></span>
                    }
                  </button>
                </td>
                <td>{song.name}</td>
                <td>{song.artists.map(artist => artist.name).join(" ")}</td>
                <td>{song.genre}</td>
              </tr>
            );
            
          })}
        </tbody>
      </table>
    </div>
  );
}
