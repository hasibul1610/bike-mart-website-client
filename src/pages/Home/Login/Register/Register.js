import React, { useState } from 'react';
import { Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import loginBg from '../../../../images/login-bg.jpg';

const style = {
    "background": `url(${loginBg})`,
    "height": "100vh",
    "backgroundSize": "cover",
    "backgroundPosition": "center"


}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, authError, isLoading } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
        // alert("button CLicked")
    }
    return (
        <div style={style}>
            <div className="pt-5 mt-3">
                <Container>
                    <h1 className="text-white my-5 text-center">Please Register</h1>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            {!isLoading && <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className='text-white h4'>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        placeholder="Enter Name"

                                        onChange={handleOnBlur}
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-white h4'>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        onBlur={handleOnBlur}
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-white h4'>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-white h4'>ReType Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <button className='default-btn my-3' type="submit">
                                    Submit
                                </button>
                                <br />
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/login">
                                    <button className="text-white my-3" variant="link">Already Registered? Please Login</button>
                                </NavLink>
                            </Form>}
                            {isLoading && <Spinner animation="border" variant="info" />}
                            {user?.email && alert("Registered Successfully")
                            }
                            {authError && alert({ authError })
                            }
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>

                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Register;