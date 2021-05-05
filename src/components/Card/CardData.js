import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./cardData.css";

function CardData(props) {
  function handleFormSubmit(link) {
    window.open(link);
  }

  return (
    <Col md={4}>
      <Card id="cardStyle">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button
            id="repo"
            variant="primary"
            onClick={() => handleFormSubmit(props.repo)}
          >
            Go to Repo
          </Button>

          <Button
            id="link"
            variant="primary"
            onClick={() => handleFormSubmit(props.deployed)}
          >
            Go to Site
          </Button>
        </Card.Body>
      </Card>
      <br></br>
    </Col>
  );
}

export default CardData;
