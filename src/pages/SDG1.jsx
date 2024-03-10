import React, { useState } from "react";
import Navbar from "../components/Navbar";
import jebron from "../assets/jebron.jpg";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SDG1 = () => {
  const [showPersona, setShowPersona] = useState(false);
  const [showEmpathyMap, setShowEmpathyMap] = useState(false);

  const togglePersona = () => {
    setShowPersona(!showPersona);
  };

  const toggleEmpathyMap = () => {
    setShowEmpathyMap(!showEmpathyMap);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-4 text-green-400 text-center">
          <br />
          Good Health & Well Being
        </h1>
        <p className="text-lg text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan orci a odio facilisis, et aliquam arcu convallis. Fusce
          tempus augue vel est fermentum molestie. Morbi ut mauris nec sapien
          laoreet dignissim.
        </p>
        <div className="mt-10">
          {/*USER PERSONA SECTION*/}
          <h2 className="text-2xl font-bold mb-4 text-white md:inline">
            User Persona
          </h2>
          <button
            onClick={togglePersona}
            className="text-white md:ml-7 bg-green-700 px-2 py-2 rounded-xl text-sm"
          >
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            SHOW DESCRIPTION
          </button>
          {showPersona && (
            <p className="text-white text-opacity-75 mt-3 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan orci a odio facilisis, et aliquam arcu convallis. Fusce
              tempus augue vel est fermentum molestie. Morbi ut mauris nec
              sapien laoreet dignissim.
            </p>
          )}
          <img src={jebron} className="mt-5"></img>
        </div>

        <div className="mt-10">
          {/*EMPATHY MAP SECTION*/}
          <h1 className="text-2xl font-bold mb-4 text-white md:inline">
            Empathy Map
          </h1>
          <button
            onClick={toggleEmpathyMap}
            className="text-white md:ml-7 bg-green-700 px-2 py-2 rounded-xl text-sm"
          >
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            SHOW DESCRIPTION
          </button>
          {showEmpathyMap && (
            <p className="text-white text-opacity-75 mt-3 text-justify">
              This is the Empathy Map!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SDG1;
