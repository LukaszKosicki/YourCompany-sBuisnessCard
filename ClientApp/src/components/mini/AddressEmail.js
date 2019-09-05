import React from "react";
import mail from "../../../src/images/mail.png";

export default class AddressEmail extends React.Component {
    render() {

        var color = {
            color: this.props.color
        };

        var iconsStyles = {
            marginRight: "15px"
        };

        return (
            <a style={color} href="mailto:firma@poczta.pl">
                <img style={iconsStyles} src={mail} />
                {this.props.email}
            </a>
            );
    }
}