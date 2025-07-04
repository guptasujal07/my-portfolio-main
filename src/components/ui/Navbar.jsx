import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const modeClickhandler = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  const handleDropdown = () => {
    
    setDropdown(!dropdown);
  };
  return (
    <div className="flex flex-col">
      <div className=" flex justify-between  sm:justify-around w-full  fixed top-0 right-0           py-4 text-[14px] font-medium px-2  z-10 dark:bg-background-dark bg-background ">
        <div className="text-gray-800 dark:text-white  cursor-pointer  hover:text-indigo-700    transition-all">
          Sujal
        </div>
        <ul className=" gap-3 text-gray-800 dark:text-white sm:flex hidden text-sm  ">
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#about">About</a>{" "}
          </li>
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#qualifications">Qualifications</a>
          </li>
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-indigo-700  transition-all">
            <a href="#contactme">Contact me</a>
          </li>
        </ul>
        {theme === "dark" ? (
          <CiSun
            onClick={modeClickhandler}
            className=" text-white text-2xl cursor-pointer  sm:block hidden   "
          />
        ) : (
          <FaMoon
            onClick={modeClickhandler}
            className=" text-2xl cursor-pointer text-gray-800  sm:block hidden"
          />
        )}

        <div className="flex sm:hidden gap-2">
          {theme === "dark" ? (
            <CiSun
              onClick={modeClickhandler}
              className=" text-white text-2xl cursor-pointer     "
            />
          ) : (
            <FaMoon
              onClick={modeClickhandler}
              className=" text-2xl cursor-pointer text-gray-800  "
            />
          )}

          <RxHamburgerMenu
            onClick={handleDropdown}
            className="dark:text-white text-gray-800 text-2xl "
          />
        </div>
      </div>

      <div
        className={`dark:text-white text-gray-800 bg-indigo-500 sm:mt-0 mt-14 fixed w-full z-10  p-2 transition-all duration-300 origin-top ${
          dropdown ? " scale-y-100  max-h-full" : "scale-y-0 max-h-0"
        } `}
      >
        {" "}
        <ul className="flex flex-col gap-3 text-gray-200">
          {" "}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            {" "}
            <a href="#qualifications">Qualifications</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactme">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
