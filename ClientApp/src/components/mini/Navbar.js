import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import Menu from "../mini/Menu";
import enFlag from "../../images/england.png";
import plFlag from "../../images/poland.png";
import deFlag from "../../images/germany.png";
import { connect } from "react-redux";
import { setLanguage } from "../../store/actions/languages";
import pl from "../../languages/pl";
import en from "../../languages/en";
import de from "../../languages/de";

class Navbar extends React.Component {
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
        var flags = {
            display: "inline-block",
            top: "50%",
            right: "20px",
            position: "absolute",
            transform: "translateY(-50%)"
        };
        var flagBtn = {
            border: "0px",
            backgroundColor: "transparent"
        };
        
        return (
            <div style={mainDiv}>
                <div style={menuButton}>
                <HamburgerMenu
                    isOpen={this.state.isOpen}
                    menuClicked={this.clickButtonMenu}
                    />
                </div>
                <div style={flags}>
                    <button onClick={() => this.props.setLanguage(pl)} style={flagBtn} type="button"><img src={plFlag} /></button>
                    <button onClick={() => this.props.setLanguage(en)} style={flagBtn} type="button"><img src={enFlag} /></button>
                    <button onClick={() => this.props.setLanguage(de)} style={flagBtn} type="button"><img src={deFlag} /></button>
                </div>
                <Menu
                    isOpen={this.state.isOpen}
                />
            </div>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    setLanguage: language => dispatch(setLanguage(language))
});

export default connect(null, mapDispatchToProps)(Navbar);