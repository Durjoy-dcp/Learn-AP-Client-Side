import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { FaStar, FaRegClock, FaMoneyBillAlt, FaArrowCircleLeft, FaPrint } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';
import AllCatagory from '../Shared/AllCatagory/AllCatagory';
import SwiperTab from '../Shared/Swiper/SwiperTab';
import { useReactToPrint } from 'react-to-print';
const CourseDetails = () => {
    const [toogle, setToogle] = useState(false);
    const course = useLoaderData();
    console.log(course);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div >
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
                        <div className='   p-4 container rounded ' ref={componentRef}>

                            <div className='d-lg-flex'>
                                <div>
                                    <img src={course.img} alt="" style={{ width: "420px " }} className="rounded" />
                                </div>
                                <div className='p-3'>
                                    <div className='d-lg-flex '>
                                        <h1>{course.title}</h1>

                                        <div><button onClick={handlePrint} className='btn btn-outline-info m-2'><FaPrint /></button></div>
                                    </div>
                                    <h4 className='text-end gray-text'>{course.name}</h4>
                                    <p>{course.description}</p>

                                    <p className='text-start' ><FaStar className='text-warning me-2  ' />{course.rating}</p>
                                    <div className='d-flex justify-content-between m-0'>
                                        <p className='gray-text m-0' ><FaRegClock className='text-warning me-2 ' />{course.duration}</p>
                                        <p className='gray-text  ' ><FaMoneyBillAlt className='text-success me-2 ' />${course.price}</p>

                                    </div>
                                    <div className=' '>
                                        <Link className='' to={`/catagorycourses/${course.catagory}`} ><button className='rounded btn btn-outline-info m-3'><FaArrowCircleLeft /></button></Link>
                                        <Link to={`/checkout/${course._id}`}><button className='btn btn-outline-info m-3 mx-auto'>Get premium access</button></Link>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </Col>
                <Col md={2} className="order-sm-1 order-md-2  " >

                    <div className='w-100 d-none d-md-block  '>

                        <AllCatagory></AllCatagory>
                    </div>
                </Col>

            </Row>

            <Container className='pb-3 mt-2'>

                <SwiperTab></SwiperTab>
            </Container>
        </div>
    );
};

export default CourseDetails;