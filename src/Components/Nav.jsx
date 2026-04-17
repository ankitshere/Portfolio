import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  useEffect(() => {
    const id = location.pathname.replace("/", "") || "home";
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full   backdrop-blur-sm bg-white/10  fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-20  py-4">

        {/* Logo */}
        <h1 className="text-3xl md:text-3xl  font-bold">
          Ankit's{" "}
          <span className="font-light text-gray-500 text-2xl">
            Portfolio
          </span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10   md:gap-15 text-lg font-medium">

          {["/", "/about", "/work", "/hireme"].map((path, i) => {
            const labels = ["Home", "About", "Work", "Hire Me"];

            return (
              <button
                key={i}
                onClick={() => handleNav(path)}
                className={`pb-1 transition ${
                  isActive(path)
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
              >
                {labels[i]}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden   font-bold text-2xl">
          {menuOpen ? (
            <RiCloseLine onClick={() => setMenuOpen(false)} />
          ) : (
            <RiMenu3Line onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className=" flex flex-col items-center gap-6 py-6 shadow-lg text-lg font-medium  
">

          {["/", "/about", "/work", "/hireme"].map((path, i) => {
            const labels = ["Home", "About", "Work", "Hire Me"];

            return (
              <button
                key={i}
                onClick={() => handleNav(path)}
                className={`transition ${
                  isActive(path)
                    ? "text-blue-500 underline"
                    : "hover:text-blue-400"
                }`}
              >
                {labels[i]}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Nav;