import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Number, Email } from "../../dataPerPage";
import Menu from "../mini/Menu";
import AddressEmail from "../mini/AddressEmail";
import PhoneNumber from "../mini/PhoneNumber";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            color: "transparent"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.pokaz);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isOpen !== prevState.isOpen) {
            if (this.state.isOpen && this.state.color !== "#1c4960") {
                this.setState({
                    color: "#1c4960"
                });
            } else if (this.state.isOpen === false && this.state.color !== "transparent" && window.scrollY <= 0) {
                this.setState({
                    color: "transparent"
                });
            }
        }
    }

    pokaz = () => {
        console.log(window.scrollY);
        if (window.scrollY > 0 && this.state.color !== "#1c4960") {
            this.setState({
                color: "#1c4960"
            });
        } else if (window.scrollY <= 0 && this.state.color !== "transparent") {
            this.setState({
                color: "transparent"
            });
        }
    }

    clickButtonMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        var mainDiv = {
            height: "50px",
            borderBottom: "2px solid black",
            backgroundColor: this.state.color,
            position: "fixed",
            width: "100%",
            zIndex: "1"
        };

        var menuButton = {
            position: "relative",
            transform: "translateY(-50%)",
            top: "50%",
            left: "10px"
        };
        var contact = {
            display: "inline-block",
            top: "0px",
            right: "20px",
            position: "absolute"
        };

        
        return (
            <div style={mainDiv}>
                <div style={menuButton}>
                <HamburgerMenu
                    isOpen={this.state.isOpen}
                    menuClicked={this.clickButtonMenu}
                    />
                </div>
                <div style={contact}>
                    <div>
                        <PhoneNumber
                            number={Number}
                            color="white"
                            />
                    </div>
                    <div>
                        <AddressEmail
                            email={Email}
                            color="white"
                            />
                    </div>
                </div>
                <Menu
                    isOpen={this.state.isOpen}
                />
            </div>
            );
    }
}