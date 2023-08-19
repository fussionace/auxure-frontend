import React from 'react';

import Navbar from "../../components/Navbar"
//import Button from "../../components/bits/Button"
import Container from "../../components/bits/Container"
import Input from "../../components/bits/Input"

const Checkout = () => {

  const initialState = {
    discount: '',
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Address: '',
    Zip: '',
    City: '',
    Country: '',
    CardNum: '',
    ExpirationDate: '',
    Cvv: ''
  }
  const [states, setStates] = React.useState(initialState)
  const { discount, Fname, Lname, Email, Phone, Address, Zip, City, Country, CardNum, ExpirationDate, Cvv } = states

  return (
    <div className=' min-h-[100vh]  bg-background-color'>
      <Container>
        <Navbar />
        <div className=" w-full">
          <img src="/src/assets/img/checkout-bg.png" alt="bg" className=" mb-[20px] w-full h-[100px] object-cover md:h-[148px] md:mb-[60px]" />
          <div className=' flex justify-between flex-col md:flex-row-reverse gap-[32px] '>
            <section className=' md:w-[50%] bg-white p-[24px] md:py-[48px]'>
              <p className='title'>Order Summary</p>
            </section>
            <section className=' w-full bg-white p-[24px] flex flex-col gap-[32px] md:py-[48px]'>
              <p className='title'>Personal Details</p>
              <div className=' w-full flex flex-col md:flex-row gap-[20px]'>
                <Input label={'First name'} placeholder={'John'} />
                <Input label={'Last name'} placeholder={'Doe'} />
              </div>
              <div className=' w-full flex flex-col md:flex-row gap-[20px]'>
                <Input label={'Email address'} placeholder={'abc@gmail.com'} />
                <Input label={'Phone number'} placeholder={'+234'} />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Checkout