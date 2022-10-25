import React from 'react';
import './SwiperSingleCard.css'

const SwiperSingleCard = ({ feedback }) => {
    const { name, post, heading, img } = feedback;
    return (
        <div className='p-3 bg-opacity mt-3 mb-4 rounded ' >
            <div className='d-flex align-items-center'>

                <div>
                    <img className='feedback-img me-3' src={img} alt="" />
                </div>
                <div>
                    <h3 className=''>{name}</h3>
                </div>
            </div>
            <div>
                <h4 className='text-info'>

                    {heading}
                </h4>
            </div>
            <div>
                <p>
                    {post}
                </p>
            </div>

        </div>
    );
};

export default SwiperSingleCard;