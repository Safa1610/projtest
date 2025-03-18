import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const HorizontalFooter = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container className="py-4">
        <Row className="align-items-center">
          {/* Newsletter */}
          <Col md={6} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-3 fs-4" />
              <Form className="w-100">
                <Form.Group controlId="formNewsletter">
                  <div className="input-group">
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email pour les alertes"
                      className="rounded-0"
                    />
                    <Button
                      variant="primary"
                      className="rounded-0"
                      type="submit"
                    >
                      S'abonner
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* Icônes sociales */}
          <Col md={6}>
            <div className="d-flex justify-content-md-end align-items-center">
              <span className="me-3">Nous suivre :</span>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="text-light hover-primary text-decoration-none"
                  title="LinkedIn"
                >
                  <FaLinkedin className="fs-4" />
                </a>
                <a
                  href="#"
                  className="text-light hover-primary text-decoration-none"
                  title="Twitter"
                >
                  <FaTwitter className="fs-4" />
                </a>
                <a
                  href="#"
                  className="text-light hover-primary text-decoration-none"
                  title="Facebook"
                >
                  <FaFacebook className="fs-4" />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Ligne de séparation */}
        <hr className="my-4 opacity-25" />

        {/* Liens légaux */}
        <Row>
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
              <a href="/" className="text-light text-decoration-none">
                Acceuil
              </a>
              <a href="/offres" className="text-light text-decoration-none">
                Offre d'emploi
              </a>
              <a href="/contact" className="text-light text-decoration-none">
                Contact
              </a>
            </div>
            <div className="text-white">
              © {new Date().getFullYear()} TalentTrek - Tous droits réservés
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HorizontalFooter;
