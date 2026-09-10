import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="Projects" className="w-full p-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-3 ">
            <div className="text-gray-500 font-bold w-10">
              <hr className="h-1 border-0  bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            </div>
            <div className="font-bold text-2xl sm:text-3xl text-gray-700">
              Featured
            </div>
          </div>

          <div className="flex items-center gap-3 ">
            <div className="text-gray-500 font-bold w-10">
              <hr className="h-1 border-0  bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            </div>
            <p className="text-sm sm:text-lg lg:text-xl">
              Some of the projects I've build recently.
            </p>
          </div>
        </div>

        <a href="">
          <p className="flex gap-2 items-center text-blue-600">
            {" "}
            View All Projects
            <span>
              <FaArrowRight />
            </span>
          </p>
        </a>
      </div>

      <div>

        <div className=" w-1/3  border-2 border-gray-300 rounded-3xl">

          <div >
            <img className="rounded-t-2xl" src="/banner.png" alt="" />
          </div>
          <div className="flex">
            <p>Prescripto-Doctor-Appointments</p>
            <p>A simple appointment bookings web app for patients. </p>
            <div className="flex ">
              <p className="bg-gray-500 rounded-2xl p-2">React</p>
              <p className="bg-gray-500 rounded-2xl p-2">Express.js</p>
              <p className="bg-gray-500 rounded-2xl p-2">MongoDB</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;
