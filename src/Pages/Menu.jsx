import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

const Menu = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex gap-4 items-center p-4'>
         <IoMdArrowBack size={24} />
        <p>Menu</p>
      </div>

      {/* general div  */}
      <div className='text-[15px]'>
        <p className='py-2 px-4'>Genaral</p>
        <div className=' items-start gap-2 bg-[#CCE5FF] text-[#000000]'>
            <button className='py-2 px-4 text-center'>Account Settings</button>
            <div className="border-2 border-[#000000] w-full"></div>
            <button className='px-4 py-2 text-center'>Themes</button>
            
        </div>
      </div>

         {/* Premium  */}
        <div className='text-[15px]'>
            <p className='py-2 px-4'>Premium</p>
            <div className=' items-start gap-2 bg-[#CCE5FF] text-[#000000]'>
                <button className='py-2 px-4 text-center'>Get Premium</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>Wallets</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>NFT Market</button>
                
            </div>
      </div>

      {/* About  */}
      <div className='text-[15px]'>
            <p className='py-2 px-4'>About</p>
            <div className=' items-start gap-2 bg-[#CCE5FF] text-[#000000]'>
                <button className='py-2 px-4 text-center'>Content</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>Privacy Policy</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>User Agreement</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>Acknowledgment</button>
                
            </div>
      </div>

      {/* About  */}
      <div className='text-[15px]'>
            <p className='py-2 px-4'>About</p>
            <div className=' items-start gap-2 bg-[#CCE5FF] text-[#000000]'>
                <button className='py-2 px-4 text-center'>Help Center</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>Roport an issue</button>
                <div className="border-2 border-[#000000] w-full"></div>
                <button className='px-4 py-2 text-center'>Logout</button>
                
            </div>
      </div>

    </div>
  )
}

export default Menu
