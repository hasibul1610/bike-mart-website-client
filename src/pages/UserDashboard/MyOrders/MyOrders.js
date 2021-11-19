import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const userEmail = user.email;
    const [products, setProducts] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [control]);//control

    console.log(products);

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control)
                    }
                })
            // console.log(id);
        }
    }

    return (
        <div className="container my-5 py-5">

            <h2>Booking By Email : {userEmail}</h2>

            <div className="services mt-5">
                <div className="row container">
                    {products?.map((pg) => (
                        <div className="col-md-4 mt-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pg?.image} alt="" />
                                </div>

                                <h6>{pg?.name}</h6>

                                <div className="d-flex justify-content-between">
                                    <h3 className="text-danger"> Cost :{pg?.price}$</h3>

                                    <button
                                        onClick={() => handleDelete(pg?._id)}
                                        className="default-btn"
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default MyOrders;




