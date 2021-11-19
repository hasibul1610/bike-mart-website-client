import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const AddProduct = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://fathomless-brushlands-99863.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => {
                res.json()
                reset()
                alert("Successfuly Submitted");
            })
            .then((result) => console.log(result));
        console.log(data);
    };



    return (
        <div>
            <Container>
                <h1 className="mt-5 text-center">Please Add A Service</h1>

                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add Product"
                                className="btn btn-info text-center my-3"
                            />
                        </form>
                    </div>

                </div>


            </Container>
        </div>
    );
};

export default AddProduct;