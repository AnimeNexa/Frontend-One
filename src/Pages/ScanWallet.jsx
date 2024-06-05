// import React from 'react'
// import fileImage from '../assets/FileImage.png';
// import FrameImage from '../assets/FrameImage.png'
// import { Link } from 'react-router-dom';

// const ScanWallet = () => {
//   return (
//     <div className='h-[90vh] flex flex-col items-center justify-center'>
//    <div>
//     <p className='font-bold text-2xl'>Scan to connect your wallet</p>
//     <p>Bring the QR in the frame</p>
//     <div className='border-[#FFFFFF] border-8 mt-4 h-[304px] rounded-[24px] w-[304px]'></div>
//    </div>

//     <div className='flex mt-16 gap-4'>
//     <Link to="/messagepage" className="text-[#CCE5FF]">
//         <img src={fileImage} alt="file" />

//         </Link>
//         {/* <img src={fileImage} alt="file" /> */}
//         <img src={FrameImage} alt="frame" />
//     </div>

//   </div>
//   )
// }

// export default ScanWallet

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
//import '@fontsource/inter'; // Defaults to weight 400.
import profilepic from '../assets/Frame88.png';

const MessagePage = () => {
  const suggestedUsers = [
    {
      image: profilepic,
      username: "user1"
    }
  ];

  return (
    <div className="p-4">
      <FaArrowLeft />
      <div className="flex px-3 bg-[#CCE5FF] w-[268px] h-[48px] items-center rounded-[15px] gap-1 mt-4">
        <span className="text-[#000000] font-inter text-[16px]">To:</span>
        <input
          placeholder=""
          className="outline-none bg-[#CCE5FF] h-[48px] text-[#000000] text-[16px] font-roboto-condensed w-full"
        />
      </div>
      <div className="mt-4">
        <span className="font-inter text-[13px] text-[#FFFFFF]">Create a Group chat</span>
      </div>
      {suggestedUsers.map((user, index) => (
        <div key={index} className="flex items-center gap-2 mt-4">
          <img src={user.image} alt="profile" width={50} height={50} className="rounded-full"/>
          <h1 className="font-inter text-[#000000]">{user.username}</h1>
        </div>
      ))}
    </div>
  );
};

export default MessagePage;
