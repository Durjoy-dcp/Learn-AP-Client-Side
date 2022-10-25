import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import './Home.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, EffectCards } from "swiper";
import SwiperTab from '../Shared/Swiper/SwiperTab';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className='header pt-4 px-5  d-lg-flex text-center justify-content-around align-items-center'>
                <motion.div className='text-white '
                    animate={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <h1 className='fw-bold display-4 py-5 '>Discover 4500+ Courses <br /> from top Instructors <br /> Around the World</h1>
                </motion.div>
                <motion.div className=''
                    animate={{ x: [-50, -150, 0], opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}


                >
                    <motion.h2 className='text-white py-4 fw-bold' whileHover={{ scale: 1.3 }}>
                        <span style={{ "color": "rgb(194, 9, 194)" }}>L</span>earn<span style={{ "color": "gold" }}>AP</span>

                    </motion.h2>
                    <motion.p className='text-warning py-2 my-3 bg-opacity p-4 rounded ' whileHover={{ scale: 1.3 }}>Take your learning organization <br /> to the next level. to the next level. Who'll share <br /> their knowledge to people around the world.</motion.p>
                    <button className='btn  btn-purple mt-3  text-white  mb-3'>Join For Free</button>
                </motion.div>

            </div>

            <div>
                <div className='text-center my-5 px-4 py-2'>

                    <h1>What Students <br />
                        Think and Say About  <span className='fw-bold' style={{ "color": "rgb(194, 9, 194)" }}>L</span>earn<span style={{ "color": "gold" }}>AP</span>
                    </h1>
                </div>
                <Container>

                    <SwiperTab></SwiperTab>
                </Container>


            </div>

        </div>
    );
};

export default Home;