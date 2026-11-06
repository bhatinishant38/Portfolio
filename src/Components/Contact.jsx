import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="theme-light w-full bg-gray-100 px-5 py-12 sm:px-8 lg:px-16"
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {/* Email */}
            <a
              href="mailto:bhatinishant650@gmail.com"
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:gap-4 sm:p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:h-12 sm:w-12">
                <IoIosMail className="text-xl text-gray-800 sm:text-2xl" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-gray-900 sm:text-base">
                  bhatinishant650@gmail.com
                </span>
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:9311362414"
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:gap-4 sm:p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:h-12 sm:w-12">
                <FaWhatsapp className="text-lg text-gray-800 sm:text-xl" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                  Phone / WhatsApp
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-900 sm:text-base">
                  +91 93113 62414
                </span>
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nishant-bhati-162b39369/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-span-2 sm:gap-4 sm:p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:h-12 sm:w-12">
                <FaLinkedin className="text-lg text-gray-800 sm:text-xl" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                  LinkedIn
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-900 sm:text-base">
                  View my profile
                </span>
              </span>
              <FaArrowRightLong
                aria-hidden="true"
                className="shrink-0 text-sm text-gray-600 transition-transform group-hover:translate-x-1"
              />
            </a>
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
