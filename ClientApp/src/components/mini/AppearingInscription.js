import React from "react";

export default class AppearingInscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: -100
        };
    }

    componentDidMount() {
        this.inter = setInterval(this.pullOut, 10);
    }

    inter = 0;
    pullOut = () => {
        this.setState({
            translate: this.state.translate + 1
        });
        if (this.state.translate >= 0) {
            clearInterval(this.inter);
        }
    }

    render() {

        var h6 = {
            backgroundColor: "#ffc107ad",
            position: "absolute",
            top: "70%",
            padding: "20px",
            left: "0px",
            transform: `translate(${this.state.translate}%)`
        };

        return (
            <h6 style={h6}>{this.props.text}</h6>
            );
    }
}