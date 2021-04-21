import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import background from "./assets/images/DSC_0070.jpg";
import css from "./contactMe.css";

function ContactMe() {
  // function handleFormSubmit(event) {
  //   event.preventDefault();

  //   // send an email with the entered information to my email.
  //   // do I need a database? Can I just push this info into an object or array?

  //   // how do i make this work...
  // }
  return (
    <>
      <img className="background" src={background} />
      <Card id="contactCard">
        <h5>Email</h5>
        <p>
          <a className="myInfo" href="mailto:scmcphee9@gmail.com">
            scmcphee9@gmail.com
          </a>
        </p>
        <h5>Phone Number</h5>
        <p>
          <a className="myInfo" href="tel:+1-508-843-3731">
            (508) 843-3731
          </a>
        </p>
        <h5>GitHub</h5>
        <p>
          <a
            className="myInfo"
            href="https://github.com/scmcphee9"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/scmcphee9
          </a>
        </p>
        <h5>LinkedIn</h5>
        <p>
          <a
            className="myInfo"
            href="https://www.linkedin.com/in/shawn-mcphee-4a92731ab/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/shawn-mcphee-4a92731ab/
          </a>
        </p>

        {/* <Form>
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
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form> */}
      </Card>
    </>
  );
}

export default ContactMe;
