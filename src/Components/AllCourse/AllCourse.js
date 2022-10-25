import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import AllCatagory from '../Shared/AllCatagory/AllCatagory';
import './AllCourse.css';
import { useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
const AllCourse = () => {
    const [toogle, setToogle] = useState(false);
    useEffect(() => {
        console.log(toogle);
    }, [])
    const val = 150;
    return (
        <div>


            <Row>
                <div className='d-md-none  '>
                    {
                        !toogle &&
                        <button className='btn position-absolute  top-50 end-0 btn-info text-white' onClick={() => setToogle(!toogle)}> <FaAngleDoubleLeft /> </button>
                    }
                </div>
                <Col md={9} className="order-sm-2   order-md-1">

                    <div className='d-md-none d-sm-block '>

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
                                <button className='me-auto btn btn-outline-info text-white ' onClick={() => setToogle(!toogle)}><FaAngleDoubleRight /> </button>

                            </div>

                            <AllCatagory ></AllCatagory>
                        </motion.div>


                    </div>
                    <h1 className=' coursesContainer position-absolute container'>this is course Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam hic alias, fuga numquam eveniet iste nisi accusamus ex eligendi explicabo blanditiis voluptatibus impedit dicta aperiam adipisci inventore quam consequatur ad totam perspiciatis laborum tenetur, fugiat repellendus! Commodi sapiente cupiditate molestias optio, expedita dolor, placeat maxime ad est minus dolorem ex totam, harum animi ratione. Non ab modi exercitationem voluptas iste repellat, error quam blanditiis. Nesciunt nostrum perferendis eaque maxime totam nobis officiis quia dolor, deserunt laudantium corrupti assumenda deleniti at quas consequatur non, distinctio velit eos voluptate commodi? Itaque id fugiat corrupti amet perspiciatis, ad sit ratione eaque sunt similique quam repudiandae ex commodi doloribus ea quidem doloremque aut, optio ipsa placeat. Vitae sequi natus sit nemo fugit a cumque porro temporibus corporis alias saepe exercitationem praesentium mollitia vero, quia, magnam maxime eaque nobis voluptates. Doloremque suscipit quod pariatur, explicabo adipisci perferendis illo totam impedit debitis facilis exercitationem ullam blanditiis ducimus ut quis qui rerum, facere distinctio iusto dicta. Quidem velit veniam sint placeat veritatis autem ab magni vero at cum! Amet dolorum alias tempora velit repellendus itaque et hic eius veniam, voluptatum cumque dicta consectetur. Eaque, illum. Magni unde sint non similique nulla esse saepe odio culpa tenetur, repudiandae veritatis repellendus sapiente, iste perferendis. Magni dolor dicta provident tempora reprehenderit amet totam illo, quis aperiam unde ullam debitis porro consequatur consequuntur. Cumque quidem eius consequatur dolorem libero sint facilis velit. Tempora molestias beatae facere doloremque voluptates ea voluptatem quam, veritatis sint non libero debitis voluptas cupiditate atque maiores vitae molestiae ipsa eaque excepturi quis eveniet. Mollitia quis voluptate esse nesciunt doloribus corrupti, ea explicabo perferendis, vel magni voluptatum libero ex labore unde voluptas voluptates sed rem, quaerat facere impedit nulla quam ut distinctio! Unde voluptatem sequi ab ipsam nihil harum, laboriosam dolores, architecto magnam voluptatum porro doloribus numquam. Ipsam fuga ipsa quis facilis impedit autem quibusdam asperiores animi, consequatur, alias molestias itaque blanditiis reprehenderit provident sint quo vitae accusantium voluptate quidem eos. Deserunt veritatis sed nobis laboriosam! Provident iusto voluptatem excepturi assumenda iste, ipsam, accusantium facilis amet unde sed minus, delectus dolor id est perferendis aliquam aut error corporis. Laboriosam tempora perferendis eos blanditiis dolor id veniam, omnis iusto officia nam necessitatibus aliquam, facilis quam possimus ipsam ex soluta delectus officiis. Rerum repudiandae temporibus et vel molestias accusamus nesciunt quia esse nostrum ducimus aut alias laboriosam vitae nobis, placeat quae quidem dicta, quo magni amet! Odio pariatur necessitatibus, non itaque temporibus hic animi rem provident vel voluptatum ipsam accusantium culpa in cum exercitationem. Consequuntur officiis repellendus voluptatum necessitatibus placeat corrupti perspiciatis in aperiam debitis cumque provident odit maiores labore nam laborum esse, doloremque hic culpa modi similique? Repellat nam ut eligendi omnis ducimus autem hic distinctio facilis quasi explicabo iste dicta exercitationem, libero quo rem recusandae accusamus eaque quibusdam corporis voluptates corrupti! Illo similique repellat ex officiis perferendis consectetur blanditiis at, mollitia dignissimos soluta ducimus tempore optio quisquam repellendus pariatur quae dolorum ut accusamus temporibus id. Explicabo quam perspiciatis provident aliquid tempore sapiente dicta quibusdam labore. Commodi tempore quam aliquam dolor possimus consequuntur saepe error odit dolore fuga animi, quos, fugiat nostrum facilis, vero ut aut laboriosam omnis tenetur dolorum obcaecati ipsam odio? Dolorum mollitia, esse nulla fugit modi distinctio tempore provident dolor similique, nesciunt consectetur? Cum sit assumenda voluptates sed officia dolor laboriosam praesentium minus! Culpa atque animi hic ad. Reiciendis cum exercitationem ratione qui saepe velit ea nulla ut labore aliquam officiis alias sunt beatae quo rem deleniti reprehenderit, sequi animi veniam maiores perferendis, neque laboriosam repellendus? Adipisci ipsam eveniet quaerat officia iure. Pariatur quisquam ducimus labore qui illum. A ratione, voluptatum voluptate deleniti odio facere.</h1>
                </Col>
                <Col md={3} className="order-sm-1 order-md-2  " >

                    <div className='sidebar w-100 d-none d-md-block position-fixed'>

                        <AllCatagory ></AllCatagory>
                    </div>
                </Col>

            </Row>

        </div >
    );
};

export default AllCourse;