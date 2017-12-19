import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Albums extends Component {
  constructor() {
    super();
  }

  render() {
    const albums = this.props.albums;
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {albums.map(album => (
            <div className="col-xs-4" key={album.id} >
              <a className="thumbnail" href="#" onClick={() => this.props.selectAlbum(album.id) }>
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>{album.songs.length} songs</small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
