import React, { useState } from "react";
import mycookifyImg from "../src/images/MyCookify.png";
import recipeImg from "../src/images/RecipeFinder.png";
import githubImg from "../src/images/GithubFinder.png";
const projects = [
  {
    title: "MyCookify",
    desc: "A modern recipe platform with clean UI and smooth UX.",
    tech: ["React", "Tailwind"],
    year: "2025",
     img:mycookifyImg,
    live: "https://mycookify.vercel.app/",
    github: "https://github.com/ankitshere/Context-api",
  },
  {
    title: "Recipe Finder",
    desc: "Search recipes dynamically using API integration.",
    tech: ["React", "API"],
    year: "2025",
     img: recipeImg,
    live: "https://recipe-finder-six-lime.vercel.app/",
    github: "https://github.com/ankitshere/recipe-whirl-97",
  },
  {
    title: "GitHub Dev Finder",
    desc: "Explore GitHub profiles with real-time data.",
    tech: ["React", "GitHub API"],
    year: "2025",
    img: githubImg,
    live: "https://github-dev-finder-silk.vercel.app/",
    github: "https://github.com/ankitshere/Github-Dev-Finder",
  },
];

const Work = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    <section className="min-h-screen bg-[#f8fafc] text-black px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="mb-20">
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
                <span className="text-gray-400 group-hover:text-blue-500">
                  {p.year}
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="sticky ">

          <div className="bg-white rounded-3xl shadow-md p-6 border">

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
                className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Live
              </a>

              <a
                href={active.github}
                target="_blank"
                className="px-5 py-2 rounded-full border hover:bg-gray-100 transition"
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