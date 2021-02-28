import React from "react";
import CardData from "../components/Card/CardData";
import { CardDeck } from "react-bootstrap";
import KeepDreaming from "./assets/images/Keep_Dreaming.png";
import EmployeeDirectory from "./assets/images/employee-directory.png";
import TreePic from "./assets/images/treeQuiz.png";
import FitnessPic from "./assets/images/fitnessTracker.png";
import Weather from "./assets/images/WeatherApp.png";
import NoteTaker from "./assets/images/Note_Taker.png";

function Portfolio() {
  const portfolioArray = [
    {
      title: "Keep Dreaming",
      description:
        "Select you travel destination by answering some basic questions, and a list of locations will be displayed.  This project is currently only using seeded data so not all options will be displayed.  This is a full stack project utilizing mySQL, express, node, and javascript",
      repo: "https://github.com/scmcphee9/Keep_Dreaming",
      deployed: "https://frozen-journey-37808.herokuapp.com/",
      image: KeepDreaming,
    },
    {
      title: "Employee Directory",
      description:
        "This is an application that can hold all of your employees. You can search by their name or phone number to sort through the list. You can also order the list in alphabetical order, ascending or descending. This application uses react.",
      repo: "https://github.com/scmcphee9/employee_directory",
      deployed: "https://pensive-snyder-69b1b3.netlify.app/",
      image: EmployeeDirectory,
    },
    {
      title: "Tree Quiz",
      description:
        "Test your knoweledge on trees in the one minute quiz! See if you can set a High Score.  This application uses JQuery and Template literals to iterate through the questions.",
      repo: "https://github.com/scmcphee9/Timed-Quiz",
      deployed: "https://scmcphee9.github.io/Timed-Quiz/",
      image: TreePic,
    },
    {
      title: "Fitness Tracker",
      description:
        "Track your fitness days and workouts by cardio or weight lifting.  This app will show you your past workout information and charts on progress.  This app uses",
      repo: "https://github.com/scmcphee9/Workout_tracker",
      deployed:
        "https://secure-basin-67312.herokuapp.com/?id=6023329785d2e4001182ad79",
      image: FitnessPic,
    },
    {
      title: "Weather Application",
      description:
        "Going on a trip? Check out the weather of where you are going and the long range forecast to help predict what to bring and wear.",
      repo: "https://github.com/scmcphee9/weather_app",
      deployed: "https://scmcphee9.github.io/weather_app/",
      image: Weather,
    },
    {
      title: "Note Taker",
      description:
        "Need to take note or make a list? This app does that! Take notes, save them, and remove them when they are complete!",
      repo: "https://github.com/scmcphee9/Note_Taker",
      deployed: "https://afternoon-dawn-66402.herokuapp.com/",
      image: NoteTaker,
    },
  ];

  return (
    <>
      <h3>Portfolio</h3>

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
    </>
  );
}

export default Portfolio;
