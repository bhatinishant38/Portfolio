import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full bg-gray-200 px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between gap-6 sm:mb-14">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-10">
              <hr className="h-1 rounded-full border-0 bg-linear-to-r from-sky-700 via-blue-400 to-blue-500  " />
            </div>

            <p className="text-2xl font-bold bg-linear-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
              Featured
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-10">
              <hr className="h-1 rounded-full border-0 bg-linear-to-r from-sky-400 via-blue-400 to-blue-500" />
            </div>

            <p className="text-xs bg-linear-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent sm:text-sm lg:text-base">
              Some of the projects I've built recently.
            </p>
          </div>
        </div>

        {/* View All */}
        <a
          href="https://github.com/bhatinishant38?tab=repositories&q=&type=&language=&sort=stargazers"
          target="_blank" 
          rel="noopener noreferrer"
          className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 sm:flex"
        >
          View All Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Projects */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
              src="/prescripto.png"
              alt="Prescripto Doctor Appointments"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">
                  Prescripto Doctor Appointments
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                  A simple appointment booking web app for patients.
                </p>
              </div>

              {/* Arrow */}
              <a
                href="https://prescripto-frontend-jqu6.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
              >
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                React
              </span>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Express.js
              </span>

              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                MongoDB
              </span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="relative overflow-hidden">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
              src="/tomato.png"
              alt="Project"
            />

            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">
                  Tomato -Food Delivary 
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                  A food order platform where users can order books items.
                </p>
              </div>

              <a
                href="https://tomato-frontend-6ycb.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
              >
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Admin Panel
              </span>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Authentication
              </span>

              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                Login & Logout
              </span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="relative overflow-hidden">
            <img
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
              src="/homestay.png"
              alt="Project"
            />

            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold leading-snug text-gray-800 sm:text-xl">
                  Home Stay
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                  A responsive web application built with modern complete backend
                  technologies.
                </p>
              </div>

              <a
                href="https://home-stays.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
              >
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                EJS
              </span>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Session
              </span>

              <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600">
                Tailwind 
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View All */}
      <div className="mt-8 flex justify-center sm:hidden">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold text-blue-600"
        >
          View All Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
