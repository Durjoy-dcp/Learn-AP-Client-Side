import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
import { FaStar, FaRegClock, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Course = ({ course }) => {
    const { catagory, duration, _id
        , img, name, price, rating, title } = course
    return (


        <motion.div className='m-3 course-card rounded p-3  d-md-flex align-items-center'
            animate={{ x: [-120, 0], opacity: 1, scale: 1 }}
            transition={{
                duration: .4,
                delay: 0.1,

            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >

            <div className='me-2'>
                <img src={img} style={{ maxWidth: "300px" }} alt="" className='rounded fluid' />
            </div>
            <div className='w-100'>
                <h5 className='text-start mt-2 gray-text'>{title}</h5>
                <div className='text-start ms-2'>

                    <p className='m-0' >{name}</p>
                    <p ><FaStar className='text-warning me-2  ' />{rating}</p>
                    <div className='d-flex justify-content-between m-0'>
                        <p className='gray-text m-0' ><FaRegClock className='text-warning me-2 ' />{duration}</p>
                        <p className='gray-text  ' ><FaMoneyBillAlt className='text-success me-2 ' />${price}</p>

                    </div>
                </div>
                <div className=' text-lg-start text-center'>
                    <Link to={`/course/${_id}`}><button className='btn btn-outline-primary'>Go Details</button></Link>

                </div>
            </div>
        </motion.div>

    );
};

export default Course;