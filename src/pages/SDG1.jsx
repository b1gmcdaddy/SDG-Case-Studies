import React, { useState } from "react";
import Navbar from "../components/Navbar";
import jebron from "../assets/jebron.jpg";
import empathymap from "../assets/empathymap.jpg";
import dev from "../assets/dev.jpg";
import Accordion from "../components/Accordion";
import scamper from "../assets/scamper.jpg";
import prototype from "../assets/prototype.jpg";

const SDG1 = () => {
  const [showScamper, setShowScamper] = useState(false);

  const toggleScamper = () => {
    setShowScamper(!showScamper);
  };

  const accordionItems = [
    {
      title: "Persona",
      image: `${jebron}`,
    },
    {
      title: "Empathy Map",
      image: `${empathymap}`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-500 text-center">
          <br />
          Good Health & Well Being
        </h1>
        <p className="text-lg text-white text-center italic">
          This page entails the researchers' case study on the SDG Good Health &
          Well Being, which led them to use design thinking and ideation to
          create a prototype of a calorie tracking mobile app called
          CalorieSnap.
        </p>

        <div className="mx-auto mt-14 text-center">
          {/*RESEARCHERS SECTION*/}
          <h1 className="text-white md:text-2xl sm:text-xl tracking-wide text-xl font-bold">
            MEET THE RESEARCHERS
          </h1>
          <div className="w-[100px] h-[4px] mx-auto bg-green-700 rounded-md mt-3 mb-3"></div>
          <p className="text-white md:text-lg xs:text-base">
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

        <div className="md:mt-8 xs:mt-10">
          {/*INTRODUCTION SECTION*/}
          <h2 className="text-2xl font-bold text-white">INTRODUCTION</h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-green-300">
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

        <div className="md:mt-8 xs:mt-10">
          {/*PROJECT BACKGROUND SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            PROJECT BACKGROUND
          </h2>
          <div className="border-solid border-2 bg-green-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
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

        <div className="md:mt-8 xs:mt-10">
          {/*PROBLEM SECTION*/}
          <h2 className="text-2xl font-bold text-white md:inline">
            PROBLEM STATEMENT
          </h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-green-300">
            <ul className="list-disc text-black md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Clearly define the problem or challenge that the
                design project aimed to solve.
              </li>
              <li>
                <b>Content:</b> Articulate the problem statement in a concise
                and focused manner. This section helps readers understand the
                specific issues that needed addressing.
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

        <div className="md:mt-8 xs:mt-10">
          {/*USER RESEARCH SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            USER RESEARCH
          </h2>
          <div className="border-solid border-2 bg-green-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
            <ul className="list-disc text-white md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Share insights gained from the research
                conducted to understand the target users and their needs.
              </li>
              <li>
                <b>Content:</b> Include information about the research methods
                employed, key findings, user personas, and any other relevant
                data that informed the design process.
              </li>
            </ul>
            <p className="text-white md:text-justify mt-5 md:text-md">
              TThe team’s research, conducted with precise detail embraced an
              approach that would meticulously go through with every specific
              corner of the challenge. We had thoroughly gathered data that
              would be beneficial to support the overarching ideas that were
              already in mind the moment the team was finished with specifying
              and finalizing the scope of the problem. The main part of our
              research unraveled the complexities of certain individuals in
              terms of how they behave, think, say, and feel.
              <br />
              <br /> The team had managed to create 2 certain user personas
              whose characteristics perfectly matched the criteria needed for
              those who are essentially going to benefit from the proposed
              design project or solution. One of the personas we produced was
              named Jebron Lames, a 26-year old male individual who struggles to
              track his calorie intake and practice a healthy lifestyle due to
              the time constraints and intricate challenges of having to deal
              with work. This persona of a person stubbornly tries to do things
              in a convenient and hassle-free manner, a high priority in
              efficiency tells us that this user does not like to waste valuable
              time. With that being said, the persona of Jebron Lames perfectly
              serves as a canvas for the solution that the team has crafted in
              mind. The researchers also created empathy maps through Miro
              wherein they empathized with the personas and imagined themselves
              being in their shoes. This allowed them to brainstorm more ideas
              for the app and what it would possibly need to be a success.
            </p>
          </div>
          <Accordion items={accordionItems} />
        </div>

        <div className="md:mt-10 xs:mt-10">
          {/*IDEATION SECTION*/}
          <h2 className="text-2xl font-bold text-white md:inline">IDEATION</h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-green-300">
            <ul className="list-disc text-black md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Describe the ideation phase where potential
                solutions were generated.
              </li>
              <li>
                <b>Content:</b> Discuss brainstorming sessions, workshops, or
                collaborative activities used to generate a variety of ideas.
                Highlight key concepts and how they were initially evaluated.
              </li>
            </ul>
            <p className="text-black md:text-justify mt-5 md:text-md">
              The brainstorming session that was conducted by our group helped
              us come up with various ideas on how to make an application and
              what features are needed for the application in order to meet the
              needs of the user. Our group posted some sticky notes in Miro and
              discussed different types of solutions that could help us solve
              the problem of the users until we came to the conclusion that a
              certain idea would greatly contribute to the problem of the users.
              Before proceeding further, our group evaluated the solution that
              we came up with with caution and validated the solution. The
              researchers employed ideation techniques such as <b>SCAMPER</b>{" "}
              and <b>Fishbone Diagram</b> during this stage. <br></br>
              <button
                className={`cursor-pointer text-white mt-3 font-semibold border border-white md:px-3 md:py-2 rounded-2xl ${
                  showScamper
                    ? "bg-red-900 hover:bg-red-800"
                    : "bg-green-900 hover:bg-green-800"
                }`}
                onClick={toggleScamper}
              >
                {!showScamper ? <p>Show SCAMPER</p> : <p>CLOSE</p>}
              </button>
            </p>
          </div>
          {showScamper && <img src={scamper} className="mt-8" />}
        </div>

        <div className="md:mt-8 xs:mt-10">
          {/*PROTOTYPE SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            PROTOTYPE
          </h2>
          <div className="border-solid border-2 bg-green-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
            <ul className="list-disc text-white md:text-justify md:text-md">
              <li>
                <b>Purpose:</b> Explain how design concepts were translated into
                tangible prototypes.
              </li>
              <li>
                <b>Content:</b> Showcase different iterations of prototypes,
                from low-fidelity to high fidelity versions.
              </li>
            </ul>
            <p className="text-white md:text-justify mt-5 md:text-md">
              Below is a low-fidelity wireframe of CalorieSnap.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <img src={prototype} />
        </div>
      </div>
    </>
  );
};

export default SDG1;
