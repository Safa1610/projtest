import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ChangeCV = () => {
  const [file, setFile] = useState("");

  const handleImage = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setFile(newImage);
    }
  };
  const handleSubmit = async (e) => {
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
      .put(
        "http://localhost:3000/api/users/" +
          jwtDecode(localStorage.getItem("token")).id,
        {
          liencv: data.url,
        }
      )
      .then((res) => {
        alert("updated");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text">
                <h3>Change CV</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5} className="lightgrey p-4 my-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handleImage}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Se connecter
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangeCV;
