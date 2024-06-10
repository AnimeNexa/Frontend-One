import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    return (
    <main className='h-[90vh] flex flex-col items-center justify-center'>
        <div style={{fontFamily:"'Montserrat', sans-serif ", fontSize: '15px', marginTop: "20px" }}>
            <div className='text-center'>
            <h1 className=' text-[24px] font-bold'>Sign Up</h1>
            <p className='text-[#808080]'>Please Enter your details to Sign Up</p>
            </div>
            <div className='flex flex-col gap-5 m-5 items-center'>
                <input type='email' placeholder='Email Address' className='border-[1.5px] p-2 rounded-md w-72 bg-transparent outline-none' />
                <div className='relative'>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='border-[1.5px]  p-2 rounded-md w-72 bg-transparent outline-none' />
                    <button onClick={togglePasswordVisibility} className='absolute right-2 top-2'>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
                <div className='relative'>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' className='border-[1.5px]  p-2 rounded-md w-72 bg-transparent outline-none' />
                    <button onClick={togglePasswordVisibility} className='absolute right-2 top-2 '>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
            </div>
            <button className='bg-[#CCE5FF] text-[#000000] p-2 w-72 rounded-md ml-6'>Sign Up</button>
            <p className='text-[#FFFFFF] mt-6 text-center'>Already a User? <Link to='/login' className='text-[#CCE5FF]'>Login</Link></p>
        </div>
       </main> 
    )
}

export default Signup