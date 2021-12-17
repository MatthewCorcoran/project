import React, { Component } from 'react';
import Music from './music';
import axios from 'axios';

class Read extends Component
{
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/music')
        .then((response)=>{
            this.setState({mymusic: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/music')
        .then((response)=>{
            this.setState({mymusic: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymusic: []            
    };

    render(){
        return(
            <div>
                <h1></h1>
                <Music Albums={this.state.mymusic} ReloadData={this.ReloadData}></Music>
            </div>
        );
    }
}
export default Read;