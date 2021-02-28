import React from "react";
import CardData from "../components/Card/CardData";

import { CardDeck } from "react-bootstrap";

function Portfolio() {
  const portfolioArray = [
    {
      title: "Keep Dreaming",
      description:
        "Select you travel destination by answering some basic questions, and a list of locations will be displayed.  This project is currently only using seeded data so not all options will be displayed.  This is a full stack project utilizing mySQL, express, node, and javascript",
      repo: "https://github.com/scmcphee9/Keep_Dreaming",
      deployed: "https://frozen-journey-37808.herokuapp.com/",
      image: "./assets/images/Keep_Dreaming.png",
    },
    {
      title: "Employee Directory",
      description:
        "This is an application that can hold all of your employees. You can search by their name or phone number to sort through the list. You can also order the list in alphabetical order, ascending or descending. This application uses react.",
      repo: "https://github.com/scmcphee9/employee_directory",
      deployed: "https://pensive-snyder-69b1b3.netlify.app/",
      image: "./assets/images/employee-directory.png",
    },
    {
      title: "Tree Quiz",
      description:
        "Test your knoweledge on trees in the one minute quiz! See if you can set a High Score.  This application uses JQuery and Template literals to iterate through the questions.",
      repo: "https://github.com/scmcphee9/Timed-Quiz",
      deployed: "https://scmcphee9.github.io/Timed-Quiz/",
      image: "./assets/images/treeQuiz.png",
    },
    {
      title: "Tree Quiz",
      description:
        "Test your knoweledge on trees in the one minute quiz! See if you can set a High Score.  This application uses JQuery and Template literals to iterate through the questions.",
      repo: "https://github.com/scmcphee9/Timed-Quiz",
      deployed: "https://scmcphee9.github.io/Timed-Quiz/",
      image: "./assets/images/treeQuiz.png",
    },
    {
      title: "Tree Quiz",
      description:
        "Test your knoweledge on trees in the one minute quiz! See if you can set a High Score.  This application uses JQuery and Template literals to iterate through the questions.",
      repo: "https://github.com/scmcphee9/Timed-Quiz",
      deployed: "https://scmcphee9.github.io/Timed-Quiz/",
      image: "./assets/images/treeQuiz.png",
    },
  ];

  return (
    <>
      <h3>Portfolio</h3>
      {/* <div className="card mb-4"> */}
      <CardDeck>
        {portfolioArray.map((item) => (
          <CardData
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            repo={item.repo}
            deployed={item.deployed}
          />
        ))}
      </CardDeck>
      {/* </div> */}
    </>
  );
}

export default Portfolio;
