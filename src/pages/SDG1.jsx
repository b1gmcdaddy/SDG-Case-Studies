import React, { useState } from "react";
import Navbar from "../components/Navbar";
import jebron from "../assets/jebron.jpg";
import empathymap from "../assets/empathymap.jpg";
import Accordion from "../components/Accordion";
import scamper from "../assets/scamper.png";
import fishbone1 from "../assets/fishbone1.png";
import prototype from "../assets/prototype.png";
import persona2 from "../assets/persona2.png";
import empathy2a from "../assets/empathy2a.png";

const SDG1 = () => {
  const [showScamper, setShowScamper] = useState(false);

  const toggleScamper = () => {
    setShowScamper(!showScamper);
  };

  const accordionItems = [
    {
      title: "Persona",
      image: `${jebron}`,
      image2: `${persona2}`,
    },
    {
      title: "Empathy Map",
      image: `${empathymap}`,
      image2: `${empathy2a}`,
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
                className={`cursor-pointer text-white mt-3 font-semibold border border-white px-3 md:py-2 rounded-2xl ${
                  showScamper
                    ? "bg-red-900 hover:bg-red-800"
                    : "bg-green-900 hover:bg-green-800"
                }`}
                onClick={toggleScamper}
              >
                {!showScamper ? <p>Show Ideation Diagrams</p> : <p>CLOSE</p>}
              </button>
            </p>
          </div>
          {showScamper && (
            <div className="text-center">
              <img src={scamper} className="mt-8 mx-auto w-full" />
              <img src={fishbone1} className="mt-5 mx-auto" />
            </div>
          )}
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
              To commence the prototyping stage, each individual member of the
              team gathered everything from the initial brainstorming sparks to
              the latest ideas. This meant revisiting early concepts, exploring
              potential features, and identifying any roadblocks encountered
              along the way. Some initial ideas mirrored features seen on
              platforms used by the observed users. However, the key focus was
              on creating a design that offered greater ease of use and improved
              efficiency. In the prototype that the team managed to design and
              produce, it contains 14 pages with different screens for different
              types of use. It includes all the necessary pages from
              registration up to using the scanning feature that the team will
              implement in the upcoming weeks. Some of the critique that the
              team faced while presenting the prototype was on how our design
              project can be different from the rest. The answer that we came up
              with was that our design project can be unique in a way that it is
              suited for Filipino cuisine and meals. In this way, users will not
              have difficulty in trying to search for the amount of calories a
              certain Filipino dish will have.
              <br />
              <br />
              <p className="text-center text-lg font-semibold italic">
                Below is a low fidelity screenshot of the wireframe of
                CalorieSnap
              </p>
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <img src={prototype} />
        </div>
        <h1 className="text-white md:text-6xl xs:text-2xl text-center font-extrabold drop-shadow-sm">
          Calorie<span className="text-green-600">Snap</span>
        </h1>
      </div>

      <div className="md:mt-10 xs:mt-10">
        {/*LESSONS LEARNED SECTION*/}
        <h2 className="text-2xl font-bold text-white md:inline">
          LESSONS LEARNED
        </h2>
        <div className="border-solid border-2 border-grey-500 bg-slate-300 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-green-300">
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
            Over the course of the project, the team learned a good deal of
            valuable lessons. The team learned a great deal throughout the
            design project, from the ideation meetings to the prototyping
            phases. These were insights and lessons we would not have discovered
            otherwise. <br />
            <br />
            The guides that our teacher has given us have really helped our team
            understand how the ideation process works, especially when we are
            making our prototype, which is the wireframe. We made it possible
            for us to make our prototype with Miro, which provides us with a
            tool for our team to collaborate on our ideas without having a hard
            time doing it. But before we have successfully made our prototype,
            we have gone through the process of making a persona, which is a
            replica of a real-world user.
            <br />
            <br /> With all of these processes, it has led us to a new insight,
            which is that now we know that there are applications on the
            internet that can provide us with the tools we needed for this
            project. Miro helps us a lot in making our project because it
            provides convenience to our team by making our collaboration easier
            and more efficient than before. This learning will be one of our
            stepping stones on how to collaborate and make projects much faster
            than from our past project-making.
          </p>
        </div>
      </div>

      <div className="md:mt-8 xs:mt-10 mb-14">
        {/*Conclusion SECTION*/}
        <h2 className="text-4xl font-bold text-white text-center">
          CONCLUSION
        </h2>
        <div className="border-solid border-2 bg-green-900 rounded-3xl mt-3 md:px-12 xs:px-8 py-5 shadow-lg shadow-slate-300">
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
            In conclusion, this activity really played a big part in our
            upcoming projects, which helps us overcome our challenges and know
            what to do next without wasting any time. The team conducted a
            thorough brainstorming session and research on what the needs of the
            users were. The application that our group has agreed upon is all
            about tracking our daily intake of calories, which can help a person
            be healthier because he or she will now know how many calories he or
            she takes on a daily basis.
            <br />
            <br /> The challenges in our group started when we made our
            personas, because it takes a lot of brainstorming sessions to decide
            which solution is the best and that meets the needs of the users.
            The team will keep improving by iterating through all the processes
            after receiving feedback from our users in order to make them
            satisfied and help solve their problems.
          </p>
        </div>
      </div>
    </>
  );
};

export default SDG1;
