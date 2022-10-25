import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllCatagory = () => {
    const [allCatagory, setAllCatagory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => console.log(allCatagory));
    }, []);

    return (
        <div>

        </div>
    );
};

export default AllCatagory;