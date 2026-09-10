import React from "react";

const About = () => {
  return (
    <div className="h-80 flex gap-40 items-center justify-center bg-gray-200" id="About">
      <div>

        <div className="flex items-center gap-3">
          <div className="w-6 sm:w-10">
            <hr className="h-1 border-0 my-4 sm:my-8 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full" />
          </div>
          <div className="text-gray-950 text-xl">about me</div>
        </div>

       <div>
           <div className="text-wrap">A passionate developer who loves building things</div>
       </div>

      </div>

      <div>Quick Facts</div>

      <div></div>
    </div>
  );
};

export default About;
