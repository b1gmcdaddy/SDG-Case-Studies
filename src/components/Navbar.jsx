import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const Navlinks = [
    { name: "SDG1", path: "/GoodHealthSDG" },
    { name: "SDG2", path: "/QualityEducSDG" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="md:flex items-center md:mx-64 justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <Link to="/" className="text-3xl mr-1 pt-2">
            Gr7 SDGs CaseStudy
          </Link>
        </div>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={openMenu ? faXmark : faBars} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
        left-0 top-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          openMenu ? "top-20" : "top-[-490px]"
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
