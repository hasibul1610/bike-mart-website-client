import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';

const AdminDashboard = () => {
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
                        Admin Dashboard
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
                                >Add Product
                                </NavLink>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}/manageProduct`}>Manage Products
                                </NavLink>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}/manageOrder`}>Manage Orders
                                </NavLink>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: '#004C97',
                                        marginBottom: 15
                                    }}
                                    to={`${url}/makeAdmin`}>Make Admin
                                </NavLink>


                            </Nav>



                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/manageProduct`}>
                    <ManageProduct></ManageProduct>
                </Route>
                <Route path={`${path}/manageOrder`}>
                    <ManageOrder></ManageOrder>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>
        </div>
    );
};

export default AdminDashboard;