import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'
import { FaCcVisa } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
const Transfer = () => {
  const [amount, setAmount] = useState('');
const navigate=useNavigate()
  const handleKeyPress = (value) => {
    if (value === 'x') {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const numbers = ['1','2','3','4','5','6','7','8','9','0','x'];

  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#0E0E0E] to-[#1B1B1B] text-white px-5 py-6 pb-20 space-y-6">
      <div className='flex items-center justify-between'>
                <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-[#252626]'>
                   <GoChevronLeft onClick={()=>navigate(-1)} className='text-white w-5 h-5'/>
                </div>
                <p className='text-white text-[16px] font-medium'>Transfer</p>
                 <div></div>
         </div>
      <div className="bg-[#363339] w-[327px] h-10 rounded-xl px-4 py-3 flex justify-between items-center text-lg tracking-widest">
        <span className='text-[12px]'>3010 3911 0230 6917</span>
        <img className='w-12' src={logo} alt="" />
      </div>
      <div className="text-center text-[32px] font-bold">
        ${amount || '0'}
      </div>
      <div className="rounded-xl px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#363339] p-2 rounded-full">
            <img className='w-12' src={logo} alt="" />
          </div>
          <div>
            <div className="text-[16px]">Visa</div>
            <div className="text-sm text-gray-400">$ 5,200.15</div>
          </div>
        </div>
        <div className="text-sm text-gray-400">•• 5534</div>
      </div>
      <button className="w-full py-3 rounded-full cursor-pointer font-semibold text-[15px] text-black bg-gradient-to-l from-[#FCFFDF] to-[#F1FE87]">
        Send
      </button>
      <div className="grid grid-cols-3 gap-2.5 pt-4">
        {numbers.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className="bg-[#2C2C2E] cursor-pointer rounded-full py-4 text-xl font-semibold hover:scale-105 transition"
          >
            {key === 'x' ? '⌫' : key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Transfer;
