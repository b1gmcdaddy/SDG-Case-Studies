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
        <h1 className="text-4xl font-bold mb-4 text-green-500 text-center">
          <br />
          Good Health & Well Being
        </h1>
        <p className="text-lg text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan orci a odio facilisis, et aliquam arcu convallis. Fusce
          tempus augue vel est fermentum molestie. Morbi ut mauris nec sapien
          laoreet dignissim.
        </p>

        <div className="md:mt-16 xs:mt-10">
          {/*INTRODUCTION SECTION*/}
          <h2 className="text-2xl font-bold text-white md:inline">
            INTRODUCTION
          </h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 px-12 py-5 shadow-lg shadow-green-300">
            <ul className="list-disc text-black md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Provide a brief overview of the design project,
                including the problem or challenge addressed, the stakeholders
                involved, and the overall goals.
              </li>
              <li>
                <b>Content:</b> Introduce the context of the project and set the
                stage for the reader to understand the subsequent sections.
              </li>
            </ul>
            <p className="text-black md:text-justify mt-5 md:text-md">
              The design project that our team proposed revolves around
              addressing the challenges and issues situated in the Sustainable
              Development Goal 3: “Good Health and Well-Being.”. The team’s goal
              is to proactively innovate and systematically create a solution
              that will truly enhance the overall health and well-being of
              individuals that are currently facing health-related issues. As
              food and delicacies become more diverse, we humans become too
              complacent of what we consume. This, in turn, creates a problem
              wherein we eat more than what we should, consume more calories
              than what is recommended. Our team envisions that this design
              project will cater to the needs of those individuals who are
              struggling in losing or gaining weight.
            </p>
          </div>
        </div>

        <div className="md:mt-14 xs:mt-10">
          {/*PROJECT BACKGROUND SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            PROJECT BACKGROUND
          </h2>
          <div className="border-solid border-2 bg-green-900 rounded-3xl mt-3 px-12 py-5 shadow-lg shadow-slate-300">
            <ul className="list-disc text-white md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Offer more detailed information about the
                background and context of the project.
              </li>
              <li>
                <b>Content:</b> Discuss any relevant industry trends, market
                conditions, or user behaviors that influenced the project.
                Provide a clear understanding of why the project was initiated.
              </li>
            </ul>
            <p className="text-white md:text-justify mt-5 md:text-md">
              The design project that our team envisions, provides a profound
              and comprehensive understanding of the factors and why they came
              to be, that led to the initial planning of the project. Factors
              such as industry trends, market conditions, and ultimately, user
              behaviors have helped the team in wholeheartedly understanding the
              necessary actions and solutions that may mitigate and even prevent
              such challenges in the chosen field. The team had thoroughly
              researched certain user behaviors that had an increasing
              significance on health and well-being. The prevalence of
              technology and the increasing variety of meals has influenced
              people to have sedentary lifestyles, such lifestyles heavily
              impact their overall health. On top of that, specific user
              challenges such as limited time constraints, causes them to desire
              less of having a fitness-oriented lifestyle. However, some users
              tend to exemplify the desire to prioritize health despite time
              constraints due to high demand work environments. In light of
              this, the team gained valuable insight on capitalizing this
              behavior and carefully thought of innovative solutions using
              technology. The rise of health-conscious consumers, coupled with
              the advancements in technology, provided a strong ground for our
              project.
            </p>
          </div>
        </div>

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
          {/*RESEARCHERS SECTION*/}
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
              <h2 className="text-2xl font-bold text-center py-6 text-white">
                Nikkow Ensomow
              </h2>
              <p className="text-center text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img className="mx-auto mt-[-3rem]" src={dev} alt="/" />
              <h2 className="text-2xl font-bold text-center py-6 text-white">
                Sareljohn 5 Pebeda
              </h2>
              <p className="text-center text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img className="mx-auto mt-[-3rem]" src={dev} alt="/" />
              <h2 className="text-2xl font-bold text-center py-6 text-white">
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
