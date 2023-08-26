import React, { useState } from 'react'
import { ArrowDown, ArrowUp, CheckIcon } from '../../assets/svg/svg-icons'

const Aside = ({ setShowAside }) => {

  const [firstToggle, setFirstToggle ] = useState(true);
  const [secondToggle, setSecondToggle ] = useState(true);
  const [thirdToggle, setThirdToggle ] = useState(true);
  
  // fragrance names
  const fragrance = [
    'Floral', 'Citrus', 'Woody', 'Oriental', 'Aquatic', 'Spicy', 'Green'
  ]

  const gender = [
    'Male', 'Female'
  ]

  const prices = [
    'N2,000 - N10,000',
    'N10,000 - N50,000',
    'N50,000 - N200,000',
    'Over N200,000',
  ]


  return (
    <section className="aside-filter py-[1.94rem] min-h-[30vh] border-solid border-light-gray border-2 rounded-[6px]">
       <div className="filter-group after:block after:w-full after:h-[2px] after:bg-light-gray">
            <div className="filter-group px-[1.1rem] mb-[2.5rem] flex items-center justify-between">
                <span className='text-base block font-semibold'>FILTER</span>
                <button onClick={ () => setShowAside(false)} className='px-[1rem] py-[.2rem] border-solid border-primary border-[1px] rounded-[1.56525rem] text-[.875rem]'>Reset</button>
            </div>     
       </div>

       {/* fragrance */}
       <section className="filter-group after:block after:w-full after:h-[2px] after:bg-light-gray">
            <hgroup className="filter-group py-[1.3rem] px-[1.1rem] flex items-center justify-between gap-[.4rem]">
                <span className='text-base block font-semibold'>FRAGRANCE</span>
                <button onClick={() => setFirstToggle(!firstToggle)} className='flex items-center justify-center gap-[.5rem] px-[1rem] py-[.2rem] border-solid border-primary border-[1px] rounded-[1.56525rem] text-[.875rem]'>
                  { !firstToggle ? 'Show' : 'Hide' }
                  <ArrowUp />
                </button>
            </hgroup>

            <>
              { 
                firstToggle && 
                fragrance.map((item) => (

                    <div key={ item } className="filter-parameters py-[1.3rem] px-[1.1rem]">
                      <div className="flex items-center gap-[.5rem]">
                        <hgroup className='flex relative gap-[0.65rem] items-center justify-center'>
                          <input
                            type='checkbox'
                            id='remember-me'
                            className='w-[1.25rem] h-[1.25rem] border-solid border-black border-2 appearance-none shrink-0 checked:bg-primary checked:rounded-[3px] checked:border-0 focus:outline-none peer cursor-pointer'
                          />
                          
                          <CheckIcon className='hidden w-[1.25rem] h-[1.25rem] peer-checked:block absolute pointer-events-none left-[1.5%]' />
                        </hgroup>
                        <p>{ item }</p>
                      </div>
                    </div>
                ))
              }

            </>
       </section>

       {/* gender */}
       <section className="filter-group after:block after:w-full after:h-[2px] after:bg-light-gray">
            <hgroup className="filter-group py-[1.3rem] px-[1.1rem] flex items-center justify-between">
                <span className='text-base block font-semibold'>GENDER</span>
                <button onClick={() => setSecondToggle(!secondToggle)} className='flex items-center justify-center gap-[.5rem] px-[1rem] py-[.2rem] border-solid border-primary border-[1px] rounded-[1.56525rem] text-[.875rem]'>
            { !secondToggle ? 'Show' : 'Hide' }
                  <ArrowUp />
                </button>
            </hgroup>

            <>
              { 
                secondToggle && 
                gender.map((item) => (

                    <div key={ item } className="filter-parameters py-[1.3rem] px-[1.1rem]">
                      <div className="flex items-center gap-[.5rem]">
                        <hgroup className='flex relative gap-[0.65rem] items-center justify-center'>
                          <input
                            type='checkbox'
                            id='remember-me'
                            className='w-[1.25rem] h-[1.25rem] border-solid border-black border-2 appearance-none shrink-0 checked:bg-primary checked:rounded-[3px] checked:border-0 focus:outline-none peer cursor-pointer'
                          />
                          
                          <CheckIcon className='hidden w-[1.25rem] h-[1.25rem] peer-checked:block absolute pointer-events-none left-[-5%]' />
                        </hgroup>
                        <p>{ item }</p>
                      </div>
                    </div>
                ))
              }

            </>
       </section>

        {/* price */}
        <section className="price">
          <hgroup className="filter-group py-[1.4rem] px-[1.1rem] flex items-center justify-between">
              <span className='text-base block font-semibold'>PRICE</span>
              <button onClick={() => setThirdToggle(!thirdToggle)} className='flex items-center justify-center gap-[.5rem] px-[1rem] py-[.2rem] border-solid border-primary border-[1px] rounded-[1.56525rem] text-[.875rem]'>
                  { !thirdToggle ? 'Show' : 'Hide' }
                  <ArrowUp />
                </button>
          </hgroup>

          <>
            { 
              thirdToggle && 
              prices.map((item) => (

                  <div key={ item } className="filter-parameters py-[1.3rem] px-[1.1rem]">
                    <div className="flex items-center gap-[.5rem]">
                      <hgroup className='flex relative gap-[0.65rem] items-center justify-center'>
                        <input
                          type='checkbox'
                          id='remember-me'
                          className='w-[1.5rem] h-[1.5rem] border-solid border-black border-2 appearance-none shrink-0 checked:bg-primary rounded-full checked:border-0 focus:outline-none peer cursor-pointer'
                          name='radio'
                        />                        
                        <div className='bg-white hidden w-[.8rem] h-[.8rem] rounded-full peer-checked:block absolute pointer-events-none left-[10%]'>
                        </div>
                      </hgroup>
                      <p>{ item }</p>
                    </div>
                  </div>
              ))
            }
            {
              thirdToggle && 

              <div className="min-max py-[1.3rem] px-[1.1rem] w-[85%]">
                <div className="flex-items flex items-center justify-between">
                  <div className="input-group w-[40%]">
                    <input type="number" name='min' className='w-full border-solid border-light-gray outline-none border-[1px] h-[2.5rem] px-[1rem]' min={0}/>
                    <label htmlFor="min" className="block mt-[.25rem] text-black text-center">Min</label>
                  </div>
                  <div className='block h-[.05rem] mb-[1.4rem] w-[1.4rem] self-center bg-black'></div>
                  <div className="input-group w-[40%]">
                    <input type="number" name='max' className='w-full border-solid border-light-gray outline-none border-[1px] h-[2.5rem] px-[1rem]' min={0}/>
                    <label htmlFor="max" className="block mt-[.25rem] text-black text-center">Max</label>
                  </div>
                </div>
              </div>
            }  
          </>     
        </section>
    </section>
  )
}

export default Aside