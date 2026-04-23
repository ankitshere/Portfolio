import React from "react";
import mycookifyImg from "../images/MyCookify.png";
import recipeImg from "../images/Recipefinder.png";
import githubImg from "../images/GithubFinder.png";

const projects = [
  {
    title: "MyCookify",
    desc: "A modern recipe web app to discover, create, and save recipes with a smooth user experience",
    Features:
      "A modern recipe web application that allows users to search, create, and save recipes with a smooth and responsive user experience..",
    tech: ["React.js", "Tailwind CSS"],
    year: "2026",
    img: mycookifyImg,
    live: "https://mycookify.vercel.app/",
    github: "https://github.com/ankitshere/Context-api",
  },
  {
    title: "GitHub Dev Finder",
    desc: "Explore GitHub profiles with real-time data.",
    Features:
      "A GitHub profile explorer built with React and GitHub API that fetches real-time user data including repositories, followers, and profile insights with a clean and responsive UI..",
    tech: ["React", "GitHub API"],
    year: "2026",
    img: githubImg,
    live: "https://github-dev-finder-silk.vercel.app/",
    github: "https://github.com/ankitshere/Github-Dev-Finder",
  },
  {
    title: "Recipe Finder",
    desc: "Search recipes dynamically using API integration.",
    Features:
      "Search recipes by ingredients, create & share your own recipes, save favorites, and explore new recipes.",
    tech: ["React", "API"],
    year: "2025",
    img: recipeImg,
    live: "https://recipe-finder-six-lime.vercel.app/",
    github: "https://github.com/ankitshere/recipe-whirl-97",
  },
];

const Work = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 ">

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Selected Work
        </h2>
        <p className="text-sm sm:text-base text-gray-500">
          A few projects I've worked on recently
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (

          <div
            key={index}
            className="group rounded-xl overflow-hidden backdrop-blur-lg bg-white/40 border border-white/30 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[140px] sm:h-[160px] md:h-[170px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-[11px] font-semibold bg-rose-500 text-white rounded hover:bg-rose-600 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-[11px] font-semibold bg-white text-gray-800 rounded hover:bg-gray-200 transition"
                >
                  GitHub
                </a>

              </div>

              {/* Year */}
              <div className="absolute top-2 right-2 bg-gray-600/80 text-white text-[10px] px-2 py-0.5 rounded">
                {project.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-3">

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 group-hover:text-rose-500 transition">
                {project.title}
              </h3>

             

              <p className="text-[13px]  text-gray-600  mb-2 line-clamp-5">
                {project.Features}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] bg-gray-200/70 text-gray-700 rounded-full group-hover:bg-rose-500 group-hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Work;