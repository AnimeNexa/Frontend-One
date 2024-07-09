import React from "react";
// import {  } from "react-icons/fa";
import { FaEdit, FaArrowLeft, FaSearch } from "react-icons/fa";
import memeImg from "../assets/meme.png";
import Footer from "../Component/Footer";

const UserMessage = () => {
  const Unread = [
    {
      img: memeImg,
      user: "User1",
      unreadMass: "4+ unread messages",
    },
    {
      img: memeImg,
      user: "User1",
      unreadMass: "4+ unread messages",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 w-full gap-[86px] p-4">
        <FaArrowLeft className="text-[#FFFFFF] w-[24px] h-[24px]" />
        <FaEdit className="text-[#FFFFFF] w-[24px] h-[24px]" />
      </div>
      <div className="px-4">
        <div className="flex items-center bg-[#CCE5FF] w-[278px] h-[48px] px-4 rounded-[15px] gap-2 mb-5">
          <FaSearch className="text-[#000000] w-[20px] h-[20px]" />
          <input
            placeholder=""
            className="outline-none bg-[#CCE5FF] h-[48px] text-[#000000] text-[16px] font-roboto-condensed w-full"
          />
        </div>

        <div>
          <span className="text-[15px] font-roboto-condensed">Messages</span>
          {Unread.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={item.img}  className="w-[48px] h-[48px] rounded-full" />

              <div className="grid justify-start items-start gap-1 mb-8 mt-4">
                <h2 className="text-[14px] font-roboto-condensed">
                  {item.user}
                </h2>
                <h2 className="text-[14px] font-roboto-condensed">
                  {item.unreadMass}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserMessage;
