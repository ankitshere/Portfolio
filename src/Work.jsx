import React, { useState } from "react";
import mycookifyImg from "../images/MyCookify.png";
import recipeImg from "../images/Recipefinder.png";
import githubImg from "../images/GithubFinder.png";
const projects = [
  {
    title: "MyCookify",
    desc: "A modern recipe web app to discover, create, and save recipes with a smooth user experience",
    Features:"Search recipes by ingredients, create & share your own recipes, save favorites, and explore new recipes.",
    tech: ["React.js", "Tailwind CSS"],
    year: "2026",
     img:mycookifyImg,
    live: "https://mycookify.vercel.app/",
    github: "https://github.com/ankitshere/Context-api",
  },
 
  {
    title: "GitHub Dev Finder",
    desc: "Explore GitHub profiles with real-time data.",
    Features:"Search recipes by ingredients, create & share your own recipes, save favorites, and explore new recipes.",
    tech: ["React", "GitHub API"],
    year: "2026",
    img: githubImg,
    live: "https://github-dev-finder-silk.vercel.app/",
    github: "https://github.com/ankitshere/Github-Dev-Finder",
  },
   {
    title: "Recipe Finder",
    desc: "Search recipes dynamically using API integration.",
    Features:"Search recipes by ingredients, create & share your own recipes, save favorites, and explore new recipes.",
    tech: ["React", "API"],
    year: "2025",
     img: recipeImg,
    live: "https://recipe-finder-six-lime.vercel.app/",
    github: "https://github.com/ankitshere/recipe-whirl-97",
  },
];

const Work = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    // <section className="min-h-screen bg-[#f8fafc] text-black px-6 md:px-20 py-24">

    //   {/* Heading */}
    //   <div className="mb-10">
    //     <h2 className="text-6xl font-semibold tracking-tight">
    //       Selected Work
    //     </h2>
    //     <p className="text-gray-500 mt-4 text-lg">
    //       A few projects I’ve worked on recently
    //     </p>
    //   </div>

    //   <div className="flex flex-row px-10  justify-between items-center bg-red-400">

    //     {/* LEFT LIST */}
    //     <div className="flex flex-col px-10 gap-10">
    //       {projects.map((p, i) => (
    //         <div
    //           key={i}
    //           onMouseEnter={() => setActive(p)}
    //           className="group border-b pb-6 cursor-pointer transition"
    //         >
    //           <div className="flex justify-between items-center">
    //             <h3 className="text-2xl md:text-3xl font-medium group-hover:text-blue-600 transition">
    //               {p.title}
    //             </h3>
    //             <p className="text-gray-600 ">
    //           {p.Features}
    //         </p>
    //             <span className="text-gray-400 group-hover:text-blue-500">
    //               {p.year}
    //             </span>
    //           </div>

    //           <p className="text-gray-500 mt-2">
    //             {p.desc}
    //           </p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* RIGHT PREVIEW */}
    //     <div className="sticky ">

    //       <div className="bg-white rounded-3xl shadow-md p-6 border">

    //         {/* Image */}
    //         <div className="overflow-hidden rounded-xl mb-6">
    //           <img
    //             src={active.img}
    //             alt={active.title}
    //             className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
    //           />
    //         </div>

    //         {/* Content */}
    //         <h3 className="text-2xl font-semibold mb-2">
    //           {active.title}
    //         </h3>

    //         <p className="text-gray-600 mb-4">
    //           {active.desc}
    //         </p>

    //         {/* Tech */}
    //         <div className="flex flex-wrap gap-2 mb-6">
    //           {active.tech.map((t, i) => (
    //             <span
    //               key={i}
    //               className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
    //             >
    //               {t}
    //             </span>
    //           ))}
    //         </div>

    //         {/* Buttons */}
    //         <div className="flex gap-4">
    //           <a
    //             href={active.live}
    //             target="_blank"
    //             className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
    //           >
    //             View Live
    //           </a>

    //           <a
    //             href={active.github}
    //             target="_blank"
    //             className="px-5 py-2 rounded-full border hover:bg-gray-100 transition"
    //           >
    //             GitHub
    //           </a>
    //         </div>

    //       </div>

    //     </div>

    //   </div>
    // </section>
    <section className="min-h-screen bg-gray-100  text-black px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="mb-15">
        <h2 className="text-6xl font-semibold tracking-tight">
          Selected Work
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          A few projects I’ve worked on recently
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT LIST */}
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(p)}
              className="group border-b pb-6 cursor-pointer transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-medium group-hover:text-blue-600 transition">
                  {p.title}
                </h3>
                <span className="px-3  rounded-full border border-blue-300 bg-blue-300 text-white transition">
                  {p.year}
                </span>
              </div>

              <p className=" text-gray-600 mt-2">
                {p.desc}
              </p>
                <p className="  text-gray-600">
            {p.Features}
          </p>
            </div>
          ))}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="sticky ">

          <div className="bg-white rounded-3xl border border-rose-300 shadow-md p-6 bordered ">

            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src={active.img}
                alt={active.title}
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-2">
              {active.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {active.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {active.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={active.live}
                target="_blank"
                className="px-5 py-2 rounded-full bg-blue-300 text-white hover:bg-blue-300 transition"
              >
                View Live
              </a>

              <a
                href={active.github}
                target="_blank"
                className="px-5 py-2 rounded-full border border-blue-300 hover:bg-blue-300 hover:text-white transition"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>
    </section> 
  );
};

export default Work;