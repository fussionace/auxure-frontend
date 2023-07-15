import React from 'react'
import signup from '../../assets/img/signup.png';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '../../assets/svg/svg-icons';
import Carousel from '../../components/bits/Carousel';
import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import slider3 from '../../assets/img/slider3.png';

const Signup = () => {
  return (
    <div className='w-full flex overflow-hidden min-h-screen'>
        <div className='md:w-[50%] hidden md:block fixed left-0 top-0'>
            <Carousel showControls={false} showIndicators={true}>
            {[slider1, slider2, slider3].map((img, index) => (
                <div key={index}>
                <img
                    src={img}
                    alt={`auxure slider img ${index + 1}`}
                    className='w-full h-full block object-cover object-top'
                />
                </div>
            ))}
            </Carousel>
        </div>
        <main className='md:ml-[50%] overflow-y-scroll py-[3rem] form-content md:w-[50%] w-full bg-accent-2 flex flex-col items-center justify-center'>
            <div className="form-title text-center mb-[4rem] text-lighter">
                <h1 className='font-primary mb-[1.8rem] md:text-[2.2rem] font-medium text-[2.1rem]'>Create an account</h1>
                <span className="font-primary block text-[1.1rem]">Get started with an account on Auxure</span>
            </div>
            {/* Google signup */}
            <div className="google-signup md:max-w-[25rem] w-[85%]">
                <Link to='#' className='flex py-[0.675rem] px-[1.25rem] justify-center items-center gap-[0.625rem] self-stretch bg-white border-[1px] border-solid border-secondary rounded-[0.625rem] font-semibold leading-1 text-base text-color'>
                    <GoogleIcon />
                    SIGN UP WITH GOOGLE
                </Link>
                <span className="block text-center font-semibold my-[1.3rem] text-lighter text-[1rem]">OR</span>
            </div>

            {/* main form elements */}
            <form className='md:max-w-[25rem] w-[85%]'>
                <div className="form-element">
                    <input type="email" className='w-full py-[0.575rem] px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3' placeholder='Email address'/>
                </div>
                <div className="form-element my-[1rem]">
                    <input type="password" className="w-full py-[0.575rem] px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3" placeholder='Password'/>
                </div>
                <div className="form-element mb-[2rem]">
                    <input type="password" className="w-full py-[0.575rem] px-[2.25rem] self-stretch rounded-[0.625rem] bg-white border-[1px] border-secondary border-solid outline-primary placeholder-lighter text-base font-light leading-3" placeholder='Confirm Password'/>
                    <small className='text-left block font-primary text-lighter text-[.85rem]'>8 or more characters</small>
                </div>
                <div className="form-submit-button">
                    <p className='font-primary text-lighter text-[.91rem]'>By signing up you agree with our <span className='text-primary font-semibold'><Link to='/'>Terms & Conditions</Link></span></p>
                    <button className='outline-hidden md:my-[1.2rem] my-[.9rem] h-[3.2rem] w-full rounded-[10px] border-none bg-primary text-white font-semibold text-[.9rem]'>SIGN UP</button>
                    <p className='text-center text-[.9rem]'>Already have an account? <span className='text-primary font-semibold'><Link to='/login'>Log In</Link></span></p>   
                </div>
            </form>
        </main>
    </div>
  )
}

export default Signup