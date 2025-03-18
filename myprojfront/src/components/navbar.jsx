import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/TalentTrekLogo1.png";

//import { SearchHeartFill } from "react-bootstrap-icons";
//import { SearchHeart } from "react-bootstrap-icons";

function NavbarTop() {
  const token = sessionStorage.getItem("token");
  return (
    <Navbar expand="lg" className="navbartop">
      <Container fluid>
        {/* <img src={Logo} alt="Logo" width="40" height="40" /> */}
        <Navbar.Brand href="#">TalentTrek</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Acceuil</Nav.Link>
            <Nav.Link href="/offres">Offre d'emploi</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {token ? (
            <p>Hello user</p>
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
