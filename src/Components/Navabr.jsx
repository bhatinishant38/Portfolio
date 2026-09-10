import React, { useState } from 'react'

import { MdDownload } from "react-icons/md";

const Navabr = () => {

 const [active, setActive] = useState("Home");
  return (
    <div>
        <nav className=" bg-gray-800 pt-5 pb-4 flex items-center md:justify-around justify-between  pr-10 pl-10 md:pr-0 md:pl-0">
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
    </div>
  )
}

export default Navabr