import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Yadav </span>
            from <span className="purple"> lucknow, India.</span>
            <br /> I have completed my B.tech in computer science (IMSc) from
            Babu banarasi das northern india institute of technology lucknow
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "do better than your best!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
