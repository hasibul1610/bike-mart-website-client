import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="menubar">
            <Navbar className="py-4" bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                fontSize: "20px",
                                marginLeft: "15px",
                                color: "#234262"
                            }}
                            to="/home"
                        >
                            <img width='150px' src="https://www.sefiles.net/merchant/395/images/site/BikeMartColorlogo4-5horizontal.png" alt="" />
                        </NavLink>



                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                to="/home"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{

                                    color: "#FF5722"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/allProducts"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{

                                    color: "#FF5722"
                                }}
                            >
                                All Products
                            </NavLink>


                            {
                                user.email ?
                                    <div>

                                        <NavLink
                                            to="/adminDashboard"
                                            style={{
                                                textDecoration: "none",
                                                fontSize: "20px",
                                                marginLeft: "15px",
                                                color: "#234262"
                                            }}
                                            activeStyle={{

                                                color: "#FF5722"
                                            }}
                                        >
                                            Dashboard
                                        </NavLink>
                                        <Link to="/home"><button className="btn btn-outline-primary mx-3" onClick={logOut}>Logout</button></Link>
                                    </div>
                                    : <NavLink
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "20px",
                                            marginLeft: "15px",
                                            color: "tomato"
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#3FCE92"
                                        }}
                                    >
                                        Login
                                    </NavLink>
                            }

                            {/* {user.email && <span>Hello {user.displayName}</span>} */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;