import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return (
        <motion.div animate={{ y: [150, 0], opacity: 1 }}
            transition={{
                duration: .5,
                delay: 0,
                ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0 }}>

            <Container>

                <Form style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                    <h2 className='my-3'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </motion.div>
    );
};

export default Login;