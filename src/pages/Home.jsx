import React from "react";
import About from "../pages/About";
import Work from "../pages/Work";
import HireMe from "../pages/HireMe";
import Profileimg from "../images/Profileimg.jpeg";

const Home = () => {
  return (
    <div>
      <section className="min-h-screen  bg-gray-100 flex flex-col-reverse md:flex-row md:mt-5  items-center justify-center md:justify-between px-6 md:px-22 text-center md:text-left py-5  ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 -mt-10 mb-10  md:mt-15   space-y-6">
          {/* Tag */}
          <span className="relative bg-pink-600 text-white px-6  py-2 text-sm font-semibold rounded-full inline-block">
            👋 Hello I'm
            {/* Tail (point) */}
          </span>

          <h1 className="text-5xl sm:text-5xl md:text-6xl  font-bold">
            Ankit Yadav
          </h1>

          <h2 className="text-2xl  -mt-3 font-bold">Frontend Web Developer</h2>

          <div className="space-y-2  font-semibold ">
            <p>
              <i class="ri-phone-fill"></i> &nbsp;+91 9369941973
            </p>
            <p>
              <i class="ri-mail-ai-fill"></i> &nbsp; ankityadavpvs@gmail.com
            </p>
            <p>
              <i class="ri-map-pin-2-fill"></i> &nbsp; Lucknow ,Uttar Pradesh
              India
            </p>
          </div>

          <div className=" flex gap-10 justify-center md:justify-start text-xl mt-4">
            <a
              href="https://www.linkedin.com/in/ankit-webdev/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl  hover:scale-140 transition-all duration-300"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://github.com/ankitshere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl  hover:scale-140 transition-all duration-300"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://x.com/ankityadav15885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl  hover:scale-140 transition-all duration-300"
            >
              <i class="ri-twitter-x-line"></i>
            </a>
            <a
              href="https://www.instagram.com/codeby_ankitt/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl  hover:scale-140  transition-all duration-300"
            >
              <i class="ri-instagram-line"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}

        <div className="md:relative relative   mb-20">
          <div className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-full bg-gray-200 flex items-center justify-center">
            <div className="md:w-[300px] md:h-[300px]  w-[250px] h-[250px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {/* Replace with your image */}
              <div className=" md:w-[260px] md:h-[260px] w-[210px] h-[210px] rounded-full  flex items-center justify-center overflow-hidden">
                <img src={Profileimg} alt="" />
                {/* Replace with your image */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="work" className="min-h-screen">
        <Work />
      </section>

      {/* ✅ HIRE ME SECTION */}
      <section id="hireme" className="min-h-screen  ">
        <HireMe />
      </section>
    </div>
  );
};

export default Home;
