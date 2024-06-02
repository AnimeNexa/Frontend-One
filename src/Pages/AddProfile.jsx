import React from 'react'
import { CiCamera } from "react-icons/ci";

const AddProfile = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
      <div className=' items-center border-[5px] flex justify-center text-center w-[164px] h-[164px] rounded-full border-[#546583]'>
        <CiCamera className='w-[115px] h-[115px] text-[#8EA3BE]' />
      </div>
      <p className='font-bold text-2xl mt-2'>Add profile photo</p>
      <p className='text-xl mt-2'>Add a profile picture so your Friends know it’s you.</p>

      <button className='bg-[#CCE5FF] text-[#000000] p-2 w-[328px] rounded-md mt-2 font-bold text-2xl'>Add a photo</button>
      <button className=' p-2 w-[328px] rounded-md text-2xl mt-2'>Skip</button>
    </div>
  )
}

export default AddProfile
