import React from 'react'
import NavBar from '../components/navbar/page'
import Slider from '../components/mainSlider/page'
import SectionTop from '../components/sectionTop/page'

const HomePage = () => {
  return (
    <>
      <NavBar className='w-full' url='#'/>
      <Slider/>
      <SectionTop/>
    </>
  )
}

export default HomePage