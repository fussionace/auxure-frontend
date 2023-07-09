import React from 'react'
import signup from '../../assets/img/signup.png';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '../../assets/svg/svg-icons';
import Carousel from '../../components/Carousel';

const Signup = () => {
  return (
    <div className='w-full flex overflow-y-hidden min-h-screen'>
        <aside className='carousel-wrapper relative md:block hidden w-[50%] min-h-screen overflow-hidden'>
            <div className="carousel-items h-full">
                <Carousel/>
            </div>
        </aside>
        <main className='min-h-screen form-content md:w-[50%] w-full bg-accent-2 flex flex-col items-center justify-center py-[1.8rem]'>
            <div className="form-title text-center mb-[4rem] text-lighter">
                <h1 className='font-primary mb-[1.8rem] md:text-[2.2rem] font-medium text-[2.1rem]'>Create an account</h1>
                <span className="font-primary block text-[1.1rem]">Get started with an account on Auxure</span>
            </div>
            {/* Google signup */}
            <div className="google-signup md:max-w-[25rem] w-[85%]">
                <button className='h-[3.2rem] w-full flex border-solid border-[1px] font-semibold border-primary bg-white rounded-[10px] items-center justify-center gap-[.7rem] text-[.9rem]'>
                    <GoogleIcon />
                    SIGN UP WITH GOOGLE
                </button>
                <span className="block text-center font-semibold my-[1.3rem] text-lighter text-[1rem]">OR</span>
            </div>

            {/* main form elements */}
            <form className='md:max-w-[25rem] w-[85%]'>
                <div className="form-element">
                    <input type="email" className="h-[3.2rem] w-full border-solid border-[1px] rounded-[10px] px-[2rem] placeholder:text-lighter outline-none placeholder:font-primary text-[16px] border-primary" placeholder='Email address'/>
                </div>
                <div className="form-element">
                    <input type="password" className="my-[1.5rem] h-[3.2rem] w-full border-solid border-[1px] rounded-[10px] px-[2rem] placeholder:text-lighter placeholder:font-primary outline-none text-[16px] outline-hidden border-primary" placeholder='Password'/>
                </div>
                <div className="form-element mb-[2rem]">
                    <input type="password" className="mb-[.5rem] h-[3.2rem] w-full border-solid border-[1px] rounded-[10px] px-[2rem] placeholder:text-lighter outline-none placeholder:font-primary text-[16px] border-primary" placeholder='Confirm Password'/>
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