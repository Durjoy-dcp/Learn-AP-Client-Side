import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
const Course = ({ course }) => {
    const { catagory, duration, id
        , img, name, price, rating, title } = course
    return (

        <div className='m-3 course-card rounded p-3  d-md-flex'>
            <div className='me-2'>
                <img src={img} style={{ maxWidth: "300px" }} alt="" className='rounded fluid' />
            </div>
            <div>
                <h5 className='mt-2 gray-text'>{title}</h5>
                <p className='text-start'>{name}</p>
            </div>
        </div>

    );
};

export default Course;