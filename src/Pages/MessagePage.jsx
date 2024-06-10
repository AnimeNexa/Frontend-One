

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
// import "@fontsource/inter"; // Defaults to weight 400.
import Gloup from '../assets/gloup.png'
import meme from '../assets/meme.png';

const MessagePage = () => {
  const suggestedUsers = [
    {
      image: meme,
      username: "user1",
    },
    {
      image: meme,
      username: "user2",
    },
  ];

  return (
    <div className="px-4">
      <div className="h-[40px] items-center flex">
      <FaArrowLeft />
      </div>
      <div className="flex px-3 bg-[#CCE5FF] w-[268px] h-[48px] items-center rounded-[15px] gap-1 mt-4">
        <span className="text-[#000000] font-inter text-[16px]">To:</span>
        <input
          placeholder=""
          className="outline-none bg-[#CCE5FF] h-[48px] text-[#000000] text-[16px] font-roboto-condensed w-full"
        />
      </div>
      <div className="mt-4 mb-6 flex items-center gap-2">
      <img src={Gloup} width={20} height={15} />
        <span className="font-inter text-[13h px] text-[#FFFFFF]">
          Create a Group chat
        </span>
      </div>
      <div>
        <h2 className="text-[15px] font-roboto-condensed">
        Suggested
        </h2>
        
      {suggestedUsers.map((user, index) => (
        <div key={index} className="flex items-center gap-2 mt-4">
          {/* <img src={user.meme} width={10} height={10} className="w-[48px] h-[48px] rounded-full" /> */}
          <img src="image.jpg" al="true" />


          <h1 className="text-[#FFFFFF] text-[14px] font-roboto-condensed">{user.username}</h1>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MessagePage;

