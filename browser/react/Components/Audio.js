import React, {Component} from 'react';
import Main from './Main'

const AUDIO = document.createElement('audio');

export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state={
        currentSong:{},
        currentSongList:[],
        isPlaying:false,
        progress:0
    }

  }


  render() {
  }
}
