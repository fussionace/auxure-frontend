import React, { useState } from 'react'
import { Cart, ChevronLeft, Like, Star } from '../../assets/svg/svg-icons'
import Pagination from './Pagination'

const GridProductView = ({ cartItems }) => {

  // pagination logic
    const [ currentPage, setCurrentPage ] = useState(1);
    const [display, setDisplay ] = useState(9);
    const [activePage, setActivePage ] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(9);
    const [minPageLimit, setMinPageLimit] = useState(0);

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

    // elipsis
    let pageIncrement  = null
    if(btnCount.length > last  ) {
        pageIncrement = 'OK'
    }

    // prev
    
    const onPrevClick = () => {
      if ((currentPage - 1) % display === 0 ) {
          setMaxPageLimit(maxPageLimit - display)
          setMinPageLimit(minPageLimit - display)

        }
        setCurrentPage(prev => prev -1)
    }


  return (
    <>
      <section className='grid-layout grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] md:gap-[1rem] gap-[.5rem] md:px-[0] px-[.5rem]'>
          {
              values.map((item, i) => (

                  <div key={ Math.random() } className='grid-card border-solid border-light-gray border-[1px]'>
                      <figure>
                        <img src={ item.img } alt={ item.desc }  className="w-full h-full object-cover"/>
                      </figure>

                      <div className="card-content px-[.23rem] md:px-[.75rem] pt-[.5rem] pb-[.75rem]">
                        {/* name */}
                        <div className="name-flex flex items-center justify-between">
                          <h1 className="block md:text-base text-[.75rem] font-primary font-medium md:line-clamp-none line-clamp-1">{item.name}</h1>
                          <div className="star flex items-center justify-center">
                            <Star />
                            <span className="block md:text-[.875rem] text-[.75rem] font-light">{ item.star }</span>
                          </div>
                        </div>
                        {/* price */}
                        <div className="price-flex flex items-center justify-between my-[1rem]">
                          <span className="block price md:text-md text-base font-semibold font-primary">{item.price}</span>
                          <Like />
                        </div>
                        {/* button */}
                        <button className='bg-accent-1 w-full h-[2.5rem] px-[1.25rem] py-[.625rem] gap-[.75rem] hidden md:flex items-center justify-center'>
                          <Cart />
                          <span className="block font-primary font-semibold">ADD TO CART</span>
                        </button>
                      </div>
                  </div>   
              ))
          }
      </section>
      <section className="pagination-component bg-accent-4 flex items-center justify-center">
        <Pagination handleChange={ handleChange } activePage={ activePage } btnCount={btnCount} onPrevClick={ onPrevClick }/>
      </section>
    </>
  )
}

export default GridProductView