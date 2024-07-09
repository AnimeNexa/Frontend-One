import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import Footer from '../Component/Footer';

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const colors = ['#FFFFFF', '#BD00FF', '#007737', '#DDB44A', '#FF0000', '#0066FF', '#00A3FF', '#424242'];

  return (
    <div className="px-4">
      <div className="flex gap-4 items-center h-[68px]">
        <FaArrowLeft />
        <h4 className="font-roboto-condensed text-[14px]">Select colors</h4>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-[40%]">
        {colors.map((color, index) => (
          <div 
            key={index}
            className="w-[134px] h-[112px] p-5"
            style={{backgroundColor: color}}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>

      <div className="">
        <button className="relative left-[70%] mb-5 bg-[#CCE5FF] w-[80px] h-[28px] text-[#000000] font-inter rounded-[10px]">
          Set
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SelectColor;
