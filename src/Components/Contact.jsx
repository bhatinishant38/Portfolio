import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="w-full pb-100 bg-gray-200">
      <div className="flex items-center">

        <div className="m-10 p-5 w-1/2  bg-gray-800 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-10">
              <hr className="h-1 rounded-full border-0 bg-linear-to-r from-sky-200 via-blue-400 to-blue-500" />
            </div>

            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
              Experience & Education
            </h2>
          </div>

          <p className="text-small p-3 text-gray-100">
            I'm always open to discussing new opportunuties , <br />{" "}
            collaborations or just a quick chat
          </p>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            mollitia iusto cum sint?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
