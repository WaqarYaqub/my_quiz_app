import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="grid grid-cols-3 gap-x-[12px] flex justify-center items-center">
      <div className="col-span-2 relative w-full h-[10px] bg-gray-300 rounded-lg">
        <div
          className={`absolute top-0 left-0 w-[${percentage}%] h-full bg-gradient-to-r ${
            percentage <= 33
              ? "from-[#DE0606] to-[#FF5F5F]"
              : percentage <= 66
              ? "from-[#F38E30] to-[#FFD12E]"
              : percentage <= 100
              ? "from-[#28DE87] to-[#049CCC]"
              : ""
          } rounded-lg`}
          style={{ width: percentage + "%" }}
        ></div>
      </div>
      <div className="col-span-1">
        <p className="text-[#62666E] text-[14px] font-rubik text-right">
          {percentage <= 33
            ? "Novice"
            : percentage <= 66
            ? "Intermediete"
            : percentage <= 100
            ? "Expert"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
