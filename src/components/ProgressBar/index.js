"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ percentage }) => {
  const [gradFrom, setGradFrom] = useState("DE0606");
  const [gradTo, setGradTo] = useState("FF5F5F");
  const [progressStatus, setStatus] = useState("");

  // useEffect(() => {
  //   if (percentage >= 0 && percentage <= 33) {
  //     setGradFrom("#DE0606");
  //     setGradTo("#FF5F5F");
  //     setStatus("Novice");
  //   }
  //   if (percentage > 33 && percentage <= 66) {
  //     setGradFrom("#F38E30");
  //     setGradTo("#FFD12E");
  //     setStatus("Intermediete");
  //   }
  //   if (percentage > 66 && percentage <= 100) {
  //     setGradFrom("#28DE87");
  //     setGradTo("#049CCC");
  //     setStatus("Expert");
  //   }
  // }, []);

  return (
    <div className="grid grid-cols-4 gap-x-[12px]">
      <div className="col-span-3 relative w-full h-[10px] bg-gray-300 rounded-lg">
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
      <div>
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
