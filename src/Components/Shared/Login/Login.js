import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
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
                    <p className='my-3 p-2'><small>New here? <Link className='text-decoration-none' to="/signup"> create an account</Link> </small></p>
                    <Button variant="info" type="submit" className="w-100 ">
                        Sign Up with Google
                    </Button>
                    <Button variant="warning" type="submit" className="w-100 my-2">
                        Sign Up with Github
                    </Button>
                </Form>
            </Container>
        </motion.div>
    );
};

export default Login;