import React from "react";
import About from "./About";
import Work from "./Work";
import HireMe from "./HireMe";
import Profileimg from "../src/images/Profileimg.jpeg";

const Home = () => {
  return (
    <div>
<section className="min-h-screen bg-gray-100 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-24 text-center md:text-left py-5  ">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2  space-y-6">
        
        {/* Tag */}
    <span className="relative bg-pink-500 text-white px-6 py-2 text-sm font-semibold rounded-full inline-block">
  Hello I'm

  {/* Tail (point) */}
 
</span>

        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold">
         Ankit Yadav 
        </h1>

      
        <h2 className="text-xl  -mt-3 font-semibold">
           Frontend Web Developer
        </h2>

       
        <div className="space-y-2 ">
          <p>📞 +91 9369941973</p>
          <p>✉️ ankityadavpvs@gmail.com</p>
          <p>📍 Lucknow ,UP</p>
        </div>

       
        <div className=" tflex justify-center md:justify-start gap-6 text-xl mt-4">
          
         <a href="https://www.linkedin.com/in/ankit-webdev/" target="_blank" rel="noreferrer"
          className="text-2xl  hover:scale-140 transition-all duration-300">
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
        
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="w-[350px] h-[350px] rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-[300px] h-[300px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            
            {/* Replace with your image */}
            <div className="w-[260px] h-[260px] rounded-full  flex items-center justify-center overflow-hidden">
            
            <img src={Profileimg} alt="" />
            {/* Replace with your image */}
           

          </div>

          </div>
        </div>
      </div>


    </section>
    <section id="about"><About/></section>
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




