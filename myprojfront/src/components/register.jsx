import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [tel, setTel] = useState("");
  const [motpasse, setMotpasse] = useState("");
  const [confirmpasse, setConfirmpasse] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setFile(newImage);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "safaProject");
      formData.append("cloud_name", "dq0o9vgu0");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dq0o9vgu0/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      axios
        .post("http://localhost:3000/api/users/register", {
          prenom,
          nom,
          email,
          DateNaiss: date,
          tel,
          password: motpasse,
          liencv: data.url,
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => alert(err.message));
    } catch (e) {
      alert(e.message);
    }
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
                  placeholder="Prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Prenom</label>
              </Form.Floating>
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
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
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
                <Form.Control
                  type="file"
                  onChange={handleImage}
                  accept=".pdf"
                />
              </Form.Group>

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

export default Register;
