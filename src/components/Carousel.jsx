import React, { useState, useEffect } from 'react'
import img1 from '../assets/img/carouselImages/img1.png'
import img2 from '../assets/img/carouselImages/img2.png'
import img3 from '../assets/img/carouselImages/img3.png'

const carousel = () => {

  const [ activeIndex, setActiveIndex ] = useState(0);

  let carouselArray = [
    img1, img2, img3
  ]

  // next slide
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1 ) % carouselArray.length)    
  }

  // prev slide
  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselArray.length) % carouselArray.length)
  }

  // changing images 
  const currentTransform = -activeIndex * 100;

  return (
    <> 
      <div className="h-full container flex transition-transform" style={{transform:`translateX(${currentTransform}%)`}}>
        {
          carouselArray.map((item) => (
            <div className='shrink-0 overflow-hidden w-full' key={ item }>
              <img src={ item } alt={ item } className='w-full h-full object-cover'/>
            </div>
          ))
        }
      </div>

      {/*pagination  */}
      <div className="carousel-pagination h-[6rem] w-[10rem] flex items-center justify-center gap-[1rem] absolute bottom-[5%] left-[35%]">
        {
          carouselArray.map((_, index) => (
            <button key={index} className={`cursor-pointer h-[1rem] w-[1rem] rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-white' }`} onClick={() => setActiveIndex(index)}></button>
          ))
        }
      </div>     
    </>
  )
}


export default carousel