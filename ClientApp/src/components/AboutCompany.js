import React from "react";
import { CompanyDescription } from "../dataPerPage";
import exp from "../images/exp.png";
import team from "../images/team.png";
import partner from "../images/partner.png";
import project from "../images/project.png";
import client from "../images/client.png";
import Counter from "../components/mini/Counter";

export default class AboutCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 100
        };
    }

    render() {
        var description = {
            height: "100%",
            marginBottom: "30px"
        };

        var descriptionDiv = {
            textAlign: "justify"
        };

        return (
            <div id="o-firmie" className="section">
                <div className="contentsDiv">
                    <h2 className="sectionTitle">O firmie</h2>
                    <div style={description}>
                        <div style={descriptionDiv}>
                            {CompanyDescription}
                        </div>
                    </div>
                    <div>
                        <Counter
                            img={project}
                            text="1234 wykonanych projektów"
                            href="#nasze-projekty"
                        />
                        <Counter
                            img={exp}
                            text="6 lat doświadczenia"
                        />
                        <Counter
                            img={client}
                            text="100% zadowolonych klientów"
                        />
                        <Counter
                            img={team}
                            text="5 profesjonalistów"
                        />
                        <Counter
                            img={partner}
                            text="7 partnerów biznesowych"
                            href="#nasi-partnerzy"
                        />
                    </div>
                </div>
            </div>
            );
    }
}