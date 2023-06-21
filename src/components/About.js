import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/kaitlyn-atif-avatar.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Kaitlyn Atif
                </Card.Title>
                <Card.Text>
                Protein Biochemist with nine years of laboratory bench experience and over five years of experience 
                in IgG therapeutics—specifically the downstream stages of the mAb (monoclonal antibody) drug development process. 
                I have a strong foundation in experiment design, process development, data analysis, troubleshooting, and working 
                in team-oriented and collaborative environments.
                </Card.Text>
                <Card.Text>
                Currently, I am working toward a certificate in Full Stack Development from the Georgia Institute of Technology to 
                add more technical expertise alongside my Bachelor of Science in Biochemistry. I have demonstrated skills in 
                JavaScript, HTML, CSS, responsive web design, MERN Stack, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
