import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="relative overflow-hidden bg-gray-600 px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Technologies
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-100 sm:text-base">
          Technologies and tools I use to build modern, responsive and
          full-stack web applicatpx
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* React */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <FaReact className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              React
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              Frontend Library
            </p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <IoLogoJavascript className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              React
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              JavaScript
            </p>
          </div>
        </div>

        {/* HTML & CSS */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <FaHtml5 className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              HTML & CSS
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              Web Essentials
            </p>
          </div>
        </div>

        {/* Node.js */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <FaNodeJs className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              Node.js
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              Backend Runtime
            </p>
          </div>
        </div>

        {/* Express */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <SiExpress className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              Exprees.js
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              Web Framework
            </p>
          </div>
        </div>

        {/* MongoDB */}
        <div className="group rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-px shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10">
          <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl bg-slate-900 px-2 py-4 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center backdrop-blur-xl">
            <div className="mb-2 sm:mb-4 lg:mb-5 flex h-9 w-9 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
              <SiMongodb className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
              MongoDB
            </h3>

            <p className="mt-1 text-[8px] sm:text-xs lg:text-sm text-slate-400">
              Database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
