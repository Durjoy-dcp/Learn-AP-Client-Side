import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './CatagoryName.css';
const CatagoryName = ({ catagory }) => {
    const { id, name } = catagory;
    return (
        <div>
            <motion.div className='w-100 p-2 m-1 '
                animate={{ x: [120, 0], opacity: 1, scale: 1 }}
                transition={{
                    duration: .4,
                    delay: 0.1,

                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
            >
                <Link to={`/catagorycourses/${id}`} className='nav-link catagory-link p-1 rounded'> <small>{name}</small> </Link>
            </motion.div>
        </div >
    );
};

export default CatagoryName;