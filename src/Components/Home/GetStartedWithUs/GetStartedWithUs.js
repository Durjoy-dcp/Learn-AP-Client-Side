import React from 'react';
import { Col, Row } from 'react-bootstrap';

const GetStartedWithUs = () => {
    return (
        <div className='mx-auto' style={{ maxWidth: "900px" }}>
            <Row className='gx-5 ' >
                <Col sm={12} md={6} >
                    <img src="https://templatekit.tokomoo.com/elearningkit/wp-content/uploads/sites/9/2020/05/a-female-student-with-glasses-is-lacquer-a-lesson-K5U3XL7.jpg" alt="" className='img-fluid rounded' />
                </Col>
                <Col sm={12} md={6} className="text-start  align-items-center  d-flex ">
                    <div>


                        <p className='fst-normal text-info my-3'>GET STARTED WITH US
                        </p>
                        <h2 className='gray-text my-3 '>Enjoy With
                            Favourite Courses</h2>
                        <p>We've prepared 100 ideas for profitable online courses. To give you a hand at choosing a profitable topic and provide some inspiration.</p>
                    </div>
                </Col>

            </Row>

        </div >
    );
};

export default GetStartedWithUs;