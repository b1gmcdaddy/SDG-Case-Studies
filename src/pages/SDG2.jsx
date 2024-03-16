import React, { useState } from "react";
import Navbar from "../components/Navbar";
import empathy2 from "../assets/empathy2.png";
import Accordion from "../components/Accordion";
import ideation2 from "../assets/ideation2.png";
import prototype2 from "../assets/prototype2.png";
import jolo from "../assets/jolo.jpg";
import nikko from "../assets/nikko.jpg";
import sarel from "../assets/sarel.jpg";
import elijah from "../assets/elijah.png";
import kylepersona from "../assets/kylepersona.png";
import kyleempathy from "../assets/kyleempathy.png";

const SDG2 = () => {
  const [showScamper, setShowScamper] = useState(false);

  const toggleScamper = () => {
    setShowScamper(!showScamper);
  };

  const accordionItems = [
    {
      title: "Persona",
      image: `${elijah}`,
      image2: `${kylepersona}`,
    },
    {
      title: "Empathy Map",
      image: `${empathy2}`,
      image2: `${kyleempathy}`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-4 text-red-300 text-center">
          <br />
          Quality Education
        </h1>
        <p className="text-lg text-white text-center italic">
          This page entails the researchers' second case study on the SDG:
          Quality Education, which led them to use design thinking and ideation
          to create a prototype of a document/file sharing web app named
          Re:Sources
        </p>

        <div className="mx-auto mt-14 text-center">
          {/*RESEARCHERS SECTION*/}
          <h1 className="text-white md:text-2xl sm:text-xl tracking-wide text-xl font-bold">
            MEET THE RESEARCHERS
          </h1>
          <div className="w-[100px] h-[4px] mx-auto bg-red-400 rounded-md mt-3 mb-3"></div>
          <p className="text-white md:text-lg xs:text-base">
            The following are the proponents involved in the research and
            development of this case study.
          </p>
        </div>

        <div className="w-full py-[4rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
            <div className="w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300 shadow-gray-400">
              <img
                className="mx-auto mt-[-3rem] rounded-lg md:h-[450px]"
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
                className="mx-auto mt-[-3rem] rounded-lg md:h-[450px]"
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
                className="mx-auto mt-[-3rem] rounded-lg md:h-[450px]"
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

        <div className="md:mt-8 xs:mt-10">
          {/*INTRODUCTION SECTION*/}
          <h2 className="text-2xl font-bold text-white">INTRODUCTION</h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-red-400">
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
              addressing the challenges and issues situated in Sustainable
              Development Goal 4: “Quality Education." Our team’s goal is to
              create an application that makes the lives of its users easier and
              that would greatly improve the quality of their education. As our
              world keeps growing and evolving, people nowadays are more reliant
              on technology, where sources of information are more accessible
              but not as credible. Our team aims to provide a solution to this
              problem in order to help the users look for sources that are
              credible and can be used for their works.
            </p>
          </div>
        </div>

        <div className="md:mt-8 xs:mt-10">
          {/*PROJECT BACKGROUND SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            PROJECT BACKGROUND
          </h2>
          <div className="border-solid border-2 bg-red-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
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
              In this fast-paced world, people tend to rely more on technology
              to look for credible resources that they will use for their works
              and rarely visit the library. Our team thought of an application
              that could meet the needs of the users. We will create a simple,
              user-friendly, and efficient application so that the users will
              not have a hard time using the application. <br />
              <br />
              Our team thinks thoroughly about the factors that would affect the
              behaviors of the users and why they act like this. As the world
              keeps on changing, technology is rapidly evolving, and many
              automobiles are created where they can cause heavy traffic, which
              causes people to often visit libraries. People nowadays tend to
              rely more on technology to look for sources of information because
              it saves time compared to going to the library and looking for
              information that they will use for their work. But the problem is
              that not all sources of information found on the internet are
              credible; some of them are false information, which is common
              nowadays. That is why our team decided to come up with a solution
              that would solve this problem and create an application that meets
              the needs of the users.
            </p>
          </div>
        </div>

        <div className="md:mt-8 xs:mt-10">
          {/*PROBLEM SECTION*/}
          <h2 className="text-2xl font-bold text-white md:inline">
            PROBLEM STATEMENT
          </h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-red-400">
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
              The Design Project that the team envisioned is aimed at resolving
              the critical challenges in the context of information access and
              credibility assessment. The main objective of our project is to
              provide a solution by creating an innovative system that allows
              users who grapple with the challenges of sourcing reliable
              information for teacher, learning, and research purposes.
              <br />
              <br /> In today’s world of academe, users find it difficult to
              search for credible, reliable, and up-to-date information. Users
              who are facing certain complexities such as time constraints find
              it difficult in navigating through diverse sources scattered
              across the internet. Some websites that publish such information
              even ask for overpriced subscriptions wherein students like the
              most of us, cannot afford to begin with. In addition to that, the
              absence of a robust system to assess the credibility of certain
              documents filled with information creates uncertainty towards the
              individual’s overall research.
            </p>
          </div>
        </div>

        <div className="md:mt-8 xs:mt-10">
          {/*USER RESEARCH SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            USER RESEARCH
          </h2>
          <div className="border-solid border-2 bg-red-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
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
              Throughout this whole process, early research with the problem at
              hand helped the team in understanding the specific needs and
              challenges faced by certain individuals who want to have a
              convenient and efficient access to academic reading materials.
              This in-depth exploration allowed us to identify the pain points
              and preferences of those said individuals that would help the team
              in capitalizing on the design direction of our project. In doing
              all of this, the team can ensure that the final product will
              seamlessly integrate all the possible solutions. <br />
              <br />
              The team has produced 2 user personas that directly inherit the
              needs and challenges of a certain individual that is highly likely
              to be the recipient of our design project. One of the personas is
              a 22-year old single male named Elijah Baguio, as a student in a
              university, this individual’s main goal is to back up his
              assignments with reliable sources. He plans to access a site that
              is hassle-free which shall ultimately help him work on and finish
              his assignment efficiently.
            </p>
          </div>
          <Accordion items={accordionItems} />
        </div>

        <div className="md:mt-10 xs:mt-10">
          {/*IDEATION SECTION*/}
          <h2 className="text-2xl font-bold text-white md:inline">IDEATION</h2>
          <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-red-400">
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
              The team emphasized on having observational studies involved in
              analyzing the actual behaviors of users as they navigated existing
              platforms to source information. We took a hands-on approach in
              understanding the different needs of users, we carefully watched
              how people in the real-world navigate existing platforms to find
              the necessary information. In doing all of those, the team managed
              to see firsthand the existing challenges that those individuals
              had faced during their search process. Ultimately, the team was
              able to identify the specific pain points and understand the
              context in which those certain problems came from. <br />
              <br />
              By utilizing all the gathered information about the main proponent
              of the challenges that were observed. The team managed to
              capitalize on the missing features of some web-based systems that
              publish academic materials and went on to visualize how we can not
              only implement but also improve those features that are highly
              needed by the individuals that the team had observed. The team had
              collaborative brainstorming sessions that involved each team
              member to contribute in giving out diverse ideas on what the
              possible features would be for the specific design project. The
              researchers also employed ideation techniques such as{" "}
              <b>SCAMPER</b> and <b>Fishbone Diagram</b> during this stage.
              <br></br>
              <button
                className={`cursor-pointer text-white mt-3 font-semibold border border-white px-3 md:py-2 rounded-2xl ${
                  showScamper
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-red-900 hover:bg-red-700"
                }`}
                onClick={toggleScamper}
              >
                {!showScamper ? <p>Show Ideation Diagrams</p> : <p>CLOSE</p>}
              </button>
            </p>
          </div>
          {showScamper && (
            <div className="flex items-center justify-center">
              <img src={ideation2} className="mt-8" />
            </div>
          )}
        </div>

        <div className="md:mt-8 xs:mt-10">
          {/*PROTOTYPE SECTION*/}
          <h2 className="text-2xl font-bold text-white flex justify-end">
            PROTOTYPE
          </h2>
          <div className="border-solid border-2 bg-red-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
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
              The team head first gathered all the necessary information that
              had been known from the start, starting from the very first
              brainstorming session down to the last bits of ideation that the
              team had done. In light of that, we carefully went through in
              revisiting early concepts, exploring potential features and
              identified it throughout the whole process. The first few concepts
              that the team had thought included some variations of features
              that were present in some of the websites that were used by the
              people that we have observed, the key differences that we took
              note of included convenience and efficiency in using the overall
              design project. <br />
              <br />
              In the prototype that the team managed to design and produce, it
              contains 10 pages with different screens for different types of
              use. It includes all the necessary pages from sign up to opening,
              reading, bookmarking, and rating academic resources that shall be
              found on the design project system that the team envisioned.
              <br />
              <br />
              <p className="text-center text-lg font-semibold italic">
                Below is a low fidelity screenshot of the wireframe of the
                Re:Sources web app.
              </p>
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <img src={prototype2} />
        </div>
        <h1 className="text-white md:text-6xl xs:text-2xl text-center font-extrabold mt-5">
          Re:Sources
        </h1>
      </div>

      <div className="md:mt-8 xs:mt-10">
        {/*Lesson Learned SECTION*/}
        <h2 className="text-2xl font-bold text-white md:inline">
          LESSONS LEARNED
        </h2>
        <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-red-400">
          <ul className="list-disc text-black md:text-justify md:text-md">
            <li>
              <b>Purpose:</b> Reflect on the challenges faced and lessons
              learned during the design process.
            </li>
            <li>
              <b>Content:</b> Discuss what worked well, what could be improved,
              and any unexpected insights gained. This section contributes to
              the continuous improvement of the design thinking process.
            </li>
          </ul>
          <p className="text-black md:text-justify mt-5 md:text-md">
            Quite a lot of lessons were learned by the team throughout the whole
            course of the project. Starting from the brainstorming sessions down
            to the prototyping stages of the design project, the team had
            countless insights that were gained, insights and learnings that we
            wouldn’t have known otherwise. What truly worked well for the team
            was how easy it was for us to do most of the concepts needed to be
            done in the entirety of the design project thanks to the Miro
            application. This had made the work of the team much easier and
            efficient, the convenience that it gave us tremendously paid off in
            the end. In light of that, we successfully made the personas of
            supposedly real-world people together with their respective empathy
            maps. On the other hand, the team could improve on the basic
            functionalities of the proposed wireframe and prototype, making it
            more user-friendly and making the user experience much more
            comfortable.
            <br />
            <br /> One notable unexpected learning insight that the whole team
            gained, was that the whole idea of generating ideas and making them
            into concrete systems such as prototypes is not a simple and easy
            process. Before we were enrolled in this class, the whole idea of
            ideation and prototyping was different for us, at first, we thought
            it was something that could be done in one night. The team was naive
            in thinking that the whole aspect of designing a project takes an
            extended amount of time to work upon, it’s definitely not something
            that can be crammed into one night of work. This learning has truly
            given a new perspective of how the team views design project and
            shall definitely help each and every member of the team, and the
            whole team as a whole in the further development of our design
            project.
          </p>
        </div>
      </div>

      <div className="md:mt-8 xs:mt-10 mb-14">
        {/*Conclusion SECTION*/}
        <h2 className="text-4xl font-bold text-white text-center">
          CONCLUSION
        </h2>
        <div className="border-solid border-2 bg-red-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
          <ul className="list-disc text-white md:text-justify md:text-md">
            <li>
              <b>Purpose:</b> Summarize the key takeaways and outcomes of the
              design project SDG Case Study.
            </li>
            <li>
              <b>Content:</b> Provide a concise conclusion that recaps the main
              points and emphasizes the significance of the design solution.
            </li>
          </ul>
          <p className="text-white md:text-justify mt-5 md:text-md">
            In conclusion, the entirety of this design project took into account
            the challenges and issues that were faced by the personas that the
            team had made. In the case of the Quality Education SDG, the team
            conducted in-depth user research and brainstormed solutions that
            could be implemented to help mitigate and solve the problems that
            the specific user goes through. Our envisioned application aims to
            be a site where users can easily discover, read, evaluate, and use
            credible sources of information that would help them in their
            academic needs.
            <br />
            <br /> Through understanding the specific challenges and issues
            faced by the users in our personas, the team has designed solutions
            that not only cater and solve their immediate needs but also guide
            and help them achieve their goals. The team shall continue on
            improving bit by bit through iteration the design of the project
            based on the user feedback, making sure that it stays true to those
            certain needs of the users and make them valuable so that it may
            make a difference in their everyday lives.
          </p>
        </div>
      </div>
    </>
  );
};

export default SDG2;
