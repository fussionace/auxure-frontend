import React, { useState} from 'react';
import frame from '../../assets/img/frame353.png'
import { ArrowDown, Filter, GridView, ListView } from '../../assets/svg/svg-icons';
import Aside from '../../components/shopPage/Aside';
import image1 from '../../assets/img/productImages/image1.jpg'
import image2 from '../../assets/img/productImages/image2.png'
import image3 from '../../assets/img/productImages/image3.jpg'
import image4 from '../../assets/img/productImages/image4.png'
import GridProductView from '../../components/shopPage/GridProductView';
import ListProductView from '../../components/shopPage/ListProductView';

const Shop = () => {

  const [toggleView, setToggleView ] = useState(true);
  const [showAside, setShowAside ] = useState(false);

  const cartItems  = [
    {
      img: image1,
      name: 'Enchanted Elixir',
      price: 'N125,000',
      star: '4.8 (12)',
      desc:'A captivating blend of rare botanicals and sensual allure, this enchanting fragrance transports you to a realm of elegance and mystery.'
    },
    {
      img: image2,
      name: 'Opulent Aura',
      star: '4.5 (23)',
      price: 'N134,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image3,
      name: 'Golden Serenade',
      star: '4.8 (27)',
      price: 'N128,500',
      desc:'Experience the celestial realm with "Celestial Essence," a transcendent fragrance that transports you to a world of ethereal beauty and divine wonder.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },
    {
      img: image4,
      name: 'Celestial Essence',
      star: '4.9 (31)',
      price: 'N135,500',
      desc:'This luxurious fragrance caresses the senses, leaving an unforgettable trail of opulence and allure in its wake.'
    },    
  ]
 

  return(
      <div className='min-h-[100vh]'>
        {/* header image */}
        <hgroup className="pt-[2.5rem] pb-[2rem] picture md:bg-background-color bg-white flex items-center justify-center lg:px-[6.5rem]">
          <img src={ frame } alt="page title"  className='object-cover w-full h-full container'/>
        </hgroup>

        {/* page content */}
        <div className="md:block hidden desktop-page-icons bg-white pt-[2rem]">
          <div className="lg:px-[6.5rem] md:px-[2rem] flex items-center justify-between mx-auto">
            {/* aside */}
            <div className="items-number">
              <p className='text-base'><span className='font-semibold'>Showing 1-9</span> of 20 Products</p>
            </div>

            {/* main */}
            <div className="filters md:w-[65.5%] w-full flex items-center justify-between">
              <div className="views flex items-center justify-start gap-[1rem]">
                <p className='font-semibold text-base'>VIEWS:</p>
                <button onClick={() => setToggleView(true)}>
                  <GridView />
                </button>
                <button onClick={() => setToggleView(false)}>
                  <ListView />
                </button>
              </div>
              <div className="sort-btn md:block hidden">                  
                <button className='text-[.79rem] bg-accent-5 border-solid border-2 border-accent-2 text-gray rounded-[6px] py-[.7rem] px-[1.2rem] flex items-center gap-[.9rem]'>SORT BY <ArrowDown /></button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="mobile-view bg-white md:hidden block">
          <div className="mb-[2rem] after:block after:w-full after:h-[2px] after:bg-light-gray before:block before:w-full before:h-[2px] before:bg-light-gray">
            <div className="inner-container py-[.85rem] flex items-center justify-center gap-[3.75rem]">
              <div className="sort_by flex items-center gap-[.5rem] cursor-pointer">
                <span className='text-[.875rem]'>SORT BY</span>
                <ArrowDown />
              </div>
              <button onClick={() => setShowAside(true)} className="filter flex items-center gap-[.5rem]">
                <span className='text-[.875rem]'>FILTER</span>
                <Filter />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-[1rem] w-full px-[1rem]">
              {/* aside */}
              <div className="items-number">
                <p className='numbers text-[.875rem] line-clamp-1'><span className='font-semibold'>Showing 1-4</span> of 20 Products</p>
              </div>
              {/* main */}
              <div className="views flex items-center justify-start gap-[1rem]">
                <p className='font-semibold text-[.875rem]'>VIEW:</p>                
                <button onClick={() => setToggleView(true)}>
                  <GridView />
                </button>
                <button onClick={() => setToggleView(false)}>
                  <ListView />
                </button>
              </div>
            </div>
        </div>

        <div className="page-content bg-white min-h-screen pt-[1rem] pb-[3rem]">
          <div className="lg:px-[6.5rem] md:px-[2rem] mt-[2rem] w-full flex items-start justify-between mx-auto">
            <aside className={showAside ? 'md:block bg-white md:static fixed overflow-y-scroll top-0 filters h-full md:w-[30%] w-full' : 'md:block bg-white hidden h-full md:w-[30%] w-full'}>
              <Aside setShowAside={ setShowAside }/>
            </aside>
            
            <main className="products md:w-[65%] h-full w-full">
              <div className="content-grid min-h-[100vh] w-full">
                 { toggleView ? <GridProductView cartItems={ cartItems } /> : <ListProductView cartItems={ cartItems }/> } 
              </div>
            </main>
          </div>
        </div>   
    </div>
    ) 
    
};

export default Shop;
