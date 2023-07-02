import React from "react";
import Carousel from "../components/bits/Login/carousel/Carousel";
import Form from "../components/bits/Login/Form/Form";
import { FcGoogle} from 'react-icons/fc';

const Login = () => {
  
  return (
    <div className="flex bg-accent-2">
      <section className='md:block hidden w-[50%] min-h-screen'>
        <Carousel />
      </section>
      <section className=" bg-red-600 m-auto flex flex-col justify-center ">
        <div className="mb-8">
          <h1 className="text-xl p-3">Log in to your account</h1>
          <p>To stay connected kindly log in to your account</p>
        </div>
        <Form />
        <div className="flex flex-col">
          <h4 className="my-1 m-auto">OR</h4>
          <button  className="flex items-center gap-1 justify-center w-full p-2 my-2 rounded-md border-[1px] font-semibold  border-primary-color">
           <span><FcGoogle size="24px"/></span> SIGN IN WITH GOOGLE
          </button>
          <p className="mt-2 m-auto">
            Dont have an account?{" "}
            <span className="text-primary-color">Sign up</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
