import React from "react";
import Navbar from "../components/Navbar";
import SDG1 from "../assets/SDG1.png";
import SDG2 from "../assets/SDG2.png";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">
          <br />
          Choose the SDG Case Study to View
        </h1>
        <p className="text-lg text-white">
          Below are the two SDGs that Group 7{" "}
          <i>
            <u>Ensomo, Pebida, Tangpuz </u>
          </i>
          have chosen for their Design Project case studies. Click either image
          to view the different pages for each aformentioned case study.
        </p>
        <div className="md:flex mt-10">
          <Link to="/GoodHealthSDG" className="w-1/2 mr-4">
            <img
              src={SDG1}
              className="border-double border-8 border-white-500 rounded-lg"
            />
          </Link>
          <Link to="/QualityEducSDG" className="w-1/2">
            <img
              src={SDG2}
              className="border-double border-8 border-white-500 rounded-lg"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
