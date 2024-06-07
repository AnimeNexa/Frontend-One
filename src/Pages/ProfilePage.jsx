import React, { useState } from "react";
import spider from "../assets/spider.png";
import meme from "../assets/meme.png";
import { FaUser } from "react-icons/fa";
import meme4 from "../assets/meme4.png";
import meme5 from "../assets/meme5.png";
import meme2 from "../assets/meme2.png";
import meme1 from "../assets/meme1.png";
import meme3 from "../assets/meme3.png";
import { FaShareNodes, FaArrowLeft} from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";

const ProfilePage = () => {
  const ProfileDetails = [
    {
      Image: meme,
      span: "followers",
      numz1: "10",
      span2: "following",
      numz2: "10",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const ImageList = [
    meme4,
    meme5,
    meme2,
    meme,
    meme1,
    meme3,
  ];

  return (
    <div className="">
      <div className="relative h-[68px] items-center flex justify-between px-4">
        <div className="flex items-center justify-between">
          <FaArrowLeft />
        </div>
          <span className="text-[13px] font-inter">@xyz00001</span>
        <div className="flex gap-4">
        <FaShareNodes />
        <FaEllipsisV />
        </div>
      </div>
      <img
        src={spider}
        alt="frame"
        width={10}
        height={10}
        className="w-full h-[132px]"
      />
      <div>
        {ProfileDetails.map((profile, index) => (
          <div
            key={index}
            className="flex items-center gap-4 absolute top-[191px] px-4"
          >
            <img
              src={profile.Image}
              width={10}
              height={10}
              className="w-[80px] h-[80px] rounded-full"
            />
            <div className="flex gap-3">
              <div className="grid">
                <span className="text-[13px] font-roboto-condensed">
                  {profile.span}
                </span>
                <span className="text-[13px] font-roboto-condensed">
                  {profile.numz1}
                </span>
              </div>
              <div className="grid">
                <span className="text-[13px] font-roboto-condensed">
                  {profile.span2}
                </span>
                <span className="text-[13px] font-roboto-condensed">
                  {profile.numz2}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="px-4 mb-4">
          <div className="relative top-16 mb-16">
            <h1 className="text-[22px] font-roboto-condensed">Zangetsu</h1>
            <h2 className="text-[13px] font-roboto-condensed mt-2">
              Video Editor | Animator | Anime Lover <br />
              Aot is the greatest story telling anime <br />I like women with
              thick thighs and butt
            </h2>
          </div>
          <div className="flex gap-1">
            <div className="bg-[#000000] justify-center top-26 flex gap-4 w-[150px] h-[27px] rounded-[5px]">
              <div className="flex gap-3 items-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#4200FF]"></div>
                <h1 className="text-[13px] font-roboto-condensed">0 NFT</h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF0000]"></div>
                <h1 className="text-[13px] font-roboto-condensed">0 XP</h1>
              </div>
            </div>
            <h1 className="bg-[#000000] justify-center top-26 flex gap-4 w-[80px] items-center h-[27px] rounded-[5px] text-[13px] font-roboto-condensed">
              Edit profile
            </h1>
            <div className="flex items-center bg-[#000000] w-[40px] h-[27px] justify-center rounded-[8px]">
              <FaUser />
              <span>+</span>
            </div>
          </div>
        </div>

<div className="bg-[#A2AABC] h-[62vh] relative grid">
        <div className="flex justify-between ">
          <div>
            <button
              onClick={() => toggleDropdown("first")}
              className="text-[13px] font-inter text-[#000000] px-4"
            >
              Posts
            </button>
              <div className="w-18 bg-[#000000] relative h-1 mb-3"></div>
            {openDropdown === "first" && (
              <div className="grid grid-cols-3 justify-center gap-[2px] items-center absolute">
                {ImageList.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`meme ${index}`}
                    className="w-[100%] h-[100%]"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("second")}
              className="text-[13px] font-inter text-[#000000] mb-3"
            >
              Featured
            </button>
            {openDropdown === "second" && (
              <div className="grid grid-cols-3 gap-4 mt-2">
                
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("third")}
              className="text-[13px] font-inter text-[#000000] px-4 mb-3"
            >
              Reel
            </button>
            {openDropdown === "third" && (
              <div className="grid grid-cols-3 gap-4 mt-2">
                
              </div>
            )}
          </div>
        </div>
          <div className="flex justify-center mb-4 relative">
            <h1 className="bg-[#000000] w-[60px] h-[60px] rounded-full absolute bottom-0 items-center justify-center flex text-[40px]">+</h1>
          </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
