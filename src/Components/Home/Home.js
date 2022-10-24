import React from 'react';
import { motion } from "framer-motion";
import './Home.css';
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
                    <h2 className='text-white fw-bold'>
                        <span style={{ "color": "rgb(194, 9, 194)" }}>L</span>earn<span style={{ "color": "gold" }}>AP</span>

                    </h2>
                    <p className='text-warning '>Take your learning organization <br /> to the next level. to the next level. Who'll share <br /> their knowledge to people around the world.</p>
                    <button className='btn  btn-purple  text-white fw-bolder mb-3'>Join For Free</button>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;