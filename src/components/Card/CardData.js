import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function CardData(props) {
  // does this belong here or in portfolio
  function handleFormSubmit(link) {
    window.open(link);
  }

  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => handleFormSubmit(props.repo)}
          >
            Go to Repo
          </Button>

          <Button
            variant="primary"
            onClick={() => handleFormSubmit(props.deployed)}
          >
            Go to Site
          </Button>
        </Card.Body>
      </Card>
      <br></br>
    </Col>

    // {/* </Container> */}
  );
}

export default CardData;
