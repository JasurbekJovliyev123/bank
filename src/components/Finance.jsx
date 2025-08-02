import React from 'react';
import { finance } from '../constans';
const Finance = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide mb-5">
      <h2 className='mt-3 text-white font-medium text-sm'>Finance</h2>
      <div className="flex gap-4 py-4 w-max">
        {finance.map((card) => (
          <div
            key={card.id}
            className={`w-[100px] h-[100px] rounded-2xl p-3.5 bg-[#252626] flex-shrink-0 shadow-md transition `}
          >
            <div style={{backgroundColor:card.color}} className={`p-2 w-8 h-8 rounded-2xl  mb-[12px] bg-[${card.color}]`}>
               <img src={card.img} className='w-4 h-4' alt="" />
            </div>
            <div className="text-[12px] text-white font-medium">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
