import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://fathomless-brushlands-99863.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [control]);


    const handleDelete = id => {
        const proceed = window.confirm("Are Your Sure");
        if (proceed) {
            fetch(`https://fathomless-brushlands-99863.herokuapp.com/deleteProduct/${id}`, {
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
        <div>
            <div className="container">
                <h1>Manage Products </h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Title</th>
                            <th>Product Description</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {products?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="default-btn p-2"
                                >Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>

        </div>
    );
};

export default ManageProduct;