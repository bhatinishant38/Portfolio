import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const About = () => {
  return (
    <div
      className="min-h-full p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-stretch lg:items-center justify-around bg-gray-200"
      id="About"
    >
      <div className="px-4 sm:px-8 lg:px-10 bg-gray-900 text-white rounded-2xl pb-6 sm:pb-8 lg:pb-10 w-full lg:w-1/2">
        <div className="flex items-center gap-3 pt-5 pb-5">
          <div className="w-6 sm:w-10">
            <hr className="h-1 border-0 my-4 sm:my-8 bg-linear-to-r from-sky-100 via-blue-400 to-blue-500 rounded-full" />
          </div>
          <div className="text-lg sm:text-xl font-bold bg-linear-to-r from-sky-100 via-blue-400 to-blue-500  bg-clip-text text-transparent ">About Me</div>
        </div>

        <div className="pb-5 sm:pb-6">
          <div className="text-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 sm:pb-3">
            A passionate developer <br />
            who loves building things
          </div>
          <div className="text-wrap text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            I'm a final year B.Tech student with strong intersect in web
            development . I enjoy working with a full stack and love creating
            scalable , user-friendly applications. Always open to learnings new
            technologies and collaborating on exciting projects.{" "}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div>
              <FaLocationDot className="text-lg sm:text-2xl md:text-3xl lg:text-4xl shrink-0" />
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              Greator Noida, India
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <GiGraduateCap className="text-lg sm:text-2xl md:text-3xl lg:text-4xl shrink-0" />
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              B.Tech (Final year)
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <FaLaptopHouse className="text-lg sm:text-2xl md:text-3xl lg:text-4xl shrink-0" />
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              Open to opportunities
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-2xl pb-5 sm:pb-6 p-4 sm:p-5 lg:p-6 w-full lg:w-1/2">

      <div className="flex items-center gap-3 pt-5 pb-5">
          <div className="w-6 sm:w-10">
            <hr className="h-1 border-0 my-4 sm:my-8 bg-linear-to-r from-sky-100 via-blue-400 to-blue-500 rounded-full" />
          </div>
          <div className="text-lg sm:text-xl font-bold bg-linear-to-r from-sky-100 via-blue-400 to-blue-500 bg-clip-text text-transparent">My Skills</div>
        </div>
        

        <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-5">
          <div className="flex gap-3 sm:gap-4">
            <div>
              <FaLocationDot className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 shrink-0" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm text-gray-200">Location</div>
              <div className="text-sm sm:text-base">Greator Noida, India</div>
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <div>
              <GiGraduateCap className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 shrink-0" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm text-gray-200">Education</div>
              <div className="text-sm sm:text-base">B-Tech (Final Year)</div>
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <div>
              <IoSettings className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 shrink-0" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm text-gray-200">Focus</div>
              <div className="text-sm sm:text-base">Full Stack Develpoment</div>
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <div>
              <IoIosMail className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 shrink-0" />
            </div>
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm text-gray-200">Email</div>
              <div className="text-sm sm:text-base break-all">
                bhatinishant650@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
