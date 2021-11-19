import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    const newProducts = products.slice(0, 6)




    return (
        <div>
            <h2 className="my-5 pt-5 text-center">Great Bikes for Bikers</h2>
            <Container>
                <div className="row">
                    {
                        newProducts.map(pd => (
                            <div className="col-lg-6">
                                <Card className="my-3">
                                    <Card.Img height="500px" variant="top" src={pd.image} />
                                    <Card.Body>
                                        <Card.Title>Model: {pd.name}</Card.Title>
                                        <h5 className="my-2 text-warning">Starts From ${pd.price}</h5>

                                        <Link to={`/booking/${pd?._id}`}>
                                            <button className="default-btn">See Details & Add to Cart</button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className=" text-center">
                    <Link to="/allProducts">
                        <button className="default-btn my-5">See All Bikes</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Products;