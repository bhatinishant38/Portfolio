import React, { useState } from "react";

import { MdClose, MdDownload, MdMenu } from "react-icons/md";

const Navabr = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];
  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="border-b border-slate-700/60 bg-gray-900/95 px-5 py-3 shadow-lg backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <a
            href="#Home"
            onClick={() => {
              setActive("Home");
              setMenuOpen(false);
            }}
            className="shrink-0"
          >
            <img
              className="h-11 w-11 sm:h-12 sm:w-12"
              src="/logo-NB.svg"
              alt="NB Logo"
            />
          </a>
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`relative py-2 text-sm font-medium transition-all duration-300 lg:text-base ${active === item ? "text-blue-400" : "text-gray-300 hover:text-white"} `}
              >
                {item} {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${active === item ? "w-full" : "w-0"} `}
                ></span>
                
              </a>
            ))}
          </div>
          {/* Desktop Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-sky-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 md:flex"
          >
            <MdDownload className="text-xl" /> Download Resume
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-gray-200 transition hover:border-blue-400 hover:text-blue-400 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-4 border-t border-slate-700 pt-4 pb-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${active === item ? "bg-blue-500/10 text-blue-400" : "text-gray-300 hover:bg-slate-700/50 hover:text-white"} `}
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-sky-400 px-5 py-3 text-sm font-semibold text-white"
            >
              <MdDownload className="text-xl" /> Download Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
