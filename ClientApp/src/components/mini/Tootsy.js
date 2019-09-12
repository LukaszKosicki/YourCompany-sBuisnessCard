import React from "react";
import { FormText } from "reactstrap";

export default class Tootsy extends React.Component {
    render() {
        var stopka = {
            width: "100%",
            backgroundColor: "#1c4960",
            position: "absolute",
            left: "0px",
            display: "flex",
            alignItems: "center",
            minHeight: "50px"
        };

        var div = {
            display: "inline-block",
            marginRight: "10px"
        };

        return (    
            <div style={stopka}>
                <div style={div}>
                    <FormText>Autor:</FormText>
                    <FormText>Łukasz Kosicki</FormText>
                </div>
                <div style={div}>
                    <FormText>Kontakt:</FormText>
                </div>
                <div style={div}>
                    <FormText>tel: 531-638-822</FormText>
                    <FormText>email: lukasz.kosicki91@gmail.com</FormText>
                </div>
            </div>
            );
    }
}