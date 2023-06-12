import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import SLider1 from "../assets/images/slider1.jpeg";
import SLider2 from "../assets/images/slider2.jpeg";
import Footer from "../components/Footer";
const Home = () => {
  const slideImage = [
    {
      imagUrl: SLider1,
      Title: "Product Item One",
    },
    {
      imagUrl: SLider2,
      Title: "Product Item Two",
    },
    {
      imagUrl: SLider1,
      Title: "Product Item Three",
    },
  ];
  return (
    <>
      <Header />
      <section>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <Carousel>
                {slideImage.map((Item, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={Item.imagUrl}
                      alt={Item.Title}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            {slideImage.map((Item, index) => (
              <Col className="mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={Item.imagUrl} alt={Item.Title} />
                  <Card.Body>
                    <Card.Title>{Item.Title} </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
