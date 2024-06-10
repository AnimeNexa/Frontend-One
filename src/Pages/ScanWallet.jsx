
import React from 'react'
import fileImage from '../assets/FileImage.png';
import FrameImage from '../assets/FrameImage.png'
import { Link } from 'react-router-dom';

const ScanWallet = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
   <div>
    <p className='font-bold text-2xl'>Scan to connect your wallet</p>
    <p>Bring the QR in the frame</p>
    <div className='border-[#FFFFFF] border-8 mt-4 h-[304px] rounded-[24px] w-[304px]'></div>
   </div>

    <div className='flex mt-16 gap-4'>
    <Link to="/messagepage" className="text-[#CCE5FF]">
        <img src={fileImage} alt="file" />

        </Link>
        {/* <img src={fileImage} alt="file" /> */}
        <img src={FrameImage} alt="frame" />
    </div>

  </div>
  )
}

export default ScanWallet

