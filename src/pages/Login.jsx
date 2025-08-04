import React, { useState } from "react";
import deleticon from '../assets/images/x.svg'
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

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

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
                i < passcode.length ? "bg-white" : "bg-[#5C5762]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-8">
        {numbers.slice(0, 9).map((number) => (
          <button
            key={number}
            className="bg-[#363339] text-white w-[75px] h-[75px] cursor-pointer rounded-full text-[36px] font-normal"
            onClick={() => handleDigitClick(number)}
          >
            {number}
          </button>
        ))}
        <div></div>
        <button
          className="bg-[#363339]  w-[75px] h-[75px] text-[36px] text-white rounded-full text-xl"
          onClick={() => handleDigitClick("0")}
        >
          0
        </button>
        <button
          className="bg-[#363339] w-[75px] h-[75px] text-white text-[36px] rounded-full text-xl flex justify-center items-center"
          onClick={handleDelete}
        >
          <img src={deleticon} alt="" />
        </button>
      </div>

      <p className="text-[#F2FE8D] text-sm mt-4">Can not login?</p>
    </div>
  );
};

export default Login;
