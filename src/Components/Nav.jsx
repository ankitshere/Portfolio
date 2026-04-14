

// import React from 'react'
// import { NavLink } from "react-router-dom"

// const Nav = () => {
//   return (
//     <nav className="flex items-center justify-between px-10 py-5 ">
//        <h1  className='text-3xl font-bold'>Ankit's <span className='font-light text-2xl text-gray-500'>Portfolio</span></h1>
//      <nav className='flex gap-10 px-15 text-lg font-medium'>
//        <NavLink 
//         to="/" 
//         className={({ isActive }) => 
//           isActive 
//             ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
//             : " hover:text-blue-400"
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink 
//         to="/about" 
//         className={({ isActive }) => 
//           isActive 
//             ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
//             : " hover:text-blue-400"
//         }
//       >
//         About
//       </NavLink>

//       <NavLink 
//         to="/work" 
//         className={({ isActive }) => 
//           isActive 
//             ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
//             : " hover:text-blue-400"
//         }
//       >
//         Work
//       </NavLink>

//       <NavLink 
//         to="/hireme" 
//         className={({ isActive }) => 
//           isActive 
//             ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
//             : " hover:text-blue-400"
//         }
//       >
//         Hire Me
//       </NavLink>
//      </nav>

//     </nav>
//   )
// }

// export default Nav


import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
  };

  // 🔥 Auto scroll when URL changes
  useEffect(() => {
    const id = location.pathname.replace("/", "") || "home";
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [location]);

  // 🔥 Active check (NavLink jaisa)
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-10 py-5">
      
      <h1 className='text-3xl font-bold px-8'>
        Ankit's <span className='font-light text-2xl text-gray-500'>Portfolio</span>
      </h1>

      <div className='flex gap-10 px-15 text-lg font-medium'>

        <button
          onClick={() => handleNav("/")}
          className={`pb-1 transition ${
            isActive("/")
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => handleNav("/about")}
          className={`pb-1 transition ${
            isActive("/about")
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }`}
        >
          About
        </button>

        <button
          onClick={() => handleNav("/work")}
          className={`pb-1 transition ${
            isActive("/work")
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }`}
        >
          Work
        </button>
       

        <button
          onClick={() => handleNav("/hireme")}
          className={`pb-1 transition ${
            isActive("/hireme")
              ? "text-blue-500 border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }`}
        >
          Hire Me
        </button>

      </div>

    </nav>
  );
};

export default Nav;