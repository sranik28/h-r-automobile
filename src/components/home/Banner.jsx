'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import banner1 from '../../../public/banner/banner1.png'
import banner2 from '../../../public/banner/banner2.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <main>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <Image src={banner1} alt=''></Image>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={banner2} alt=''></Image>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </main>
    );
};

export default Banner;