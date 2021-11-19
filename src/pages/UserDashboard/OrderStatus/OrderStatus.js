import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const OrderStatus = () => {
    const { user } = useAuth();
    const userEmail = user.email;
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [userEmail]);

    // console.log(products);


    return (
        <div className="container my-5 py-5">

            <h2>Booking By Email : {userEmail}</h2>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {products?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.status}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>


        </div>
    );
};

export default OrderStatus;




