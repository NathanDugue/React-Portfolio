import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/images/LinkedIn_Logo.svg";
import github from "../assets/images/iconmonstr-github-1.svg";
import { Navbar, Container, Nav } from "react-bootstrap";


export const NavBar = () => {

    return (

        <Navbar expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to= "/">
                <img src={logo} alt="Logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="projects" 
                        className= 'nav-link navbar-link navbar-link'>Work</Link>
                    <Link to="contact"
                        className= 'nav-link navbar-link navbar-link'>Contact</Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/nathan-dugue-10445a232/"><img src={linkedin} alt="linkedin icon" /></a>
                        <a href="https://github.com/NathanDugue"><img src={github} alt="github icon" /></a>
                    </div>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}