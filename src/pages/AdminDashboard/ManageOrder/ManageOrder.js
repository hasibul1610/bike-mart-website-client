import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    // console.log(status);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);

    const handleUpdate = id => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
    }
    return (
        <Container>

            <h1>All Orders : {orders.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Title</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.image}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status} /></td>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-1"
                            >Update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
};

export default ManageOrder;