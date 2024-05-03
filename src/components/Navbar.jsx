import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Navlinks = [
    { name: "SDG1", path: "/GoodHealthSDG" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const style = {
    fontFamily: "customFont, sans-serif",
  };

  return (
    <nav className="w-full fixed top-0 left-0 shadow-2xl bg-slate-300">
      <div className="md:flex items-center md:mx-64 justify-between py-5 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <Link to="/" className="text-2xl mr-1 pt-2 font-bolder" style={style}>
            Gr7 SDGs CaseStudy
          </Link>
        </div>
        <div className="absolute right-8 top-7 cursor-pointer md:hidden">
          <FontAwesomeIcon
            icon={showMenu ? faTimes : faBars}
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul
          className={`md:flex md:pb-0 md:w-auto w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
            showMenu ? "block" : "hidden md:block"
          }`}
        >
          {Navlinks.map((link, index) => (
            <li key={index} className="md:ml-8 uppercase xs:my-2 md:my-0 my-7">
              <NavLink
                to={link.path}
                className="md:text-lg font-medium hover:text-xl hover:transition-all duration-500 ease-in"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
