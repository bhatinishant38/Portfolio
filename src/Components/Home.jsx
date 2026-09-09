import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { MdDownload } from "react-icons/md";

const Home = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="bg-gray-900 min-h-screen pt-5 " id="Header">
      <nav className="flex items-center md:justify-around justify-between pr-15 pl-15 md:pr-0 md:pl-0">
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
          <button className="text-gray-900 text-sm md:text-lg flex items-center gap-2 pl-4 pr-4 p-2 rounded-3xl bg-linear-to-r from-blue-500 via-blue-400 to-blue-300  ">
            <span>
              <MdDownload color="white" size={20} />{" "}
            </span>
            <span>Download Resume</span>
          </button>
        </div>
      </nav>

     <hr class="border-slate-700" />

      <div className="flex text-white items-center justify-around mt-20">
        <div>
          <div className="text-sky-500 text-3xl font-bold">Hi,i'm</div>
          <div className="text-6xl font-bold">Nishant <span className="bg-linear-to-r from-sky-300 to-blue-700 bg-clip-text text-transparent ">Bhati</span></div>
          <div className="text-4xl font-medium">Full Stack Developer</div>
          <div className="text-gray-300">
            {" "}
            I build modern web applications with clean code, <br /> creating
            ideas and a passion for problem solving
          </div>
          <div className="mt-10 flex gap-10 items-center">
            <a href="" className=" pl-4 pr-4 p-2 rounded-3xl bg-linear-to-r from-blue-500 via-blue-400 to-blue-300" >{" "}<button className="h-3 w-50">View My Projects  </button></a>
            <a href="" className="p-3 border rounded-4xl">{" "}<button className="h-3 w-50">Conatct me</button>
            </a>
          </div>
        </div>

        <div>
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
