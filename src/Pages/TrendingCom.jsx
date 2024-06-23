import React from 'react'
import TrendOne from '../assets/TrendOne.png';
import TrendTwo from '../assets/TrendTwo.png'
import { FaSliders } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Ellips from '../assets/Ellipse.svg'
import { FaChevronRight } from "react-icons/fa6";

const TrendingCom = () => {
  return (
    
    <div className=' flex items-center justify-center'>
      <div className='text-center'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[19px] font-roboto-condensed my-2'>Trending Community post</h1>
          <FaSliders size={24} />
        </div>
        <div className='w-[244px] '>
          <img src={TrendTwo} alt="trend" />
          <p className='text-[10px] font-[400] text-start my-2'>Cricket: Cricket is the worst sport EVER created in the universe. 
            It should not be this overrated.</p>
        </div>

        <div className='flex gap-10 w-[328px] bg-[#CCE5FF] rounded-2xl p-4 my-2'>
          <FiSearch size={24} className='text-[#000000]' />
          <input type="text" placeholder='Search groups' className='flex outline-none bg-[#CCE5FF] text-black' />
        </div>
        <p className='font-bold text-start text-[19px]'>Trending in Dragon Bal</p>
        <div className='flex justify-between px-4 items-center'>
          <p className='font-bold my-2 text-[16px]'>Related to Tokyo Ghoul</p>
          <FaChevronRight />
        </div>


        <div className='flex flex-col gap-2 border-2 border-white rounded-2xl p-4 '>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={Ellips} alt="" className='w-[30px] h-[30px] rounded-full object-cover'/>
                <div className='flex flex-col items-start'>
                  <p className='text-[13px]'>DBZ Villains Group </p> 
                  <p className='text-[10px]'>12k Memberr </p>
                </div>
               
            </div>
            <div>
            <button className='bg-[#CCE5FF] rounded-[10px] text-[#303F60] px-4 py-1'>Join</button>
            </div>
          </div>
         
          <p className='text-[13px] my-2'>DB villains fan club. Lets talk about villains in DB.</p>

        </div>

        <div className='flex justify-between px-4 items-center'>
          <p className='font-bold my-2'>Related to Tokyo Ghoul</p>
          <FaChevronRight />
        </div>

        <div className='flex flex-col gap-2 border-2 border-white rounded-2xl p-4 '>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={Ellips} alt="" className='w-[30px] h-[30px] rounded-full object-cover'/>
                <div className='flex flex-col items-start'>
                  <p className='text-[13px]'>DBZ Villains Group </p> 
                  <p className='text-[10px]'>12k Memberr </p>
                </div>
               
            </div>
            <div>
            <button className='bg-[#CCE5FF] rounded-[10px] text-[#303F60] px-4 py-1'>Join</button>
            </div>
          </div>
          <p className='text-[13px] my-2'>DB villains fan club. Lets talk about villains in DB.</p>

        </div>

        <div className='flex justify-between px-4 items-center'>
          <p className='font-bold my-2'>Related to Tokyo Ghoul</p>
          <FaChevronRight />
        </div>
        
      </div>
    </div>
      

  )
}

export default TrendingCom
