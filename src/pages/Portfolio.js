import React from "react";
import CardData from "../components/Card/CardData";
import { CardDeck } from "react-bootstrap";
import KeepDreaming from "./assets/images/Keep_Dreaming.png";
import EmployeeDirectory from "./assets/images/employee-directory.png";
import TreePic from "./assets/images/treeQuiz.png";
import FitnessPic from "./assets/images/fitnessTracker.png";
import Weather from "./assets/images/WeatherApp.png";
import NoteTaker from "./assets/images/Note_Taker.png";
import background from "./assets/images/DSC_0333.jpg";
import Readme from "./assets/images/readme-creator.png";
import RemindMe from "./assets/images/RemindMe.png";
import ChuckRoast from "./assets/images/ChuckRoast.png";
import Footer from "../components/Footer/Footer";
import "./portfolio.css";

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
        "This is an application that can hold all of your employees. You can search by their name or phone number to sort through the list. You can also order the list in alphabetical order, ascending or descending. This application uses reactJS and axios.",
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
        "Track your fitness days and workouts by cardio or weight lifting.  This app will show you your past workout information and charts on progress.  This app uses javascript, MonogoDB, mongoose.",
      repo: "https://github.com/scmcphee9/Workout_tracker",
      deployed:
        "https://secure-basin-67312.herokuapp.com/?id=6023329785d2e4001182ad79",
      image: FitnessPic,
    },
    {
      title: "Weather Application",
      description:
        "Going on a trip? Check out the weather of where you are going and the long range forecast to help predict what to bring and wear. This app uses JQuery, fetch calls, and promises.",
      repo: "https://github.com/scmcphee9/weather_app",
      deployed: "https://scmcphee9.github.io/weather_app/",
      image: Weather,
    },
    {
      title: "Note Taker",
      description:
        "Need to take note or make a list? This app does that! Take notes, save them, and remove them when they are complete!  This app uses an express server, api and html routes, javascript.",
      repo: "https://github.com/scmcphee9/Note_Taker",
      deployed: "https://afternoon-dawn-66402.herokuapp.com/",
      image: NoteTaker,
    },
    {
      title: "ReadMe Creator",
      description:
        "Need to make a ReadMe file for your repo? This allows you to enter in all of the necessary information, then writes it and creates a new file.  This app uses NodeJs, inquirer, read/write files",
      repo: "https://github.com/scmcphee9/README_Creator",
      deployed: "https://www.shawnmcphee.com",
      image: Readme,
    },
    {
      title: "Remind Me",
      description:
        "Need to make a ReadMe file for your repo? This allows you to enter in all of the necessary information, then writes it and creates a new file.  This app uses NodeJs, inquirer, read/write files.  NOTE: Deployment will not send you to the actual site.  There is a bug that is currently being worked on, for the link please see the repo. The site works properly locally.",
      repo: "https://github.com/scmcphee9/Remind-Me",
      deployed: "https://www.shawnmcphee.com",
      image: RemindMe,
    },
    {
      title: "Chuck Roast",
      description:
        "Need to figure out what to make for dinner? Select your protein, or dessert, and then choose your meal to get your recipe and a Chuck Norris food joke to inspire you to round-house-kick your meal up a notch!  This application uses javascript, html, and fetch.",
      repo: "https://github.com/scmcphee9/Chuck_Roast",
      deployed: "https://samfan808.github.io/Chuck_Roast/",
      image: ChuckRoast,
    },
  ];

  return (
    <>
      <img className="background" src={background} />
      <h3 id="portfolioHeader">Portfolio</h3>
      <CardDeck id="fullDeck">
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
      <Footer />
    </>
  );
}

export default Portfolio;
