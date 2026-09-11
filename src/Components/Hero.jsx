import React, { useState } from "react";


import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [active, setActive] = useState("Home");
  return (
   
<div id="Home" className="relative min-h-screen overflow-hidden bg-gray-900 text-white">

  {/* Background Glow */}
  <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
  <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

  <hr className="relative border-slate-800" />

  {/* Hero */}
  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-1px)] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-16 sm:px-10 md:flex-row md:justify-between md:gap-8 lg:px-16">

    {/* LEFT CONTENT */}
    <div className="w-full max-w-2xl text-center md:text-left">

      {/* Small intro */}
      <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
        <span className="h-0.5 w-8 bg-linear-to-r from-sky-400 to-blue-600"></span>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-base">
          Hi, I'm
        </p>
      </div>

      {/* Name */}
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Nishant{" "}
        <span className="bg-linear-to-r from-sky-300 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          Bhati
        </span>
      </h1>

      {/* Role */}
      <h2 className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl md:text-3xl lg:text-4xl">
        Full Stack Developer
      </h2>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:mx-0 md:text-lg">
        I build modern web applications with clean code, thoughtful
        design, and a passion for solving real-world problems.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">

        <a
          href="#Projects"
          className="group flex w-full max-w-50 items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
        >
          View My Projects

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <a
          href="#Contact"
          className="flex w-full max-w-50 items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-400"
        >
          Contact Me
        </a>

      </div>

      {/* Tech Stack */}
      <div className="mt-12 border-t border-slate-800 pt-7">

        <p className="mb-5 text-xs font-medium uppercase tracking-widest text-slate-500">
          Tech Stack
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:justify-start">

          {/* React */}
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400 sm:text-sm">
            <FaReact className="text-lg text-cyan-400 sm:text-xl" />
            React
          </div>

          {/* Node */}
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:text-green-400 sm:text-sm">
            <FaNodeJs className="text-lg text-green-400 sm:text-xl" />
            Node.js
          </div>

          {/* Express */}
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:text-white sm:text-sm">
            <SiExpress className="text-lg text-white sm:text-xl" />
            Express.js
          </div>

          {/* MongoDB */}
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:text-green-400 sm:text-sm">
            <SiMongodb className="text-lg text-green-400 sm:text-xl" />
            MongoDB
          </div>

        </div>
      </div>

    </div>


    {/* RIGHT IMAGE */}
    <div className="relative flex w-full items-center justify-center md:w-[40%] lg:w-[45%]">

      {/* Glow behind image */}
      <div className="absolute h-56 w-56 rounded-full bg-sky-500/20 blur-3xl sm:h-72 sm:w-72"></div>

      {/* Decorative ring */}
      <div className="absolute h-64 w-64 rounded-full border border-sky-400/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96"></div>

      <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 shadow-2xl shadow-blue-500/10 backdrop-blur-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80">

        <img
          className="h-full w-full rounded-full object-cover p-3"
          src="/nishant.png"
          alt="#"
        />

      </div>

    </div>

  </div>

</div>


  );
};

export default Hero;
