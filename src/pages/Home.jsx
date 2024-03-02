import React from "react";
import Navbar from "../components/Navbar";
import SDG1 from "../assets/SDG1.png";
import SDG2 from "../assets/SDG2.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-4">
          <br />
          Welcome to Our Website
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan orci a odio facilisis, et aliquam arcu convallis. Fusce
          tempus augue vel est fermentum molestie. Morbi ut mauris nec sapien
          laoreet dignissim.
        </p>
        <div className="flex mt-10">
          <img src={SDG1} alt="Image 1" className="w-1/2 mr-4" />
          <img src={SDG2} alt="Image 2" className="w-1/2" />
        </div>
      </div>
    </>
  );
};

export default Home;
