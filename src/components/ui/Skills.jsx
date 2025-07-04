import React, { useState } from "react";
import { TbBracketsAngle } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiCoronarenderer } from "react-icons/si";
import { IoMdGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { BiCodeCurly } from "react-icons/bi";

import { FaTools } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

export default function Skills() {
  const [isVisible1, setIsVisible1] = useState(true);

  const handleIsVisible1 = () => {
    setIsVisible1(!isVisible1);
  };

  const [isVisible2, setIsVisible2] = useState(false);

  const handleIsVisible2 = () => {
    setIsVisible2(!isVisible2);
  };

  const [isVisible3, setIsVisible3] = useState(false);

  const handleIsVisible3 = () => {
    setIsVisible3(!isVisible3);
  };
  return (
    <div id="skills" className="w-full py-16 mt-10 ">
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 dark:text-white">
          Skils
        </h1>
        <span className="text-center text-[12px] text-gray-800 dark:text-gray-300">
          My Technical Skills
        </span>
        <div className="flex px-4 sm:px-24 sm:flex-row flex-col gap-10 items-start  justify-between text-gray-800 dark:text-white w-full mt-7">
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col  items-center">
              <div
                onClick={handleIsVisible1}
                className="flex  justify-between items-center   gap-10 cursor-pointer"
              >
                <div className="flex items-center  gap-2">
                  <TbBracketsAngle className="font-bold text-2xl text-indigo-600" />
                  <div className="flex flex-col">
                    <h1 className="font-semibold tracking-wide">Languages</h1>
                    <p className="dark:text-gray-300 text-gray-800 text-[12px]">
                      Languages that I have picked up over the years
                    </p>
                  </div>
                </div>

                <IoIosArrowUp
                  className={`${
                    isVisible1 ? " rotate-180" : "rotate-0"
                  } transition-all duration-300 ease-in-out`}
                />
              </div>
              
                <ul className={`w-full pointer-events-none  flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out ${isVisible1?" max-h-full opacity-100":"max-h-0 opacity-0"}`}>
                  <li className=" border-b-[4px] border-indigo-700  flex justify-between pb-2 ">
                    {" "}
                    <FaJava className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Java</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2 ">
                    {" "}
                    <IoLogoJavascript className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">C</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                    {" "}
                    <FaPython className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Javascript</span>
                  </li>
                </ul>
              
            </div>

            <div className="flex flex-col  items-center">
              <div
                onClick={handleIsVisible2}
                className="flex  gap-20 items-center  w-full cursor-pointer"
              >
                <div className="flex  items-center  gap-2">
                  <FaTools className="font-bold text-2xl text-indigo-600" />
                  <div className="flex flex-col">
                    <h1 className="font-semibold tracking-wide"> Tools</h1>
                    <p className="dark:text-gray-300 text-[12px]">
                      Tools that I know and use on a daily basis
                    </p>
                  </div>
                </div>

                <IoIosArrowUp
                  className={`${
                    isVisible2 ? " rotate-180" : "rotate-0"
                  } transition-all duration-300 ease-in-out`}
                />
              </div>
              
                <ul className={`w-full pointer-events-none  flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out ${isVisible2?" max-h-full opacity-100":"max-h-0 opacity-0"}`}>
                  <li className=" border-b-[4px] border-indigo-700  flex justify-between pb-2 ">
                    {" "}
                    <IoMdGitBranch className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Git</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2 ">
                    {" "}
                    <FaGithub className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Github</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                    {" "}
                    <SiNetlify className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Netlify</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                    {" "}
                    <SiCoronarenderer className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Render</span>
                  </li>
                  <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                    {" "}
                    <IoLogoVercel className="font-bold text-indigo-700 text-2xl" />{" "}
                    <span className="font-medium text-[14px]">Vercel</span>
                  </li>
                </ul>
              
            </div>
          </div>
          <div className="flex flex-col  items-center">
            <div
              onClick={handleIsVisible3}
              className="flex  justify-between items-center gap-10 cursor-pointer"
            >
              <div className="flex items-center  gap-2">
                <BiCodeCurly className="font-bold text-2xl text-indigo-600" />
                <div className="flex flex-col">
                  <h1 className="font-semibold flex tracking-wide">
                    Libraries and Frameworks
                  </h1>
                  <p className="dark:text-gray-300 text-[12px]">
                    Libraries and Frameworks that I prefer to work with
                  </p>
                </div>
              </div>

              <IoIosArrowUp
                className={`${
                  isVisible3 ? " rotate-180" : "rotate-0"
                } transition-all duration-300 ease-in-out`}
              />
            </div>
            
              <ul className={`w-full pointer-events-none  flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out ${isVisible3?" max-h-full opacity-100":"max-h-0 opacity-0"}`}>
                <li className=" border-b-[4px] border-indigo-700  flex justify-between pb-2 ">
                  {" "}
                  <FaReact className="font-bold text-indigo-700 text-2xl" />{" "}
                  <span className="font-medium text-[14px]">React</span>
                </li>
                <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2 ">
                  {" "}
                  <FaNodeJs className="font-bold text-indigo-700 text-2xl" />{" "}
                  <span className="font-medium text-[14px]">Node.js</span>
                </li>
                <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                  {" "}
                  <RiTailwindCssFill className="font-bold text-indigo-700 text-2xl" />{" "}
                  <span className="font-medium text-[14px]">Tailwind css</span>
                </li>
                <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                  {" "}
                  <SiMongodb className="font-bold text-indigo-700 text-2xl" />{" "}
                  <span className="font-medium text-[14px]">MongoDB</span>
                </li>
                <li className=" border-b-[4px] border-indigo-700 flex justify-between pb-2">
                  {" "}
                  <IoLogoFirebase className="font-bold text-indigo-700 text-2xl" />{" "}
                  <span className="font-medium text-[14px]">Firebase</span>
                </li>
              </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
}
