import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth();
    const userEmail = user.email;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = userEmail;
        fetch("http://localhost:5000/addReview", {
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
                <h1 className="mt-5 text-center">Add A review</h1>

                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="p-2 m-2 w-100"
                        />
                        <br />

                        <textarea
                            {...register("review")}
                            placeholder="review"
                            className="p-2 m-2 w-100"
                        />
                        <br />


                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Add Review"
                            className="btn btn-info text-center my-3"
                        />
                    </form>
                </div>




            </Container>
        </div>
    );
};

export default AddProduct;