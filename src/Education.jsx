import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const educationData = [
  {
    title: "Job Ready AI Powered Cohort",
    duration: "Current",
    status: "Currently Enrolled",
    institute: "Sheryians Coding School",
    desc: "Hands-on training in modern web development and AI integration. Building real-world projects to become industry-ready.",
    icon: "💻",
  },
  {
    title: "Diploma in Computer Science & Engineering",
    duration: "2023 – 2026",
    institute: "Ambekeshwar Group of Institutions",
    desc: "Core computer science, web development, and software engineering. Consistently among top performers.",
    icon: "🖥️",
  },
  {
    title: "Advanced Diploma in Computer Applications (ADCA)",
    duration: "2022 – 2023",
    institute: "Private Institute",
    desc: "Mastered office tools, programming basics, and foundational computer knowledge.",
    icon: "🔬",
  },
];

const Education = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    // 🔥 minimal fade + slide animation
    gsap.fromTo(
      el.querySelectorAll(".edu-card"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Education & Learning
        </h2>
        <p className="text-gray-500 mt-2">
          My journey of learning and growth in tech
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {educationData.map((item, index) => (
          <div
            key={index}
            className="edu-card bg-gray-50 border border-rose-300 rounded-2xl p-6 transition duration-300 hover:shadow-md hover:-translate-y-1"
          >
            
            {/* Top */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm text-white bg-blue-300  rounded-2xl px-3 border   ">
                {item.duration}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            {/* Status */}
            {item.status && (
              <p className="text-xs text-green-600 font-medium mt-1">
                {item.status}
              </p>
            )}

            {/* Institute */}
            <p className="text-sm text-gray-600 mt-2">
              {item.institute}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Education;