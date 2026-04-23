import React, { useState } from "react";

// ✅ stable imports
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiSass,
  SiMongodb,
  SiNodedotjs,
 
  SiCanva,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa"; // ✅ CSS fix
 // optional
import { SiExpress } from "react-icons/si"; // ⚠️ keep if works, else remove
import { SiGreensock } from "react-icons/si"; // ⚠️ keep if works

// 🔥 skills
const skills = [
  { icon: SiHtml5, label: "HTML", color: "text-orange-600" },
  { icon: FaCss3Alt, label: "CSS", color: "text-blue-600" }, // ✅ fixed
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, label: "React", color: "text-sky-500" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-500" },
  { icon: SiGit, label: "Git", color: "text-red-500" },
  { icon: SiGithub, label: "GitHub", color: "text-gray-800" },
  { icon: SiGreensock, label: "GSAP", color: "text-green-600" },
  { icon: SiSass, label: "Sass", color: "text-pink-500" },

  { icon: SiNodedotjs, label: "Node.js", color: "text-green-600" },
  { icon: SiCanva, label: "Canva", color: "text-blue-400" },
 
];

// hover scale logic
const getScale = (hovered, idx) => {
  if (hovered === null) return 1;
  const distance = Math.abs(hovered - idx);
  if (distance === 0) return 1.5;
  if (distance === 1) return 1.2;
  if (distance === 2) return 1.05;
  return 1;
};

const TechStack = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className=" py-30  bg-gray-100  px-6 max-w-6xl mx-auto text-center">
      
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-200 via-purple-900 to-sky-100 mb-14">
    🛠️ Technologies 
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {skills.map(({ icon: Icon, label, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Icon
              className={`w-12 h-12 mb-2 transition-transform duration-200 ${color}`}
              style={{
                transform: `scale(${getScale(hovered, index)})`,
              }}
            />
            <span className="text-sm font-medium text-gray-700">
              {label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechStack;