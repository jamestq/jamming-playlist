import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.state = {
      searchResults : [
        {
          id: 1121,
          name: 'Zutto Matteru',
          artist: 'Hiyaki',
          album: 'Roller'
        },
        {
          id: 5342,
          name: 'Peace',
          artist: 'John',
          album: 'Cool Worlds'
        },
        {
          id: 3121,
          name: 'Through to you',
          artist: 'Jane',
          album: 'Tears'
        }
      ],
      playlistName : 'Soothing songs',
      playlistTracks : [
        {
          id: 3341,
          name: 'Bubble',
          artist: 'Hiroyuki',
          album: 'dsh31'
        },
        {
          id: 4321,
          name: 'Titan',
          artist: 'Sawano',
          album: 'Pfix5352'
        }
      ],
    }
  }

  addTrack(track){
    let currentPlaylist = this.state.playlistTracks.slice();
    for(let i=0; i<currentPlaylist.length; i++){
      if(currentPlaylist[i].id === track.id) {
        console.log('This track is already in the list!');
        return;
      };
    }
    console.log(currentPlaylist);
    currentPlaylist.push(track);
    this.setState({
        playlistTracks : currentPlaylist.slice()
    })
  }

  removeTrack(track){
    let currentPlaylist = this.state.playlistTracks.slice();
    for(let i=0; i<currentPlaylist.length; i++){
      if(currentPlaylist[i].id === track.id){
        currentPlaylist.splice(i, 1);
        break;
      }
    }
    this.setState({
      playlistTracks: currentPlaylist.slice()
    })
  }


  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}
