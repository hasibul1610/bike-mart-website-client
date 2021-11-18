import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import loginBg from '../../../../images/login-bg.jpg';

const style = {
    "background": `url(${loginBg})`,
    "height": "100vh",
    "backgroundSize": "cover",
    "backgroundPosition": "center"


}


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();

    // console.log(user);

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }



    return (
        <div style={style}>
            <div className="pt-5 mt-3">
                <Container>
                    <h1 className="text-white my-5 text-center">Please Login</h1>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-white h4'>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleOnChange}
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-white h4'>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <button className='default-btn my-3' type="submit">
                                    Submit
                                </button>
                                <br />
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/register">
                                    <Button className="text-white my-3" variant="link">New User? please Register</Button>
                                </NavLink>
                                {isLoading && <Spinner animation="border" variant="info" />}
                                {user?.email && <Alert variant='primary'>
                                    Login Successfully
                                </Alert>
                                }
                                {authError && <Alert variant="danger">{authError}</Alert>
                                }
                            </Form>
                            <br />
                            <button className='default-btn' onClick={handleGoogleSignIn}>
                                Google Sign In
                            </button>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>

                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;