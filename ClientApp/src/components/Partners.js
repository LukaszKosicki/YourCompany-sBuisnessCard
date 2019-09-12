import React from "react";
import $ from "jquery";
import Counter from "../components/mini/Counter";
import skanska from "../images/skanska.jpg";
import "./partners.css";
import { connect } from "react-redux";

class Partners extends React.Component {
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
                    <h2 className="sectionTitle">{this.props.Title}</h2>
                    <hr />
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

const mapStateToProps = state => ({
    ...state.languages[0].OurPartners
});

export default connect(mapStateToProps)(Partners);