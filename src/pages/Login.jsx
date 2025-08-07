import React, { useState } from "react";
import back from '../assets/images/back.svg'
import { numbers } from "../constans";
const Login = () => {
  const [passcode, setPasscode] = useState("");

  const handleDigitClick = (digit) => {
    if (passcode.length < 6) {
      setPasscode(passcode + digit);
    }
  };

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };



  return (
    <div className="h-screen bg-[#252626] flex flex-col pb-24 items-center justify-between pt-4 px-4">
      <div className="text-center mt-4">
        <p className='font-normal text-[18px] text-white'><span className='text-[#EEFC79] font-bold'>U</span>Bank</p>
        <p className="text-white mt-18 text-[17px] font-normal">Enter Passcode</p>
        <div className="flex justify-center gap-3 mt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-[10px] h-[10px] rounded-full ${
                i < passcode.length ? "bg-white" : "bg-[rgb(92,87,98)]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-8">
        {numbers.slice(0, 9).map((item) => (
          <button
            key={item.num}
            className="bg-[#363339] relative text-white w-[75px] h-[75px] cursor-pointer rounded-full text-[36px] font-normal"
            onClick={() => handleDigitClick(item.num)}
          >
             <p className="-mt-2.5 p-0">{item.num}</p>
             {item.text && <span className="text-[10px] absolute bottom-2.5 left-1/2 -translate-x-1/2 m-0 p-0">{item.text}</span>}
          </button>
        ))}
        <div></div>
        <button
          className="bg-[#363339]  w-[75px] h-[75px] text-[36px] text-white rounded-full text-xl"
          onClick={() => handleDigitClick("0")}
        >
          0
        </button>
          <img src={back} onClick={handleDelete} className="mt-6 ml-6" alt="" />
      </div>

      <p className="text-[#F2FE8D] text-sm mt-4">Can not login?</p>
    </div>
  );
};

export default Login;
