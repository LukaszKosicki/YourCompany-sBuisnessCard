import React from "react";
import { CompanyName } from "../../dataPerPage";
import { connect } from "react-redux";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          class: "hide" 
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isOpen !== prevProps.isOpen) {
            if (this.props.isOpen === true) {
                this.setState({
                    class: "show"
                });

            } else {
                this.setState({
                    class: "hide"
                });
            }
        }
    }

    inter = 0;
    pullOut = () => {
        this.setState({
            translate: this.state.translate + 1
        });
        if (this.state.translate >= 0) {
            clearInterval(this.inter);
        }
    }

    hide = () => {
        this.setState({
            translate: this.state.translate - 1
        });
        if (this.state.translate <= -100) {
            clearInterval(this.inter);
        }
    }

    render() {

        var menu = {
            height: "calc(100vh - 50px)",
            width: "200px",
            position: "fixed",
            top: "50px",
            backgroundColor: "#1c4960",
            left: "0px",
            transition: "transform .3s",
            zIndex: "10000000",
            textAlign: "center"
        };

        var hide = {
            transform: "translateX(-100%)"
        };
        var show = {
            transform: "translateX(0%)"
        };

        var a = {
            display: "block",
            color: "white"
        };

        var options = {
            position: "absolute",
            color: "white",
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)"
        };

        var h2 = {
            marginTop: "25%",
            color: "white",
            textDecoration: "underline"
        };

        return (
            <div className={this.state.class} style={menu}>
                <h2 style={h2}>{CompanyName}</h2>
                <div style={options}>
                    <a style={a} href="#o-firmie">{this.props.AboutCompany}</a>
                    <a style={a} href="#nasze-projekty">{this.props.OurProjects}</a>
                    <a style={a} href="#nasi-partnerzy">{this.props.OurPartners}</a>
                    <a style={a} href="#kontakt">{this.props.Contact}</a>
                </div>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    ...state.languages[0].Menu
});

export default connect(mapStateToProps)(Menu);