import React from 'react';
import metamask from '../assets/metamask.png';
import bravewallet from '../assets/bravewallet.png';
import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import opera from '../assets/opera.png';
import safepal from '../assets/safepal.png';
import Trust from '../assets/Trust.png'; 
import walletconnect from '../assets/walletconnect.png';
import mathwallet from '../assets/mathwallet.png';

const walletData = [
    {
      name: 'Brave',
      image: bravewallet
    },
    {
      name: 'Metamask',
      image: metamask
    },
    {
      name: 'Math',
      image: mathwallet
    },
    {
      name: 'WalletConnect',
      image: walletconnect
    },
    {
      name: 'Binance',
      image: binance
    },
    {
      name: 'Coinbase',
      image: coinbase
    },
    {
      name: 'Opera',
      image: opera
    },
    {
      name: 'SafePal',
      image: safepal
    },
    {
      name: 'Trust',
      image: Trust
    }
];

const ConnectWallet = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-2xl mb-2'>Connect with wallet</h1>
        <p>Connect to one of your wallet providers or <br /> create a new one. Your crypto wallet securely <br /> stores your digital goods.</p>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {walletData.map((wallet, index) => (
          <div key={index} className='text-center'>
            <img src={wallet.image} alt={wallet.name} className='w-20 h-20 mx-auto mb-2 cursor-pointer' />
            <p>{wallet.name}</p>
          </div>
        ))}
      </div>
      <button className='bg-[#CCE5FF] text-[#000000] p-2 w-72 rounded-md font-bold mt-4'>Connect</button>
      <button className=' p-2 w-72 rounded-md mt-4 border-2 border-[#CCE5FF] text-white'>Skip</button>
    </div>
  );
};

export default ConnectWallet;
