import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AllAlbums from "./AllAlbums";
import axios from "axios";
import SingleAlbum from "./SingleAlbum";

const audio = document.createElement("audio");

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectAlbum:{},
      currentSong:{},
      isPlaying:false
    };
    this.selectAlbum = this.selectAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
    this.currentSong= this.currentSong.bind(this)
  }

  componentDidMount() {
    axios
      .get("api/albums/")
      .then(res => res.data)
      .then(albums => this.setState({ albums }));
  }

  selectAlbum(albumId){
    axios.get(`api/albums/${albumId}`)
    .then(res=> res.data)
    .then(album => this.setState({selectAlbum : album}))
  }

  deselectAlbum(){
    this.setState({selectAlbum:{}})
  }
// it is taking an additional cycle to set the correct state!!!
  currentSong (song) {
    this.setState({currentSong:song})
    this.setState({isPlaying:true})
    audio.src =song.audioUrl;
    audio.load();
    this.state.currentSong.id===song.id && audio.play();
    console.log("songs", this.state.currentSong);
  }

  render() {
    return <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum}/>
        </div>
        <div className="col-xs-10">
          {this.state.selectAlbum.id ? (
            <SingleAlbum singleAlbum={this.state.selectAlbum} currentSong={this.currentSong} isPlaying={this.state.isPlaying}/>
          ) : (
            <AllAlbums
              albums={this.state.albums}
              selectAlbum={this.selectAlbum}
            />
          )}
        </div>

        <Footer />
      </div>;
  }
}
