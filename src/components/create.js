import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeAlbumName = this.onChangeAlbumName.bind(this);
        this.onChangeAlbumYear = this.onChangeAlbumYear.bind(this);
        this.onChangeAlbumPoster = this.onChangeAlbumPoster.bind(this);
        this.state = {
            Album: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Album+
        " Year: " + this.state.Year +
        "Poster: " + this.state.Poster);

        const NewMusic = {
            Album: this.state.Album,
            Year: this.state.Year,
            Poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/music', NewMusic)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })

        event.preventDefault();
        this.setState({
            Album:'',
            Year:'',
            Poster:''
        });
    }
    onChangeAlbumName(event) {
        this.setState({
            Album: event.target.value
        })
    }
    onChangeAlbumYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    onChangeAlbumPoster(event){
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>This is my Create Component!</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Album Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Album}
                            onChange={this.onChangeAlbumName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Album Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeAlbumYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Album Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeAlbumPoster}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Album"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;