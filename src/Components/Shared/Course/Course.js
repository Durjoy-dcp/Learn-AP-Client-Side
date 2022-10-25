import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
import { FaStar, FaRegClock, FaMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Course = ({ course }) => {
    const { catagory, duration, id
        , img, name, price, rating, title } = course
    return (


        <div className='m-3 course-card rounded p-3  d-md-flex align-items-center'>

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
                    <Link><button className=''>Go Details</button></Link>

                </div>
            </div>
        </div>

    );
};

export default Course;