import React, { useState } from "react";
import Header from "../components/Header";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
  Image,
} from "react-bootstrap";
import Footer from "../components/Footer";
import Slider3 from "../assets/images/slider3.jpeg";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const addItem = () => {
    const newItem = {
      name: name,
      price: price,
    };

    setItems([...items, newItem]);
    setName("");
    setPrice("");
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <Header />
      <section>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <Image src={Slider3} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="d-flex  justify-content-between align-items-center pb-5">
            <Col>
              <h2>Cart</h2>
            </Col>
            <Col className="text-end">
              <Button variant="outline-primary" onClick={handleShow}>
                Add Item
              </Button>
            </Col>
          </Row>
          <Row>
            {items.length === 0 ? (
              <Col xs={122}>
                <Card>
                  <Card.Body>
                    <Card.Title>No items in the cart.</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              <>
                {items.map((item, index) => (
                  <Col md={3} key={index} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Img src="" />
                        <Card.Title className="text-capitalize">
                          {item.name}
                        </Card.Title>
                        <Card.Text>${item.price}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => removeItem(index)}
                        >
                          Remove Item
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
      </section>

      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Form>
                <Row>
                  <Col xs={12}>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      className="mb-3 w-100 d-block"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Item Price</Form.Label>
                    <Form.Control
                      className="mb-3 w-100 d-block"
                      type="number"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </Col>
                </Row>
                <Button variant="primary" type="button" onClick={addItem}>
                  Add Item
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
