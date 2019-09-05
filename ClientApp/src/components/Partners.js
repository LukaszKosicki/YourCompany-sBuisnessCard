import React from "react";
import $ from "jquery";
import Counter from "../components/mini/Counter";
import skanska from "../images/skanska.jpg";
import "./partners.css";

export default class Partners extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            isOk: false
        };
    }


    componentDidMount() {
        window.addEventListener("scroll", this.showCounter);
    }

    showCounter = () => {
        var position = $("#partners").position();

        if ((window.scrollY + (window.innerHeight / 2)) >= position.top) {
            this.setState({
                isOk: true
            });
        }
    }
*/
    render() {
        return (
            <div id="nasi-partnerzy" className="section">
                <div className="contentsDiv">
                    <h2 className="sectionTitle">Nasi partnerzy</h2>
                    <div>
                        <img class="partnerLogo" src={skanska} />
                        <img class="partnerLogo" src={skanska} />
                        <img class="partnerLogo" src={skanska} />
                        <img class="partnerLogo" src={skanska} />
                        <img class="partnerLogo" src={skanska} />
                    </div>
                </div>
            </div>
            );
    }
} 