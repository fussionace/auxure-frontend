import { data } from 'autoprefixer'
import React from 'react'
import img1 from "../../../../assets/img/carousel-img/img1.png"
import img2 from "../../../../assets/img/carousel-img/img2.png"
import img3 from "../../../../assets/img/carousel-img/img3.png"

const Carousel = () => {
    const datas = [
        {img: img1 , id:1},
    ]    
  return (
    <ul>
        {datas.map(data => (
            <li key={data.id} className="w-full">
                <img className="w-full" src={data.img} alt="" />
            </li>
        ))}
    </ul>
  )
}

export default Carousel
