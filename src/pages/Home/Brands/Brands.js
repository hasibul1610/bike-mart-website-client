import React from 'react';
import { Container } from 'react-bootstrap';

const Brands = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center my-5">Available Brands</h2>
            <div className="row g-3">
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2020/12/honda.png" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2021/08/bajaj.webp" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2021/09/suzuki-1-433x150.webp" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2020/12/tvs.png" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2021/09/hero.webp" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2021/09/yamaha-logo-1-433x150.webp" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2020/12/runner.png" alt="" />
                </div>
                <div className="col-sm-4 border col-md-3">
                    <img className="img-fluid" src="https://www.bikebd.com/wp-content/uploads/2020/12/lifan.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Brands;