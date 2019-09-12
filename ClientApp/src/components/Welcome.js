import React from "react";
import img from "../images/tlo.jpg";
import Logo from "./mini/Logo";
import { CompanyAsset } from "../dataPerPage";
import AppearingInscription from "../components/mini/AppearingInscription";
import PleaseScroll from "../components/mini/PleaseScroll";
import { connect } from "react-redux";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            isReady: true
        });
    }

    showAnimations = () => {
        if (this.state.isReady) {
            return (
                <div>
                    <Logo />
                    <AppearingInscription
                        text={this.props.CompanyAsset}
                    />
                </div>
                );
        };
    }

    render() {
        var tlo = {
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            minWidth: '100vw',
            minHeight: '100vh',
            backgroundPosition: "center",
            backgroundSize: "cover"
        };

        return (
            <div style={tlo}>
                {this.showAnimations()}
                <PleaseScroll
                    text={this.props.SeeMore}
                />
            </div>
            );
    }
}

const mapStateToProps = state => ({
    ...state.languages[0].Welcome
});

export default connect(mapStateToProps)(Welcome);