import React from "react";
import { Number, Email } from "../dataPerPage";
import AddressEmail from "../components/mini/AddressEmail";
import PhoneNumber from "../components/mini/PhoneNumber";
import Localization from "../components/mini/Localization";
import "../components/contact.css";
import ContactForm from "../components/mini/ContactForm";
import Map from "../components/mini/Map";
import Tootsy from "../components/mini/Tootsy";

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="kontakt" className="section">
                    <div className="contentsDiv">   
                        <h2 className="sectionTitle">Kontakt</h2>
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
                        <ContactForm />
                    </div>
                </div>
                </div>
                <Map />
                <Tootsy/>
            </div>
        );
    }
}