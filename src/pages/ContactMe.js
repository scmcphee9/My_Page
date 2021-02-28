import React from "react";
import { Form, Card, Button } from "react-bootstrap";

function ContactMe() {
  return (
    <Card style={{ width: "75rem", margin: "auto", padding: "10px" }}>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default ContactMe;
