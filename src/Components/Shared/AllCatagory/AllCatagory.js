import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CatagoryName from '../CatagoryName/CatagoryName';

const AllCatagory = () => {
    const [allCatagory, setAllCatagory] = useState([]);
    useEffect(() => {
        fetch('https://learnap-server-durjoy-dcp.vercel.app/catagory')
            .then(res => res.json())
            .then(data => setAllCatagory(data));
    }, []);

    return (
        <div className=' p-1 rounded '>
            <h4 className='px-5 py-3 gray-text m-1' > Category</h4>
            <hr />
            <ul>

                {
                    allCatagory.map((catagory, idx) => <CatagoryName key={idx} catagory={catagory}></CatagoryName>)
                }
            </ul>

        </div>
    );
};

export default AllCatagory;