import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";

const Eduaction = () => {
  return (

<div id="Education" className="px-5 py-12 sm:px-8 lg:px-16  bg-gray-800">

  {/* Section Heading */}
  <div className="mb-12">
    <div className="flex items-center gap-3">
      <div className="w-8 sm:w-10">
        <hr className="h-1 rounded-full border-0 bg-linear-to-r from-sky-200 via-blue-400 to-blue-500" />
      </div>

      <h2 className="text-2xl font-bold bg-linear-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
        Experience & Education
      </h2>
    </div>

    <div className="mt-2 flex items-center gap-3">
      <div className="w-8 sm:w-10">
        <hr className="h-0.5 rounded-full border-0 bg-linear-to-r from-blue-400 via-blue-400 to-blue-500" />
      </div>

      <p className="text-xs text-gray-300 sm:text-sm lg:text-base">
        My journey so far
      </p>
    </div>
  </div>


  {/* Timeline */}
  <div className="relative">

    {/* Desktop connecting line */}
    <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-linear-to-r from-blue-200 via-blue-500 to-sky-300 md:block" />

    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">

      {/* Education */}
      <div className="relative flex flex-col items-center text-center">

        {/* Icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-110">
          <GiGraduateCap className="text-3xl text-gray-100 sm:text-4xl" />
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-lg font-semibold text-gray-50">
            B.Tech
          </p>

          <p className="mt-1 text-sm font-medium text-blue-500">
            Final Year
          </p>

          <p className="mt-2 text-xs text-gray-300 sm:text-sm">
            Currently pursuing my Bachelor's degree in Computer Science.
          </p>
        </div>
      </div>


      {/* Development */}
      <div className="relative flex flex-col items-center text-center">

        {/* Icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-110">
          <FaCode className="text-2xl text-gray-100 sm:text-3xl" />
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-lg font-semibold text-gray-50">
            Web Development
          </p>

          <p className="mt-1 text-sm font-medium text-blue-500">
            Full Stack
          </p>

          <p className="mt-2 text-xs text-gray-300 sm:text-sm">
            Building projects with React, Node.js, Express.js and MongoDB.
          </p>
        </div>
      </div>


      {/* Experience */}
      <div className="relative flex flex-col items-center text-center">

        {/* Icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-110">
          <FaHouseLaptop className="text-2xl text-gray-100 sm:text-3xl" />
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-lg font-semibold text-gray-50">
            Open for Opportunities
          </p>

          <p className="mt-1 text-sm font-medium text-blue-500">
            Learning & Building
          </p>

          <p className="mt-2 text-xs text-gray-300 sm:text-sm">
            Developing real-world projects and improving my full-stack skills.
          </p>
        </div>
      </div>

    </div>
  </div>

</div>


  );
};

export default Eduaction;
