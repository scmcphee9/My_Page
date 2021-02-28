import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function CardData(props) {
  return (
    // <div className="card mb-4">
    // <Container>

    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go to Repo</Button>
          <Button variant="primary">Go to Deployed Link</Button>
        </Card.Body>
      </Card>
      <br></br>
    </Col>

    // {/* </Container> */}
  );
}

export default CardData;
