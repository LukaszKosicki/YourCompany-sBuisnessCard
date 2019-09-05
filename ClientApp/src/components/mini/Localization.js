import React from "react";
import localization from "../../images/localization.png";

export default class Localization extends React.Component {

    render() {
        var a = {
            whiteSpace: "pre-line",
            color: "black"
        };

        var iconStyles = {
            marginRight: "15px",
            display: "inline-block"
        };

        var textDivText = {
            display: "inline-block"
        };

        return (
            <a style={a} href="https://www.google.pl/maps/place/CAD-MAR/@53.1642573,16.7356464,17z/data=!3m1!4b1!4m5!3m4!1s0x4703e6a81dd3311b:0x20a1e4d82f73e05e!8m2!3d53.1642573!4d16.7378351?hl=pl">
                <img style={iconStyles} src={localization} />
                64-700 Czarnków ul.Czarnkowska 10
            </a>
            );
    }
}