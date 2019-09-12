import React from "react";
import { Number, Email } from "../dataPerPage";
import AddressEmail from "../components/mini/AddressEmail";
import PhoneNumber from "../components/mini/PhoneNumber";
import Localization from "../components/mini/Localization";
import "../components/contact.css";
import ContactForm from "../components/mini/ContactForm";
import Map from "../components/mini/Map";
import Tootsy from "../components/mini/Tootsy";
import { connect } from "react-redux";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="kontakt" className="section">
                    <div className="contentsDiv">   
                        <h2 className="sectionTitle">{this.props.Title}</h2>
                    <div className="leftDiv">
                        <div className="contentLeftDiv"> 
                            <div>
                                <PhoneNumber
                                    number={Number}
                                    color="black"
                                    />
                            </div>
                            <div>
                                <AddressEmail
                                    email={Email}
                                    color="black"
                                />
                            </div>
                            <div>
                                <Localization />
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                            <ContactForm
                                {...this.props.ContactForm}
                            />
                    </div>
                </div>
                </div>
                <Map />
                <Tootsy/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.languages[0].Contact
});

export default connect(mapStateToProps)(Contact);