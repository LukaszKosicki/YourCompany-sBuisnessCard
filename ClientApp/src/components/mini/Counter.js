import React from "react";
import { FormText } from "reactstrap";

export default class Counter extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.increme, this.props.timeInterval);
    }

    interval = 0;
    increme = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        if (this.state.counter >= this.props.how) {
            clearInterval(this.interval);
        }
    }
    */
    render() {
        var a = {
            display: "inline-block",
            margin: "10px"
        };
        return (
            <a href={this.props.href} style={a}>
                <img src={this.props.img} />
                <FormText color="black">{this.props.text}</FormText>
            </a>
            );
    }
}