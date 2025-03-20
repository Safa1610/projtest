import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AddJob = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [adresse, setAdresse] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const societe = jwtDecode(token).id;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/jobs/add", {
        titre,
        description,
        adresse,
        societe,
      })
      .then((res) => {
        console.log("added");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5} className="lightgrey p-4 my-3">
            <Form onSubmit={handleSubmit}>
              <h3>Add job</h3>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name@example.com"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Titre</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Password"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Description</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Adresse</label>
              </Form.Floating>
              <Button variant="primary" type="submit">
                Se connecter
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-flex p-2 justify-content-md-center">
        Pas encore membre?
        <a className="px-2" href="/login">
          S'inscrire
        </a>
      </div>
    </>
  );
};

export default AddJob;
