import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
// import './index.css'; // Make sure to import the CSS file

const ConfirmEmail = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      <div className='text-center'>
        <AiOutlineMail className='mx-auto mb-2 text-6xl' />
        <h1 className=' mt-2 text-lg  mb-2 font-bold lett tracking-wider'>Confirm your email address</h1>
        <p className='mb-2'>We sent a confirmation email to</p>
        <p className='font-bold mb-2'><span></span>email@gmail.com</p>
        <p className='mb-2'>Check your email and click on <br /> the Confirmation link to continue</p>
        <button className='font-bold mt-32 w-32 h-10  rounded-lg  hover:bg-opacity-20 hover:border-[1.5px]' >Resend email</button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
