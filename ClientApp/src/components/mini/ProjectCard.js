import React from "react";
import "../mini/projectCard.css";

export default class ProjectCard extends React.Component {
    render() {
        var mainDiv = {
            display: "inline-block"
        };

        var img = {
            width: "100%"
        };

        return (
            <div style={mainDiv} className="projectCard">
                <img style={img} className="imgProjectCard" src={this.props.img} />
                <p>{this.props.text}</p>
                <hr/>
            </div>
            );
    }
}