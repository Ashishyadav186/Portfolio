import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="advice project"
              description=" it's just a basic project that i have created using HTML, CSS, Javascript and React where there is a column and you can enter any topic and you will get alot of advices related to that topic 	"
              ghLink="https://github.com/Ashishyadav186/AdviceProject.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-commerce website"
              description="	It’s an e-commerce  Website named Shopkart  that I have created using JavaScript and react and for backend I have used firebase.Tech Stack-React, JavaScript, HTML and CSS."
              ghLink="https://github.com/Ashishyadav186/studioGraphene_assign.git"
              //   demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix Application which purely resembles with the interface of the Netflix by using TMDB API.Tech stack: React, JavaScript, HTML and CSS"
              ghLink="https://github.com/Ashishyadav186/Netflix.git"
              //  demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spotify clone"
              description="I have completed a project that involved creating a basic spotify clone using HTML, CSS,  Javascript and React. it is a responsive and user-friendly web application that allows users to plahy music"
              ghLink="https://github.com/Ashishyadav186/spotify_clone.git"
              //  demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="InstaReels clone"
              description="I built Instagram Reels Clone using just HTML , css, Javascript and React."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
