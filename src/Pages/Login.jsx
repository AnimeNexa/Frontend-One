import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    return (
        <div style={{fontFamily:"'Montserrat', sans-serif ", fontSize: '15px' }}>
            <h1 className=' text-[24px]'>Welcome Back</h1>
            <p className='text-[#808080]'>Please Enter your details to Sign in</p>
            <div className='flex flex-col gap-5 m-5 items-center'>
                <input type='email' placeholder='Email Address' className='border-2 text-black p-2 rounded-md w-72' />
                <div className='relative'>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='border-2  p-2 rounded-md w-72 text-black' />
                    <button onClick={togglePasswordVisibility} className='absolute right-2 top-2 text-black'>
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
            </div>
            <button className='bg-[#CCE5FF] text-[#000000] p-2 w-72 rounded-md'>Sign In</button>
            <p className='text-[#FFFFFF] mt-6'>Forgot your password? <Link to='/reset' className='text-[#CCE5FF]'>Reset Password</Link></p>
            <p className='text-[#FFFFFF] mt-24'>Don&apos;t have an account? <Link to='/signup' className='text-[#CCE5FF]'>Sign Up</Link></p>
        </div>
    )
}

export default Login;
