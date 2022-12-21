import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import ToggleSwitch from './ToggleSwitch';
import { FaUserAlt } from 'react-icons/fa';

const NavHeader = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handletoLogOut = () => {
        logOut()
            .then(result => {

                console.log("Logged Out")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

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


                        {
                            (user && user.uid) ? <>
                                {
                                    (user?.photoURL) ? <Image className='my-auto mx-3 ' roundedCircle style={{ width: "30px", height: "30px" }} src={user?.photoURL} alt={user?.displayName} title={user?.displayName} /> :
                                        <FaUserAlt className='my-auto mx-3' />
                                }
                                <FaUserAlt className='my-auto mx-3 text-danger' />

                                <button onClick={handletoLogOut} className="nav-link btn btn-outline-danger mx-4">Sign Out</button>

                            </>
                                :
                                <>
                                    <NavLink to='/login' className="nav-link">Login</NavLink>
                                    <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavHeader;