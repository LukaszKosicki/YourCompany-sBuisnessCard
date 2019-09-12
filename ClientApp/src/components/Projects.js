import React from "react";
import ProjectCard from "../components/mini/ProjectCard";
import blue from "../images/resort.jpg";
import { connect } from "react-redux";

class Projects extends React.Component {

    render() {
        return (
            <div id="nasze-projekty" className="section">
                <div className="contentsDiv">
                    <h2 className="sectionTitle">{this.props.Title}</h2>
                    <div>
                        <ProjectCard
                            img={blue}
                            text="Blue Mountain Szklarska Poręba"
                        />
                        <ProjectCard
                            img={blue}
                            text="Blue Mountain Szklarska Poręba"
                        />
                        <ProjectCard
                            img={blue}
                            text="Blue Mountain Szklarska Poręba"
                        />
                        <ProjectCard
                            img={blue}
                            text="Blue Mountain Szklarska Poręba"
                        />
                        <ProjectCard
                            img={blue}
                            text="Blue Mountain Szklarska Poręba"
                        />
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    ...state.languages[0].OurProjects
});

export default connect(mapStateToProps)(Projects);