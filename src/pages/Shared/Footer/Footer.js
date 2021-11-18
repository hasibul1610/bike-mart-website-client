import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-bg">
                <Container>
                    <div className="row footer-links">
                        <div className="col-lg-3 col-sm-12">
                            <img width='150px' className="bg-white p-3 rounded my-4" src="https://www.sefiles.net/merchant/395/images/site/BikeMartColorlogo4-5horizontal.png" alt="" />
                            <ul>
                                <li className="fw-bold">Email:</li>
                                <li>bcse.hasibul@gmail.com</li>
                                <br />
                                <li className="fw-bold">Call:</li>
                                <li>+880765471227</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">About</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Bike Mart Advantage</li>
                                <li>Bike Mart Rewards</li>
                                <li>Trek Credit Card</li>
                                <li>Trek Travel</li>
                                <li>Shipping & Policies</li>
                                <li>FAQs Buying Online</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">LOCATIONS</h4>
                            <ul>
                                <li>Dhaka</li>
                                <li>Chittagong</li>
                                <li>Khulna</li>
                                <li>Barishal</li>
                                <li>Mymensingh</li>
                                <li>Rangpur</li>
                                <li>Rajshahi</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <h4 className="text-white">HOLIDAY STORE HOURS</h4>
                            <ul>
                                <li>New Year's Eve 10 AM - 5 PM</li>
                                <li>New Year's Day Closed </li>
                                <li>Eid Day Closed</li>
                                <li>Memorial Day Closed</li>
                                <li>Independence Day Closed</li>
                                <li>Labor Day Closed</li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-bottom-bg">
                <p className="py-4 text-center text-white">Copyright 2021 || Designed By Md Hasibul Islam Shanto</p>


            </div>
        </div>
    );
};

export default Footer;