import React, { useState } from 'react'
import { Cart, Like, Star } from '../../assets/svg/svg-icons'
import Pagination from './Pagination';

const ListProductView = ({ cartItems }) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [display, setDisplay ] = useState(4);
    const [activePage, setActivePage ] = useState(1);
    
    const last = currentPage * display;
    const first = last - display;
    const values = cartItems.slice(first, last);
    const btnCount = [];
    
    for(let i = 1;i <= Math.ceil(cartItems.length/display);i++ ){
        btnCount.push(i);
  }

  const handleChange = (i) => {

      setCurrentPage(i);
      setActivePage(i);
    
  }
  return (
    <>
      <section className='h-full w-full px-[1rem]'>
          {
            values.map((item) => (
                <div className="list-card border-solid border-light-gray border-[1px] flex items-center mb-[2rem] w-full md:h-[18rem] h-[15rem]" key={item.name}>
                  {/* card image */}
                  <figure className="card-image md:w-[40%] w-[30%] h-full">
                    <img src={item.img} alt={item.desc} className='w-full h-full object-cover'/>
                  </figure>
                  {/* content */}
                  <div className="card-content md:w-[60%] w-[70%] md:px-[1.5rem] px-[1rem] md:py-[.75rem] h-full flex flex-col justify-center md:gap-[1.25rem] gap-[.375rem]">
                      <h1 className="title font-semibold md:text-md text-[.875rem] font-primary">{item.name}</h1>
                      <p className='font-primary md:text-base text-[.75rem] font-light md:line-clamp-3 line-clamp-2 leading-3'>{item.desc}</p>
                      
                      <div className="flex-container flex items-center justify-between">
                        <span className="block md:text-lg font-primary md:font-medium font-semibold text-md">{ item.price }</span>
                        <div className="start-flex flex items-center gap-[.125rem]">
                          <Star className='h-[1rem] w-[1rem]'/>
                          <span className="block text-[.875rem] font-light">{ item.star }</span>
                        </div>
                      </div>

                      <div className="flex-container flex items-center justify-between">
                          <button className="cart flex items-center justify-center md:gap-[.75rem] gap-[.15rem] max-w-[10rem] md:max-w-[15.5rem] h-[2.5rem] px-[1.25rem] py-[.625rem] outline-none bg-accent-1">
                            <Cart />
                            <span className="block font-semibold text-black md:text-base text-[.8rem]">ADD TO CART</span>
                          </button>
                          <button className='like-btn'>
                            <Like className='h-[1.5rem] w-[1.5rem]'/>
                          </button>
                      </div>
                  </div>
                </div>     
            ))
          }

        <Pagination handleChange={ handleChange } activePage={ activePage } btnCount={btnCount}/>
      </section>
    </>
  )
}

export default ListProductView