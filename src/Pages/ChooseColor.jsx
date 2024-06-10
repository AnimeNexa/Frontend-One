import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Human from "../assets/human.png";

const ChooseColor = () => {
  const HorizontalScroll = [
    {
      Image: Human,
    },
    {
      Image: Human,
    },
    {
      Image: Human,
    }
  ];
  return (
    <div>
      <div className="flex gap-4 items-center">
        <FaArrowLeft />
        <h4 className="font-roboto-condensed text-[14px]">Select theme</h4>
      </div>
      <div className="overflow-v-auto h-[300px] flex">  {/* Use flex instead of grid-row */}
  {HorizontalScroll.map((img, index) => (
    <div key={index} className="overflow-x-auto">
      <img src={img.Image} className="w-[203px] h-[315px]" />  {/* Remove width and height */}
    </div>
  ))}
</div>
      <div className="grid justify-center text-center gap-2">
        <span className="text-[13px] font-roboto-condensed">
          Choose from device
        </span>
        <span className="text-[13px] font-roboto-condensed">
          Choose from solid colors
        </span>
      </div>
      <button className="absolute  bottom-4 right-6 bg-[#CCE5FF] w-[80px] h-[28px] text-[#000000] font-inter rounded-[10px]">
        Set
      </button>
    </div>
  );
};

export default ChooseColor;