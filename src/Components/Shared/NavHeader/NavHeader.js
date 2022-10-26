import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
const NavHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className="fw-bold navbar-brand" href="#home"><span style={{ "color": "rgb(194, 9, 194)" }}>L</span>earn<span style={{ "color": "gold" }}>AP</span></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <ToggleSwitch className="" label="theme" ></ToggleSwitch>
                        <NavLink className="nav-link" to="/allcourses">Courses</NavLink>
                        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>

                    </Nav>
                    <Nav>
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavHeader;