import React from "react";
import { SlCalender } from "react-icons/sl";

export default function Qualification() {
  return (
    <div id="qualifications" className="w-full py-16 mt-10 flex flex-col     gap-10 ">
      <div className="flex flex-col   gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 dark:text-white">
          Qualification
        </h1>
        <span className="text-center text-[12px] text-gray-800 dark:text-gray-300">
          My Educational Qualification 
        </span>
      </div>
      <div className="flex justify-center mx-6 gap-4  sm:gap-8 text-gray-800 dark:text-white ">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col">
            <h1 className="text-[14px] font-semibold">B.Tech Information Technology</h1>
            <p className="text-[12px] dark:text-gray-300">GLA University Mathura</p>
            <span className="text-[11px] text-gray-800 dark:text-gray-400 pt-1 flex items-center gap-2"> <SlCalender className="font-semibold mb-[2px]" /> 2022-2026</span>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[14px] font-semibold">High School</h1>
            <p className="text-[12px] dark:text-gray-300">N.D Jain School,Bah(Agra)</p>
            <span className="text-[11px] dark:text-gray-400 flex items-center gap-2  pt-1"> <SlCalender className="font-semibold mb-[2px]" /> 2020-2021</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-7   ">
          <div className="bg-indigo-700 rounded-full  w-[15px] h-[15px]"></div>
          <div className="w-[3px] bg-indigo-700 flex-grow"></div>
          <div className="bg-indigo-700 rounded-full w-[15px] h-[15px]"></div>
          <div className="w-[3px] bg-indigo-700 flex-grow"></div>
          <div className="bg-indigo-700 rounded-full w-[15px] h-[15px]"></div>
        </div>

        <div className="flex flex-col justify-center">
            <h1 className="text-[14px] font-semibold">Intermediate</h1>
            <p className="text-[12px] dark:text-gray-300">N.D Jain School,Bah(Agra)</p>
            <span className="text-[11px] flex items-center gap-2 dark:text-gray-400 pt-1"><SlCalender className="font-semibold   " /> 2021-2022</span>
          </div>
      </div>
    </div>
  );
}
