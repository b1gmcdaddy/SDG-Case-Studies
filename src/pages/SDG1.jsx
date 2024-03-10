import React, { useState } from "react";
import Navbar from "../components/Navbar";
import jebron from "../assets/jebron.jpg";
import empathymap from "../assets/empathymap.jpg";
import dev from "../assets/dev.jpg";
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
              This is the Empathy Map!!
            </p>
          )}
          <img src={empathymap} className="mt-5"></img>
        </div>
        <div className="mx-auto mt-10 text-center">
          <h1 className="text-white md:text-3xl sm:text-2xl tracking-wide text-xl font-bold">
            MEET THE RESEARCHERS
          </h1>
          <div className="w-[100px] h-[4px] mx-auto bg-green-700 rounded-md mt-4 mb-3"></div>
          <p className="text-white md:mt-2 md:pt-2 md:text-xl xs:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>

        <div className="w-full py-[4rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img className="mx-auto mt-[-3rem]" src={dev} alt="/" />
              <h2 className="text-2xl font-bold text-center py-8 text-white">
                Nikkow Ensomow
              </h2>
              <p className="text-center text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img className="mx-auto mt-[-3rem]" src={dev} alt="/" />
              <h2 className="text-2xl font-bold text-center py-8 text-white">
                Sareljohn 5 Pebeda
              </h2>
              <p className="text-center text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img className="mx-auto mt-[-3rem]" src={dev} alt="/" />
              <h2 className="text-2xl font-bold text-center py-8 text-white">
                Jolo Tangpuy
              </h2>
              <p className="text-center text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SDG1;
