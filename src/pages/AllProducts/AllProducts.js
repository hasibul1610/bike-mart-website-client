import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fathomless-brushlands-99863.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])




    return (
        <div>
            <h2 className="my-5 pt-5 text-center">Available Bikes</h2>
            <Container>
                <div className="row">
                    {
                        products.map(pd => (
                            <div className="col-lg-6">
                                <Card className="my-3">
                                    <Card.Img height="500px" variant="top" src={pd.image} />
                                    <Card.Body>
                                        <Card.Title>Model: {pd.name}</Card.Title>
                                        <h5 className="my-2 text-warning">Starts From ${pd.price}</h5>

                                        <Link to={`/booking/${pd?._id}`}>
                                            <button className="default-btn">Order Now</button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllProducts;