import { Navbar, Nav, NavDropdown, Container, Button, Form } from 'react-bootstrap';
import { CartState } from "../context/Context";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {

    const { 
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <div className="paybox">
            <span className="title">Total ({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 20}}>Total: $ {total}</span>
    

        <div>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <h1> Checkout </h1>
                <Form.Group style={{ paddingBottom: 10}}>
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group style={{ paddingBottom: 10}}>
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group style={{ paddingBottom: 5}} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Select your payment method</Form.Label>
                    <Form.Check style={{ paddingBottom: 10}}  type="checkbox" label="Credit Card" />
                    <Form.Check type="checkbox" label="Cash on delivery" />
                </Form.Group>
                <Form.Group style={{ paddingBottom: 10}}>
                    <Form.Label>Enter your adress</Form.Label>
                    <Form.Control type="text" placeholder="Enter your adress" />
                </Form.Group>
                <Button type="submit">Purchase</Button>
            </Form>
        </div>
        </div>
    )
}

export default Payment;