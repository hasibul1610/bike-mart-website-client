import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://fathomless-brushlands-99863.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])




    return (
        <div>
            <Container>
                <div className="my-5 text-center">
                    <i className="far fa-thumbs-up fa-7x"></i>
                    <h2>Thousands of Happy Riders we've helped love their bike</h2>
                </div>
                <div className="row">
                    {
                        reviews.map(review => (
                            <div className="col-lg-4">
                                <Card style={{ height: '300px' }} className="text-center my-3">
                                    <Card.Header>Name: {review.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>
                                            <Rating
                                                className="text-danger"
                                                initialRating={review.stars}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                            ></Rating>
                                        </Card.Title>
                                        <Card.Text>
                                            <p className="my-2">"{review.review}"</p>
                                        </Card.Text>

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

export default Reviews;