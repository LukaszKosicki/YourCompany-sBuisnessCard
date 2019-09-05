import React from 'react';
import { Container } from 'reactstrap';
import Welcome from "../components/Welcome";
import Navbar from "../components/mini/Navbar";
import Partners from "../components/Partners";
import Projects from "../components/Projects";
import "../components/layout.css";
import AboutCompany from "../components/AboutCompany";
import Contact from "../components/Contact";

export default props => (
    <div>
        <Navbar />
        <Welcome />
        <Container>
            <AboutCompany />
            <Projects />
            <Partners />
            <Contact />
        </Container>
    </div>
);
