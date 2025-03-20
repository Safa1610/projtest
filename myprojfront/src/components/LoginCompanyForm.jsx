import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginCompanyForm() {
  const [email, setEmail] = useState("");
  const [motpasse, setMotpasse] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/companies/login", {
        email,
        password: motpasse,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", "company");
        window.location.href = "/";
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5} className="lightgrey p-4 my-3">
            <Form onSubmit={handleSubmit}>
              <h3>Se connecter</h3>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Email</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  value={motpasse}
                  onChange={(e) => setMotpasse(e.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Mot de passe</label>
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
}

export default LoginCompanyForm;
