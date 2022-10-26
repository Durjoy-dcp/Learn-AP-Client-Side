import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { AuthContext } from '../../UserContext/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn, signUp, updateInfo } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleToSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        const name = form.name.value;

        if (name.split(' ').length < 2) {
            setErrorMsg('You should provide at least words: First Name & Last Name ')
            return;
        }

        console.log(email, password, url, name);

        signUp(email, password)
            .then(result => {

                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");

                handletoUpdate(name, url);
                navigate(from, { replace: true });
            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }
    const handletoUpdate = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateInfo(profile)
            .then(() => { })
            .catch(er => { })
    }

    const handleTosignwithGoogle = () => {
        SignInGoogle()
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");

                navigate(from, { replace: true });
                setLoading(false);

            }
            )
            .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }
    const handleTosignwithGithub = () => {
        SignInGithub()
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");

                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }

    return (
        <motion.div animate={{ y: [150, 0], opacity: 1 }}
            transition={{
                duration: .5,
                delay: 0,
                ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0 }}>

            <Container>

                <Form onSubmit={handleToSignUp} style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                    <h2 className='my-3'>Reistration</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="type" name='name' placeholder="Full name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formurl">
                        <Form.Label>Photo  Url</Form.Label>
                        <Form.Control type="type" name="url" placeholder="url" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {
                            errormsg !== '' && <p className='text-warning'>{errormsg}</p>
                        }
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Sign Up
                    </Button>
                    <p className='my-3 p-2'><small>Already have an account? <Link className='text-decoration-none' to="/login"> create an account</Link> </small></p>
                    <Button onClick={handleTosignwithGoogle} variant="info" className="w-100 ">
                        Sign Up with Google
                    </Button>
                    <Button variant="warning" onClick={handleTosignwithGithub} className="w-100 my-2">
                        Sign Up with Github
                    </Button>
                </Form>
            </Container>
        </motion.div>
    );
};

export default Registration;