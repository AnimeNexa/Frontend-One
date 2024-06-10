import { FaArrowLeft } from "react-icons/fa";

const SelectColor = () => {
  return (
    <div className="px-4">
      <div className="flex gap-4 items-center h-[68px]">
        <FaArrowLeft />
        <h4 className="font-roboto-condensed text-[14px]">Select colors</h4>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-[40%]">
        <div className="bg-[#FFFFFF] w-[134px] h-[112px] p-5"></div>
        <div className="bg-[#BD00FF] w-[134px] h-[112px]"></div>
        <div className="bg-[#007737] w-[134px] h-[112px]"></div>
        <div className="bg-[#DDB44A] w-[134px] h-[112px]"></div>
        <div className="bg-[#FF0000] w-[134px] h-[112px]"></div>
        <div className="bg-[#0066FF] w-[134px] h-[112px]"></div>
        <div className="bg-[#00A3FF] w-[134px] h-[112px]"></div>
        <div className="bg-[#424242] w-[134px] h-[112px]"></div>
      </div>

      <div className="">
        <button className="relative left-[70%] mb-5 bg-[#CCE5FF] w-[80px] h-[28px] text-[#000000] font-inter rounded-[10px]">
          Set
        </button>
      </div>
    </div>
  );
};

export default SelectColor;
