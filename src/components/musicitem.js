import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// some comments
class MusicItem extends Component {
    constructor(){
        super();
        this.DeleteMusic = this.DeleteMusic.bind(this);
    }

    DeleteMusic(){
        console.log('Delete: '+this.props.music._id);

        axios.delete('http://localhost:4000/api/music/'+this.props.music._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }

    render() {
        return (

           
              
            <div>
               
                
                {/* some comments  */}
                <Card>
                    
                    <Card.Header>{this.props.music.Album}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.music.Poster}></img>
                            <footer>
                                {this.props.music.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.music._id} className="btn btn-primary">Edit</Link>
<Button variant="danger" onClick={this.DeleteMusic}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MusicItem;