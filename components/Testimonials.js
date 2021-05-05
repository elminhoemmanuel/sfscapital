import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.css';
import React, { useEffect, useState } from 'react';
import { testimonialObj } from './TestimonialsData';
import TestimonialsCard from './TestimonialsCard';
import SectionHeader from './SectionHeader'


SwiperCore.use([Navigation, Keyboard])

const Testimonials = () => {


    const textColor = 'text-greensec';

    const headerText = 'What our Investors say'

    const slides = [];

    for ( let i=0; i<5; i+=1){
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag='li'>
                <TestimonialsCard testimonialObj={testimonialObj[i]} />
            </SwiperSlide>
        )
    }

    return ( 
        <div className='px-6 md:px-10 lg:px-20 py-16 bg-cultured'>
            <SectionHeader headerText={headerText} textColor={textColor}/>
            
            <Swiper breakpoints={{
                // when window width is >= 640px
                600: {
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                slidesPerView: 2,
                },
                1200: {
                slidesPerView: 3,
                },
            }} id='main' tag="section" wrapperTag="ul"
            navigation keyboard spaceBetween={0} slidesPerView={1}  spaceBetween={30}
            // onInit={(swiper) =>console.log('Swiper initialized', swiper)}
            // onSlideChange={(swiper) =>console.log('Slide changed to:', swiper.activeIndex)}
            // onReachEnd={() =>console.log('Swiper end reached')}
            >
                {slides}                
            </Swiper>

        </div>
     );
}
 
export default Testimonials;