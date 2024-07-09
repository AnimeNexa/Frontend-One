import React from 'react';
import { FaHome, FaWallet, FaBell, FaVideo, FaBars } from 'react-icons/fa';


const Footer = () => {
  return (
	<footer className="flex justify-between items-center p-4 bg-gray-800 text-white">
	<FaBars className="text-2xl" />
	<div className="flex gap-4">
		<FaHome className="text-2xl" />
		<FaWallet className="text-2xl" />
		<FaBell className="text-2xl" />
		<FaVideo className="text-2xl" />
	</div>
	</footer>
  );
};

export default Footer;