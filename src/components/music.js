import React, { Component } from 'react';
import MusicItem from './musicitem';

export class Music extends Component {
    render() {
        return this.props.Albums.map((album) => {
            return <MusicItem  music={album} key={album._id} ReloadData={this.props.ReloadData}></MusicItem>;
        });
    }
}
export default Music;