

import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 ">
       <h1  className='text-3xl font-bold'>Ankit's <span className='font-light text-2xl text-gray-500'>Portfolio</span></h1>
     <nav className='flex gap-10 px-15 text-lg font-medium'>
       <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
            : " hover:text-blue-400"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive 
            ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
            : " hover:text-blue-400"
        }
      >
        About
      </NavLink>

      <NavLink 
        to="/work" 
        className={({ isActive }) => 
          isActive 
            ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
            : " hover:text-blue-400"
        }
      >
        Work
      </NavLink>

      <NavLink 
        to="/hireme" 
        className={({ isActive }) => 
          isActive 
            ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
            : " hover:text-blue-400"
        }
      >
        Hire Me
      </NavLink>
     </nav>

    </nav>
  )
}

export default Nav