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
                        <label>Enter Your Name</label>
                        <br />
                        <input
                            required
                            {...register("name")}
                            placeholder="Name"
                            className="p-2 m-2 w-50"

                        />
                        <br />
                        <label>Select a Rating Stars</label>
                        <br />
                        <select
                            required
                            {...register("stars")}
                            className="p-2 m-2 w-50">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                        <br />
                        <label>Write Your Review</label>
                        <br />
                        <textarea
                            required
                            {...register("review")}
                            placeholder="review"
                            className="p-2 m-2 w-50"
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