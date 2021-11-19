import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addAdmin", {
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
                <h1 className="mt-5 text-center">Please Add An Email To make a new Admin</h1>

                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("email")}
                                placeholder="Email"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add to Admin List"
                                className="btn btn-info text-center my-3"
                            />
                        </form>
                    </div>

                </div>


            </Container>
        </div>
    );
};

export default MakeAdmin;