import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import bannerBike from '../../../images/banner-bike.png';
import RubberBand from 'react-reveal/RubberBand';

const Banner = () => {
    return (
        <div className="banner-bg">
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-img">
                            <img className="img-fluid" src={bannerBike} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-details pt-5 mt-5">

                            <RubberBand>
                                <h1>Life is Better on a Bike!!</h1>
                                <h3>Let Us Help to Find Yours</h3>

                            </RubberBand>


                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;