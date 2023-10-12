'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './coursel.css';

const Coursel = () => {
  const slides = [
    {
      src: '/1.jpg',
    },{
      src: '/2.jpg',
    },{
      src: '/3.jpg',
    },{
      src: '/4.jpg',
    },{
      src: '/5.jpg',
    },{
      src: '/6.jpg',
    },{
      src: '/7.jpg',
    },{
      src: '/8.jpg',
    },{
      src: '/9.jpg',
    } 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-344 w-100% relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className='w-full h-full rounded-xl bg-center bg-cover duration-500'
      >

      <div className='abc flex absolute justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      
      </div>
      {/* Left Arrow
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
    </div>
  );
}

export default Coursel;
