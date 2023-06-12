import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col>
              <h2>Shopping Website</h2>
            </Col>
            <Col>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link className="text-white">
                    <AiFillTwitterCircle />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white">
                    <BsFacebook />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white">
                    <AiFillInstagram />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white">
                    <RiWhatsappFill />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
