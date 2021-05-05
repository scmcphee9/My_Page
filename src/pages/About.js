import React from "react";
import { Card } from "react-bootstrap";
import Photo from "./assets/images/IMG_1463.jpg";
import background from "./assets/images/DSC_0798.jpg";
import Footer from "../components/Footer/Footer";
import "../App.css";
function About() {
  return (
    <div>
      <img className="background" src={background} />
      <Card id="aboutMe">
        <div className="row no-gutters">
          <Card.Img
            id="headShot"
            className="col-md-4"
            src={Photo}
            alt="Head Shot"
          />

          <Card.Body className="col-md-8" id="text1">
            <Card.Title>Hire Me!</Card.Title>
            <Card.Text>
              <span className="tab"></span>Full Stack Web Developer, utilizing
              my engineering and sales background, to build a great user
              experience on the web. I recently earned a certificate in full
              stack web development from the University of Denver, with newly
              developed skills in JavasScript, CSS, React.js, Node, MySQL,
              MongoDB, and Express. I enjoy making a website function as it
              should by ensuring the front end and back end are communicating
              properly to maintain a high level of client satisfaction. I stay
              calm in fast-paced situations and rely on logic to persevere when
              the code is not working how I planned. I adapt quickly and
              communicate effectively; this strength came in handy more often
              than not when coding in teams. I look forward to contributing to a
              team that demonstrates a passion for teamwork and achievement
              through a commitment to positive work environments and diversity
              of thought.
            </Card.Text>
            <Card.Text>
              <span className="tab"></span>I am from the east coast:
              Massachusetts, Maine, and Pennsylvannia. I moved out to Colorado
              in 2019, to a small ski town in Steamboat Springs. I have been
              married for 5 years to my ever supporting wife Sarah, and together
              we have a two year old son William. We also have two dogs and two
              cats. My interests are in the outdoors, this includes hiking,
              biking, skiing, scuba diving, etc. Photography is something I have
              recently gained a passion for; in particular, night and macro
              photography. If you want to see some of my work and experience
              check out my portfolio, resume, or links to my github and
              linkedIn.
            </Card.Text>
            <Card.Title>Languages:</Card.Title>
            <ul>
              <li>JavasScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>Node</li>
            </ul>
            <Card.Title>Databases:</Card.Title>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </Card.Body>
        </div>
      </Card>
      <Footer />
    </div>
  );
}

export default About;
