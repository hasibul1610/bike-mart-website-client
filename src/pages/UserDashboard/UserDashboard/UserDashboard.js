import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';


const UserDashboard = () => {
    let { path, url } = useRouteMatch();


    return (
        <div className="my-5">
            <br />
            <br />

            <Navbar expand={false}>
                <Container>
                    <Navbar.Brand
                        style={{
                            fontSize: 35,
                            fontWeight: 600
                        }}

                    >
                        User Dashboard
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">All Menus</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}`}
                                >My Orders
                                </NavLink>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}/payment`}>Payment
                                </NavLink>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}/review`}>Review
                                </NavLink>


                            </Nav>



                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
            </Switch>
        </div>
    );
};

export default UserDashboard;