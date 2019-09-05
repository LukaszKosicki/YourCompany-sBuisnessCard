import React from "react";

export default class Map extends React.Component {
    render() {
        var map = {
            width: "100%"
        };

        var div = {
            marginTop: "50px"
        };

        return (
            <div style={div}>
                <iframe style={map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.8083062720684!2d16.553793415366194!3d52.89787491590915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470400cb5a73d569%3A0xf10d1042e7751086!2sKomenda%20Powiatowa%20Policji%20Czarnk%C3%B3w!5e0!3m2!1spl!2spl!4v1567690162337!5m2!1spl!2spl" frameborder="0" allowfullscreen=""></iframe>
            </div>
            );
    }
}