import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Feedback from 'react-bootstrap/esm/Feedback';
import SwiperSingleCard from './SwiperSingleCard/SwiperSingleCard';

const SwiperTab = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch("/feedback.json")
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    // console.log(feedbacks);
    return (

        <div>

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                className="mySwiper"
            >
                {
                    feedbacks.map((feedback, idx) => <SwiperSlide key={idx}>  <SwiperSingleCard feedback={feedback}></SwiperSingleCard> </SwiperSlide>)
                }


            </Swiper>
        </div >
    );
};

export default SwiperTab;