import React from 'react';
import { useContext } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../UserContext/UserContext';

const CheckOut = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const notify = () => toast("Congratualtion!");
    if (!user) {
        return <div className=' my-5 text-center '>

            <div className="spinner-border " role="status">
                <span className="visually-hidden ">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <div style={{ maxWidth: "500px" }} className=" border border-info rounded mx-auto  my-5">
                <div className='p-3'>


                    <h5 className='text-center gray-text p-4'>Check Out</h5>
                    <div className='w-100 d-flex'>

                        <img src={course.img} alt="" className=' mx-auto rounded border m-3 ' />
                    </div>
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Title:</p>
                        <p className='text-end'>{course.title}</p>

                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Owner:</p>
                        <p className='text-end'>{course.name}</p>

                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Price:</p>
                        <p className='text-end '>${course.price}</p>
                    </div>
                    <hr />
                    <div className='d-flex p-2 gray-text justify-content-between'>
                        <p className='me-2 '>Buyer:</p>
                        <p className='text-end '>{user?.displayName}</p>
                    </div>
                    <hr />
                    <button onClick={notify} className='btn btn-info my-2 w-100'>Buy</button>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;