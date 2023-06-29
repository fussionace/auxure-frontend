import React from 'react'
import { ReactComponent as Google } from '../../assets/svg/google.svg';
import signup from '../../assets/img/signup.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='w-full flex'>
        <aside className='md:block hidden w-[50%] min-h-[100vh]'>
            <img src={ signup } alt="signup-image"  className='h-full w-full'/>
        </aside>
        <main className='min-h-[100vh] form-content md:w-[50%] w-full bg-accent-2 flex flex-col items-center justify-center py-[1.8rem]'>
            <div className="form-title text-center mb-[3rem]">
                <h1 className='font-primary text-lighter mb-[1rem] md:text-[2.6rem] text-[2.1rem]'>Create an account</h1>
                <span className="font-primary block text-lighter text-[1rem]">Get started with an account on Auxure</span>
            </div>
            {/* Google signup */}
            <div className="google-signup md:max-w-[25rem] w-[85%]">
                <button className='h-[2.8rem] w-full flex border-solid border-[1px] font-semibold border-primary bg-accent-3 rounded-[5px] items-center justify-center gap-[1rem] text-[.9rem]'>
                    <Google />
                    SIGN UP WITH GOOGLE
                </button>
                <small className="block text-center font-semibold my-[1.6rem]">OR</small>
            </div>

            {/* main form elements */}
            <form className='md:max-w-[25rem] w-[85%]'>
                <div className="form-element">
                    <input type="email" className="h-[2.8rem] w-full border-solid border-[1px] rounded-[5px] px-[2rem] placeholder:text-color outline-none text-[16px] border-primary" placeholder='Email address'/>
                </div>
                <div className="form-element">
                    <input type="password" className="my-[2rem] h-[2.8rem] w-full border-solid border-[1px] rounded-[5px] px-[2rem] placeholder:text-color outline-none text-[16px] outline-hidden border-primary" placeholder='Password'/>
                </div>
                <div className="form-element mb-[3rem]">
                    <input type="password" className="mb-[.5rem] h-[2.8rem] w-full border-solid border-[1px] rounded-[5px] px-[2rem] placeholder:text-color outline-none text-[16px] border-primary" placeholder='Confirm Password'/>
                    <small className='text-left block font-primary'>8 or more characters</small>
                </div>
                <div className="form-submit-button">
                    <p className='font-primary text-[.9rem]'>By signing up you agree with out <span className='text-primary font-semibold'><Link to='/'>Terms & Conditions</Link></span></p>
                    <button className='outline-hidden md:my-[1.2rem] my-[.9rem] h-[2.8rem] w-full rounded-[5px] border-none bg-primary text-white font-semibold text-[.9rem]'>SIGN UP</button>
                    <p className='text-center text-[.9rem]'>Already have an account <span className='text-primary font-semibold'><Link to='/login'>Log In</Link></span></p>   
                </div>
            </form>
        </main>
    </div>
  )
}

export default Signup