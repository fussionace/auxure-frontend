import React, { useState } from 'react'
import { ChevronLeft } from '../../assets/svg/svg-icons'

const Pagination = ({ handleChange, activePage, btnCount, onPrevClick }) => {
    

  return (
    <div className='mt-[2rem] w-full flex items-center gap-[1rem] md:justify-end justify-center'>
        {/* <button className='bg-black text-white w-[2rem] h-[2rem] text-base'>
          <ChevronLeft onClick={ onPrevClick }/>
        </button> */}
        
        {
            btnCount.map((btn) => 
                <button key={Math.random()} className={btn === activePage ? 'bg-black text-white w-[2rem] h-[2rem] text-base': 'text-black bg-white w-[2rem] h-[2rem] border-light-gray border-solid border-[1px] text-base'} onClick={ () =>  handleChange(btn) }>
                    { btn }
                </button>
            )
        }    
    </div>
  )
}

export default Pagination