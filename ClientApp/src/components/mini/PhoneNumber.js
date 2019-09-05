import React from "react";
import phone from "../../../src/images/phone-call.png";

export default class PhoneNumber extends React.Component {
    render() {

        var color = {
            color: this.props.color
        };

        var iconsStyles = {
            marginRight: "15px"
        };

        return (
            <a style={color} href="tel:123-123-123">
                <img style={iconsStyles} src={phone} />
                {this.props.number}
            </a>
            );
    }
}