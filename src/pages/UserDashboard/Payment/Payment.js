import React from 'react';
import { Spinner, Button } from 'react-bootstrap';

const Payment = () => {
    return (
        <div className="container  text-center">
            <h2 className="my-5 pt-5">Payment</h2>
            <Button className="p-4" variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                />
                <span className="h2"> Payment System Coming Soon...</span>
            </Button>
        </div>
    );
};

export default Payment;