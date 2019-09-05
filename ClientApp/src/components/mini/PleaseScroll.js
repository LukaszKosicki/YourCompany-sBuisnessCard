import React from "react";
import "../mini/pleaseScroll.css";
import { FormText } from "reactstrap";

export default class PleaseScroll extends React.Component {
    render() {
        var styles = {
            position: "absolute",
            display: "inline-block",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "10px"
        };

        return (
            <a style={styles} href="#o-firmie">
                <div className="icon-scroll"></div>
                <FormText color="white">Zobacz więcej</FormText>
            </a>
            );
    }
}