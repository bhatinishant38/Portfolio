import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full bg-gray-100 px-5 py-12 sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl md:flex-row">
        {/* Left - Introduction */}
        <div className="relative flex w-full flex-col justify-center overflow-hidden bg-gray-800 p-8 sm:p-10 md:w-2/5 lg:p-12">
          {/* Decorative blur */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 sm:w-10">
                <hr className="h-1 rounded-full border-0 bg-linear-to-r from-sky-200 via-blue-400 to-blue-500" />
              </div>

              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Get in Touch
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-300 sm:text-base">
              I'm always open to discussing new opportunities, collaborations,
              or just having a quick chat.
            </p>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-blue-400">
              Let's build something together
            </p>
          </div>
        </div>

        {/* Right - Contact Information */}
        <div className="flex w-full flex-col justify-center p-6 sm:p-8 md:w-3/5 lg:p-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 transition duration-300 group-hover:bg-blue-100">
                <IoIosMail className="text-xl text-gray-800 sm:text-2xl" />
              </span>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:bhatinishant650@gmail.com"
                  className="mt-1 truncate bg-linear-to-r from-sky-300 via-blue-400 to-blue-700 bg-clip-text text-sm font-medium text-transparent sm:text-base"
                >
                  bhatinishant650@gmail.com 
                </a>
              </div>
            </div>

             {/* Phone No */}
            <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 transition duration-300 group-hover:bg-blue-100">
                <span className="text-xl font-bold text-gray-800"><FaWhatsapp /></span>
              </span>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Whatsapp
                </p>

                <a
                  href="tel:9311362414"
                  className="mt-1 truncate bg-linear-to-r from-sky-300 via-blue-400 to-blue-700 bg-clip-text text-sm font-medium text-transparent sm:text-base"
                >
                  9311362414
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 transition duration-300 group-hover:bg-blue-100">
                <span className="text-xl font-bold text-gray-800"><FaGithub /></span>
              </span>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Github
                </p>

                <a href="https://github.com/bhatinishant38" target="_blank" className="mt-1 bg-linear-to-r from-sky-300 via-blue-400 to-blue-500 bg-clip-text text-transparent truncate text-sm font-medium  sm:text-base">
                  Click Me
                </a>
              </div>
            </div>

          </div>

          {/* Button */}
          <a
            href="https://www.linkedin.com/in/nishant-bhati-162b39369/" target="_blank"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 sm:w-fit"
          >
            Let's Connect
            <FaArrowRightLong className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
