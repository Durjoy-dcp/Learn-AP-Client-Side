import React from 'react';
import { Row } from 'react-bootstrap';

const CreatorDetails = () => {
    return (
        <div className='mx-auto d-flex flex-wrap  align-items-center  my-5 justify-content-around p-4'>
            <div className=' my-3 '>
                <h3 className='text-info fw-bold'>250+</h3>
                <p>Course Creator</p>
            </div>
            <div className=' my-3 '>
                <h3 className='text-info fw-bold'>11.4 Million+</h3>
                <p>Students Enrolled</p>
            </div>
            <div className=' my-3 '>
                <h3 className='text-info fw-bold'>104</h3>
                <p>Countries Using Us</p>
            </div>
            <div className=' my-3 '>
                <h3 className='text-info fw-bold'>$100 Million+</h3>
                <p>Earned From Us
                </p>
            </div>

        </div>
    );
};

export default CreatorDetails;