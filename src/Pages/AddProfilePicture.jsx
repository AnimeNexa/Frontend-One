import React, { useState } from 'react';
import { CiCamera } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const AddProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = async () => {
    // Here you would typically send the selected file to a server.
    // This is just a placeholder function.
    console.log("File uploaded:", selectedFile);
  };

  const handleSkip = () => {
    // Replace "/nextPage" with the route you want to navigate to.
    navigate("/scanwallet");
  };

  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
      <div className=' items-center border-[5px] flex justify-center text-center w-[164px] h-[164px] rounded-full border-[#546583]'>
        {selectedFile ? <img src={selectedFile} alt="Profile" className='w-[115px] h-[115px] rounded-full' /> : <CiCamera className='w-[115px] h-[115px] text-[#8EA3BE]' />}
      </div>
      <p className='font-bold text-2xl mt-2'>Add profile photo</p>
      <p className='text-xl mt-2'>Add a profile picture so your Friends know it’s you.</p>

      <input type="file" accept="image/*" onChange={handleFileChange} className='hidden' id="fileUpload" />
      <label htmlFor="fileUpload" className='bg-transparent hover:bg-[#CCE5FF] text-[#000000] p-2 w-[328px] rounded-md mt-2 text-2xl cursor-pointer text-center'>Add a photo</label>
      {selectedFile && <button onClick={handleUpload} className='bg-transparent hover:bg-[#CCE5FF] text-[#000000] p-2 w-[328px] rounded-md mt-2 text-2xl'>Upload</button>}
      <button onClick={handleSkip} className=' p-2 w-[328px] rounded-md text-2xl mt-2'>Skip</button>
    </div>
  );
};

export default AddProfile;