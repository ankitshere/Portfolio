import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import HireMe from "./HireMe";


const Home = () => {
  return (
    <div>
<section className="min-h-screen bg-gray-100  flex items-center justify-between py-5  px-24">
      
      {/* Left Content */}
      <div className="w-1/2   space-y-6">
        
        {/* Tag */}
    <span className="relative bg-pink-500 text-white px-6 py-2 text-sm font-semibold rounded-full inline-block">
  Hello I'm

  {/* Tail (point) */}
 
</span>

        <h1 className="text-6xl font-bold">
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

       
        <div className="flex gap-6 text-xl mt-4">
          
         <a href="https://www.linkedin.com/in/ankit-webdev/" target="_blank" rel="noreferrer">
    <i className="ri-linkedin-box-fill text-2xl hover:scale-110 transition"></i>
  </a>
        <a
  href="https://github.com/ankitshere"
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
>
  <i className="ri-github-fill"></i>
</a>
        <a
  href="https://x.com/ankityadav15885"
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
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
            <div className="w-[260px] h-[260px] rounded-full bg-red-900 flex items-center justify-center overflow-hidden">
            
            <img src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww" alt="" />
            {/* Replace with your image */}
           

          </div>

          </div>
        </div>
      </div>


    </section>
    <section id="about"><About/></section>
    <section id="work" className="min-h-screen px-20 py-10">
        <Work />
      </section>

      {/* ✅ HIRE ME SECTION */}
      <section id="hireme" className="min-h-screen px-20 py-10">
        <HireMe />
      </section>
    </div>
    
  );
};

export default Home;




