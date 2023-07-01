import React from 'react'
import img1 from '../assets/img/carouselImages/img1.png'
import img2 from '../assets/img/carouselImages/img2.png'
import img3 from '../assets/img/carouselImages/img3.png'


const carousel = () => {
  let carouselArray = [
    img1, img2, img3
  ]
  return (
    <>
        <img src={ img1 } alt="" />
    </>
  )
}

export default carousel