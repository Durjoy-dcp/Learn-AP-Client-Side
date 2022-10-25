import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const CatagoryName = ({ catagory }) => {
    const { id, name } = catagory;
    return (
        <div>
            <motion.div className='w-100 p-2 m-1 '>
                <Link to='/catagory' className='nav-link'>{name} </Link>
            </motion.div>
        </div>
    );
};

export default CatagoryName;