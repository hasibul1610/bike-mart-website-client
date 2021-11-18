import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    // console.log(user.email);
    const { singleProductId } = useParams();
    // console.log(singleProductId);
    const [singleProduct, setSingleProduct] = useState({});

    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${singleProductId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    // console.log(singlePackage);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.image = singleProduct.image;
        data.price = singleProduct.price;
        data.status = "pending";

        fetch('http://localhost:5000/confirmBooking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),

        })
            .then(res => {
                res.json()
                reset()
                alert("Booked Done!!!")
            })
            .then(result => console.log(result));

        // console.log(data);
    }

    return (
        <Container>

            <h1 className="text-center my-5 pt-5">Booking</h1>
            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="img-fluid rounded" src={singleProduct?.image} alt="" />
                        </div>

                        <p className="text-start my-3">{singleProduct?.description}</p>
                        <h2 className="text-warning my-2"> price: {singleProduct?.price} $</h2>
                        {errors.exampleRequired && <span>This field is required</span>}

                    </div>
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                disabled
                                {...register("name")}
                                style={{
                                    border: 0,
                                    backgroundColor: 'transparent',
                                    fontSize: '30px',
                                    fontWeight: 600
                                }}
                                defaultValue={singleProduct?.name}
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {/* <input
                                disabled
                                style={{
                                    border: 0,
                                    backgroundColor: 'transparent',
                                    fontSize: '30px'
                                }}
                                {...register("price")}
                                defaultValue={singleProduct?.price}

                                className="p-2 m-2 w-100"
                            />
                            <br /> */}



                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Book Now"
                                className="default-btn m-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Booking;