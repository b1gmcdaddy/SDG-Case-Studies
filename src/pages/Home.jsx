import React from "react";
import Navbar from "../components/Navbar";
import SDG1 from "../assets/SDG1.png";
import { Link } from "react-router-dom";
import "../App.css";
import jolo from "../assets/jolo.jpg";
import nikko from "../assets/nikko.jpg";
import sarel from "../assets/sarel.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-[1240px] mx-auto mt-20 grid md:grid-cols-2'>
      <Link to="/GoodHealthSDG">
          <img className='w-[450px] mx-auto my-7 border-solid border-[3px] rounded-md border-white transition-transform transform-gpu hover:scale-105
          shadow-lg shadow-gray-400' src={SDG1} alt='/' />
          </Link>
          <div className='flex flex-col justify-center'>
            <h1 className='text-2xl tracking-wider text-white font-bold py-3'>OUR CASE STUDY</h1>
            <div className='w-[80px] h-[4px] bg-green-800 rounded-md mb-3'></div>
            <p className='text-white text-justify mb-3 md:text-lg xs:text-base'>
              Here lies the Sustainable Development Goal (SDG) that Group 7 - 
              <i>
                <u> Ensomo, Pebida, & Tangpuz</u> &nbsp;
              </i>
              have chosen for their final case study. The group chose <span className='text-green-400'>Good Health & Well Being</span> and you may 
              view the case study by clicking on the icon on the left. 
            </p>
            </div>
            </div>
            
    

        {/*RESEARCHERS SECTION*/}
        <div className="mx-auto mt-14 text-center">
          <h1 className="text-white md:text-2xl sm:text-xl tracking-wide text-xl font-bold">
            MEET THE RESEARCHERS
          </h1>
          <div className="w-[100px] h-[4px] mx-auto bg-green-700 rounded-md mt-3 mb-3"></div>
          <p className="text-white md:text-lg xs:text-base">
            The following are the proponents involved in the research and
            development of this case study.
          </p>
        </div>

        <div className="w-full py-[4rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img
                className="mx-auto mt-[-3rem] rounded-lg h-[450px] xs:h-[380px]"
                src={nikko}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-5 text-white">
                Nikko Ensomo
              </h2>
              <p className="text-center text-base text-white">
                20101049@usc.edu.ph
                <br />
                BSIT - 3
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img
                className="mx-auto mt-[-3rem] rounded-lg h-[450px] xs:h-[380px]"
                src={sarel}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-5 text-white">
                Sareljohn Pebida
              </h2>
              <p className="text-center text-base text-white">
                18103999@usc.edu.ph
                <br />
                BSIT - 3
              </p>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img
                className="mx-auto mt-[-3rem] rounded-lg h-[450px] xs:h-[380px]"
                src={jolo}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-5 text-white">
                Jolony Tangpuz
              </h2>
              <p className="text-center text-base text-white">
                17100437@usc.edu.ph
                <br />
                BSIT - 3
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Home;
