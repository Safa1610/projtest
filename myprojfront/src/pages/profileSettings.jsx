import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

// Gestion du profil avec modification des informations
const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    id: "1",
    prenom: "Safa",
    nom: "Mlika",
    email: "johndoe@example.com",
    date: "01/01/1990",
    tel: "99999999",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
    e.preventDefault();
    navigate("/");
  };
  const [motpasse, setMotpasse] = useState("");
  const [confirmpasse, setConfirmpasse] = useState("");
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={5} className="lightgrey p-4 my-3">
          <Form onSubmit={handleChange}>
            <h3>Paramètres du profil</h3>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Prenom"
                value={profile.prenom}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Prenom</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Nom"
                value={profile.nom}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Nom</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                value={profile.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="date"
                value={profile.date}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Date de naissance</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="number"
                placeholder=""
                minlength="8"
                maxlength="8"
                value={profile.tel}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Téléphone</label>
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
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Confirm Password"
                value={confirmpasse}
                onChange={(e) => setConfirmpasse(e.target.value)}
              />
              <label htmlFor="floatingPasswordCustom">
                Confirmation du mot de passe
              </label>
            </Form.Floating>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit" className="float-right">
              Modifier
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSettings;
