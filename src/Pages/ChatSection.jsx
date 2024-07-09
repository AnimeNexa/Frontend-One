import React from "react";
import { FaArrowLeft, FaPhoneAlt, FaEllipsisV, FaCheck, FaCamera, FaImage, FaMicrophone} from "react-icons/fa";
import meme from "../assets/meme.png"
import Footer from "../Component/Footer";


const ChartSection = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#CCE5FF] w-full px-4 h-[68px]">
      <div className="flex items-center gap-5">
      <FaArrowLeft  className="text-[#000000] font-roboto-condensed"/>
        <img src={meme} width={10} height={10} className="w-[40px] h-[40px] rounded-full" />
        <span className="text-[#000000] font-roboto-condensed">user1</span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt  className="text-[#000000] font-roboto-condensed"/>

          <FaEllipsisV  className="text-[#000000] font-roboto-condensed"/>
        </div>
      </div>

      <div className="px-4">
     <div className="flex items-center w-full">
     <img src={meme} width={10} height={10} className="w-[40px] h-[40px] rounded-full" />
      <div className="flex gap-2 bg-[#D1D1D1] relative w-[183px] h-[37px] items-center justify-center rounded-t-[20px] rounded-r-[18px] mt-3 ">
        <h3 className="text-[12px] font-inter text-[#000000]">aqwwswxredwedze</h3>
    <span className="flex items-center relative top-2">
        <h3 className="text-[8px] font-inter text-[#000000] gap-1">11:22AM</h3>
      <div className="relative">
      <FaCheck className=" w-2 h-3 text-[#0094FF]"/>
      <FaCheck className="absolute top-1 w-2 h-3 text-[#0094FF]" />
      </div>
      </span>
      </div>
     </div>
      <div className="flex gap-2 bg-[#D1D1D1] w-[183px] h-[37px] items-center justify-center rounded-[20px] absolute right-4 mt-3 px-4">
        <h3 className="text-[12px] font-inter text-[#000000]">aqwwswxredwedze</h3>
    <span className="flex items-center relative top-2">
        <h3 className="text-[8px] font-inter text-[#000000] gap-1">11:22AM</h3>
      <div className="relative">
      <FaCheck className=" w-2 h-3 text-[#0094FF]"/>
      <FaCheck className="absolute top-1 w-2 h-3 text-[#0094FF]" />
      </div>
      </span>
      </div>
      </div>

      <div className="flex justify-between px-4 relative bg-[#CCE5FF] top-[68vh] rounded-xl h-[48px] items-center w-full">
        <FaCamera className="text-[#000000]"/>
        <div className="flex gap-2">
        </div>
        <input type="text" className="w-96 bg-transparent text-black outline-none" />
            <div className="flex gap-3 text-black">
            <FaImage />
            <FaMicrophone />
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChartSection;