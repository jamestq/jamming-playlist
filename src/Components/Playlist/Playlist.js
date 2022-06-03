import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist';

export default class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}/>
                <TrackList trackList={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}