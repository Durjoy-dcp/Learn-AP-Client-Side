import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import AllCatagory from '../Shared/AllCatagory/AllCatagory';
import { useLoaderData } from 'react-router-dom';
import Course from '../Shared/Course/Course';
import { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
const CatagoryCourse = () => {
    const [toogle, setToogle] = useState(false);
    const { setLoading, loading } = useContext(AuthContext);
    const courses = useLoaderData();
    console.log(courses);

    // if (loading) return <p>Wait</p>;

    // console.log(courses);
    // if (courses) {
    //     setLoading(false);
    // }
    return (
        <div>


            <Row>
                <div className='d-md-none  '>
                    {
                        !toogle &&
                        <button className='btn position-absolute mobilesidebutton  top-50 end-0 btn-info text-white' onClick={() => setToogle(!toogle)}> <FaAngleDoubleLeft /> </button>
                    }
                </div>
                <Col md={10} className="order-sm-2   order-md-1">

                    <div className='d-md-none d-sm-block '>
                        {

                            toogle &&
                            <motion.div className=' w-100  mobileSideBar  position-absolute  rounded'
                                animate={{ x: [150, toogle ? 30 : 800], opacity: 1 }}
                                transition={{
                                    duration: .5,
                                    delay: 0,
                                    ease: [0.5, 0.71, 1, 1.5],
                                }}
                                initial={{ opacity: 0 }}
                            >
                                <div className='d-flex'>
                                    <button className='me-auto  btn btn-outline-info text-white ' onClick={() => setToogle(!toogle)}>X </button>

                                </div>

                                <AllCatagory ></AllCatagory>
                            </motion.div>
                        }


                    </div>
                    <div className='container d-flex m-3  coursesContainer'>
                        <div className='  card-container-bg p-4 container rounded'>

                            {
                                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
                            }
                        </div>

                    </div>
                </Col>
                <Col md={2} className="order-sm-1 order-md-2  " >

                    <div className='w-100 d-none d-md-block  '>

                        <AllCatagory></AllCatagory>
                    </div>
                </Col>

            </Row>




        </div >
    );
};

export default CatagoryCourse;