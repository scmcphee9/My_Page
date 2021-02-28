import React from "react";
import { Card } from "react-bootstrap";
import Photo from "./assets/images/IMG_1463.jpg";

function About() {
  return (
    <Card style={{ width: "75%" }}>
      <div className="row no-gutters">
        <Card style={{ width: "25%", float: "left" }}>
          <Card.Img src={Photo} alt="Head Shot" />
        </Card>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            I am a full stack web developer, utilizing my engineering and sales
            background, to build a great user experience on the web. I recently
            earned a certificate in full stack web development from the
            University of Denver, with newly developed skills in JavasScript,
            CSS, React.js, Node. I enjoy making a website function as it should
            by ensuring the front end and back end are communicating properly to
            maintain a high level of client satisfaction. My experience with
            building applications has been fun, challenging, and exciting as I
            can put my skills to the test and continually develop them with
            every project. I am a creative problem solver, quick learner, and a
            great communicator. I look forward to contributing to a team that
            demonstrates a passion for teamwork and achievement through a
            commitment to positive work environments and diversity of thought.
          </Card.Text>
          <Card.Text>
            I am from the east coast: Massachusetts, Maine, and Pennsylvannia. I
            moved out to Colorado in 2019, to a small ski town in Steamboat
            Springs. I have been married for 5 years to my ever supporting wife
            Sarah, and together we have a two year old son William. We also have
            a German Shephard and two cats. My interests are in the outdoors,
            this includes hiking, biking, skiing, scuba diving, etc. Photography
            is something I have recently gained a passion for. In particular
            night photography and macro. If you want to see some of my work and
            experience check out my portfolio, resume, or links to my github and
            linkedIn.
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default About;
