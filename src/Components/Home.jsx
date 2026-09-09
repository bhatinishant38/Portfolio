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
          <button className="text-gray-300 text-sm md:text-lg flex items-center gap-2 border-2 p-2 rounded-3xl bg-linear-to-r from-blue-900 via-blue-400 to-blue-900">
            <span>
              <MdDownload color="white" size={20} />{" "}
            </span>
            <span>Download Resume</span>
          </button>
        </div>
      </nav>

      <div className="flex text-white items-center justify-around mt-20">
        <div>
          <div>Hi,i'm</div>
          <div>Nishant Bhati</div>
          <div> I build modern</div>
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
