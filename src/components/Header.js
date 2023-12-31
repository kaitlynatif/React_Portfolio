import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faCode } from "@fontawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

// Header component
function Header() {
  return (
    // Header component
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <FontAwesomeIcon
                icon={faCode}
                className="fa-solid fa-code"
                size="xl"
                style={{ color: "#white" }}
              />
              <Link
                to="/React_Portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Kaitlyn Atif
              </Link>
              <FontAwesomeIcon
                icon={faCode}
                className="fa-solid fa-code"
                size="xl"
                style={{ color: "#white" }}
              />
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;
