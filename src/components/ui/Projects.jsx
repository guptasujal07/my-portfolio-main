import React from "react";
import { CarouselDemo } from "./CarouselDemo";

export default function Projects() {
  return (
    <div id="projects" className=" py-16  sm:mt-10 flex flex-col   gap-10 ">
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide  dark:text-white text-gray-800">
          Projects
        </h1>
        <span className="text-center text-[12px] dark:text-gray-300">
          Most recent work
        </span>
      </div>

      <CarouselDemo />
    </div>
  );
}
