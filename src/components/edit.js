import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
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

    componentDidMount(){
        axios.get('http://localhost:4000/api/music/'+ this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Album:response.data.Album,
                Year:response.data.Year,
                Poster:response.data.Poster,
                _id:response.data._id
            })
        })
        .catch();
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Album+
        " Year: " + this.state.Year +
        "Poster: " + this.state.Poster);

        const NewAlbum = {
            Album: this.state.Album,
            Year: this.state.Year,
            Poster: this.state.Poster
        }

        axios.put('http://localhost:4000/api/music/' + this.state._id, NewAlbum)
        .then((response)=>{console.log(response)})
        .catch();
        

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
                <h1></h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit Album Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Album}
                            onChange={this.onChangeAlbumName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Album Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeAlbumYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Album Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeAlbumPoster}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Album"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;