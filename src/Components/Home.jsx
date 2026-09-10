import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdDownload } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Home = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className=" min-h-screen  " id="Home">
      <nav className=" bg-gray-900 pt-5 pb-4 flex items-center md:justify-around justify-between  pr-10 pl-10 md:pr-0 md:pl-0">
        <a href="#Header">
          <img className="w-15 h-15" src="/logo-NB.svg" alt="" />
        </a>
        <div className="text-gray-200 hidden gap-3 md:flex md:gap-8">
          <a
            href="#Home"
            onClick={() => setActive("Home")}
            className={active === "Home" ? "text-blue-500 border-b-2   " : ""}
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setActive("About")}
            className={active === "About" ? "text-blue-500 border-b-2 " : ""}
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setActive("Projects")}
            className={active === "Projects" ? "text-blue-500  border-b-2" : ""}
          >
            Projects
          </a>
          <a
            href="#Skills"
            onClick={() => setActive("Skills")}
            className={active === "Skills" ? "text-blue-500  border-b-2" : ""}
          >
            Skills
          </a>
          <a
            href="#Education"
            onClick={() => setActive("Education")}
            className={
              active === "Education" ? "text-blue-500  border-b-2" : ""
            }
          >
            Education
          </a>
          <a
            href="#Contact"
            onClick={() => setActive("Contact")}
            className={active === "Contact" ? "text-blue-500  border-b-2" : ""}
          >
            Contact
          </a>
        </div>
        <div>
          <button className="text-gray-900 text-xs sm:text-sm md:text-lg flex items-center gap-2 pl-4 pr-4 p-2 rounded-3xl bg-linear-to-r from-blue-500 via-blue-400 to-blue-300  ">
            <span>
              <MdDownload className="text-2xl  text-white" />{" "}
            </span>
            <span>Download Resume</span>
          </button>
        </div>
      </nav>

      <hr class="border-slate-700" />

      <div className="flex  bg-gray-900 text-white items-center md:justify-around justify-center  px-10 py-3 pt-20 pb-10 sm:pb-15">
        <div>
          <div className="text-sky-500 text-sm md:text-2xl sm:text-xl lg:text-3xl font-bold">Hi,i'm</div>
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Nishant{" "}
            <span className="bg-linear-to-r from-sky-300 to-blue-700 bg-clip-text text-transparent ">
              Bhati
            </span>
          </div>
          <div className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-medium">Full Stack Developer</div>
          <div className="text-gray-300 flex text-warp flex-1">
            {" "}
            I build modern web applications with clean code, <br /> creating
            ideas and a passion for problem solving
          </div>
          <div className="mt-10 flex gap-10 items-center justify-center sm:justify-start">
            <a
              href=""
              className=" p-3 sm:p-2 rounded-3xl bg-linear-to-r from-blue-500 via-blue-400 to-blue-300"
            >
              {" "}
              <button className="h-3 w-30 text-xs md:w-30 sm:text-xs lg:w-40">View My Projects </button>
            </a>
            <a href="" className="p-3 border rounded-4xl">
              {" "}
              <button className="h-3 w-30 text-sm md:w-30 lg:w-40">Conatct me</button>
            </a>
          </div>

          <div className="flex pt-10  md:pt-10 sm:pb-20 justify-center  gap-7 sm:gap-5 md:gap-10">

            <div className="block sm:flex items-center gap-3">
              <span><FaReact className="text-2xl md:text-4xl lg:text-6xl text-cyan-400" /></span>          
              <span>React</span>
            </div>

            <div className="block sm:flex items-center gap-3">
              <span><FaNodeJs className="text-2xl md:text-4xl lg:text-6xl text-green-400" /></span>
              <span>Node.js</span>
            </div>

            <div className="block sm:flex items-center gap-3">
              <span><SiExpress className="text-2xl md:text-4xl lg:text-6xl text-white" /></span>          
               <span>Express.js</span>
            </div>

            <div className="block sm:flex items-center gap-3 ">
              <span><SiMongodb className="text-2xl md:text-4xl lg:text-6xl text-green-400" /></span>    
              <span>MongoDB</span>
            </div>

          </div>
        </div>

        <div className="hidden sm:block">
          <img
            className="w-80 h-80"
            src="https://cdn-imagine.vyro.ai/imagine-frontend/assets/images/ai-image-generator-hero-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
