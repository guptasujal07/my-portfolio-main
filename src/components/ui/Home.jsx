import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import VanillaTilt from "vanilla-tilt";
import { useRef } from "react";
import { useEffect } from "react";

export default function Home() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      reverse: false,
      max: 15,
      speed: 200,
      glare: false,
      "max-glare": 0.5,
    });

    // Clean up function to destroy VanillaTilt on unmount
    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, []);
  return (
    <div
      id="home"
      className=" pr-20 text-white pt-[3rem]  sm:pt-[9rem] pb-[8rem] sm:pb-[12rem] flex sm:flex-row flex-col justify-between px-5 sm:px-20 sm:gap-0 gap-4  "
    >
      <div className="flex w-full gap-5  justify-between pr-36">
        <ul className="flex flex-col gap-3 text-[20px]  text-indigo-700 font-semibold mt-[3rem] sm:mt-[6.7rem]">
          <li>
            {" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sujal-gupta-343543252/"
            >
              <FaLinkedin className="hover:text-indigo-800 transition-all" />
            </a>
          </li>
          <li>
            {" "}
            <a target="_blank" href="https://github.com/guptasujal07">
              {" "}
              <FaGithub className="hover:text-indigo-800 transition-all" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/sujal_gupta35?igsh=czkybjRib2N2NzFy"
            >
              <FaInstagram className="hover:text-indigo-800 transition-all" />
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-2 mt-10 sm:mt-20 dark:text-white text-gray-800">
          <h1 className="text-4xl font-semibold">Hi, I'm Sujal</h1>
          <h1 className="text-xl font-medium typing">I am a Web Developer</h1>
          <span className="py-2 px-1 flex items-center gap-1 font-medium text-[13px]  dark:text-white text-white hover:bg-indigo-800 transition-all rounded-md w-[45%] cursor-pointer justify-center mt-3 bg-indigo-600">
            {" "}
            <a className="flex gap-1 items-center" href="#contactme">
              Contact Me <IoSend className="text-[12px]" />
            </a>
          </span>
        </div>
      </div>

      <div ref={tiltRef} className="tilt-element ">
        <svg
          className="sm:size-[300px] size-[270px]"
          
          
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill="#5551B8"
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image href="/image2.png" width="200" height="187" />
          </g>
        </svg>
      </div>
    </div>
  );
}
