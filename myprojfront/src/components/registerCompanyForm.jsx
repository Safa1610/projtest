import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterCompanyForm() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [siteweb, setSiteweb] = useState("");
  const [activite, setActivite] = useState("");
  const [taille, setTaille] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAdresse] = useState("");
  const [ville, setVille] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/companies/register", {
        nom,
        description,
        email,
        siteweb,
        activite,
        taille,
        password,
        adresse: address,
        ville,
      })
      .then((res) => {
        navigate("/loginCompany");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5} className="lightgrey p-4 my-3">
            <Form onSubmit={handleSubmit}>
              <h3>S'inscrire</h3>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Nom</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Description</label>
              </Form.Floating>
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
                  id="floatingInputCustom"
                  type="text"
                  value={siteweb}
                  onChange={(e) => setSiteweb(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Site web</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  value={activite}
                  onChange={(e) => setActivite(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Activité</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="number"
                  placeholder=""
                  minLength="5"
                  maxLength="100000"
                  value={taille}
                  onChange={(e) => setTaille(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">taille</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Mot de passe</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  value={address}
                  onChange={(e) => setAdresse(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Address</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">ville</label>
              </Form.Floating>
              <Button variant="primary" type="submit" className="float-right">
                Se connecter
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-flex p-2 justify-content-md-center">
        Already registered
        <a className="px-2" href="/login">
          Se connecter?
        </a>
      </div>
    </>
  );
}

export default RegisterCompanyForm;
