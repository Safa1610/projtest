import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarTop() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, [token, role]);
  return (
    <Navbar expand="lg" className="navbartop">
      <Container fluid>
        <Navbar.Brand href="/">TalentTrek</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Acceuil</Nav.Link>

            {role === "user" && (
              <>
                <Nav.Link href="/contact">Contact</Nav.Link>{" "}
                <Nav.Link href="/offres">Offre d'emploi</Nav.Link>
                <Nav.Link href="/applications">My applications</Nav.Link>
                <Nav.Link href="/changeCV">Change CV</Nav.Link>
              </>
            )}
            {role === "company" && (
              <>
                <Nav.Link href="/add_job">Add job</Nav.Link>
                <Nav.Link href="/myjobs">My jobs</Nav.Link>
              </>
            )}
          </Nav>
          {token ? (
            <>
              <Form className="d-flex" style={{ alignItems: "center" }}>
                <p style={{ margin: "0 10px" }}>Hello {role}</p>
                <Button
                  style={{
                    backgroundColor: "#00D363",
                    borderColor: "#32CD32",
                    color: "#ffffff",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "#ffffff" }}
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </a>
                </Button>
              </Form>
            </>
          ) : (
            <>
              <a
                className="d-flex"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  marginRight: "10px",
                }}
                href="/login"
              >
                Se Connecter
              </a>
              <Form className="d-flex">
                <Button
                  style={{
                    backgroundColor: "#00D363",
                    borderColor: "#32CD32",
                    color: "#ffffff",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "#ffffff" }}
                    href="/register"
                  >
                    S'inscrire
                  </a>
                </Button>
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
