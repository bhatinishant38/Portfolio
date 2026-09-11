import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
  
<footer className="w-full bg-gray-800 px-5 py-6 sm:px-8 lg:px-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-gray-700 pt-6 sm:flex-row">

    {/* Logo + Copyright */}
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">

      <a
        href="#Home"
        className="w-10 transition duration-300 hover:scale-110"
      >
        <img
          src="/logo-NB.svg"
          alt="NB logo"
          className="h-10 w-10 object-contain"
        />
      </a>

      <div className="text-center sm:text-left">
        <p className="text-xs text-gray-400 sm:text-sm">
          © 2026 Nishant Bhati
        </p>

        <p className="mt-1 text-xs text-gray-500">
          All rights reserved.
        </p>
      </div>

    </div>


    {/* Back To Top */}
    <a
      href="#Home"
      aria-label="Back to top"
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-gray-700 text-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
    </a>

  </div>
</footer>


  )
}

export default Footer