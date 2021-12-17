import React, { Component } from 'react';
import backVid from "./video/backVid.mp4";

class Content extends Component {
    render() {
        return (
            <div classname="back">
                 {/*This is the background video for the main page*/}
         <video autoPlay loop muted
        style={{
          position: "absolute",
          width:"100%",
          left: "50%",
          top:"50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex:"-1"
        }}
        >
             {/*This is dipalaying the background video*/}
          <source src={backVid} type="video/mp4"/>
          </video>
            </div>
        );
    }
}
export default Content;