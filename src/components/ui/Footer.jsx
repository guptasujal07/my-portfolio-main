import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div
      className=" sm:gap-0 gap-10 w-full py-16  sm:py-24 sm:px-36 px-2  flex sm:flex-row flex-col   text-white dark:bg-footer-dark bg-indigo-800
        justify-around "
    >
      <div className="flex flex-col sm:gap-0 gap-2">
        <h1 className="text-3xl font-semibold">Sujal Gupta</h1>
        <span className="text-sm font-medium">Full Stack Developer</span>
      </div>
      <ul className="flex gap-3 sm:flex-row flex-col text-sm font-medium">
        {" "}
        <li>
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#projects">
            Projects
          </a>
        </li>
        <li>
          {" "}
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#contactme">
            Contact Me
          </a>{" "}
        </li>
      </ul>
      <ul className="flex gap-3 text-xl font-semibold">
        <li>
          {" "}
          <a target=" _blank" href="">
            <a
              target="_target"
              href="https://www.instagram.com/sujal_gupta35?igsh=czkybjRib2N2NzFy"
            >
              <IoLogoInstagram className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
            </a>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sujal-gupta-343543252/"
          >
            <FaLinkedinIn className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/guptasujal07">
            <AiFillGithub className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
          </a>
        </li>
      </ul>
    </div>
  );
}
