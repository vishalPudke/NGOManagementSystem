import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import swal from "sweetalert";

function NgoRegForm() {
  const axiosPrivate = useAxiosPrivate();
  let formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fow, setFow] = useState("");
  const [description, setDescription] = useState("");
  const [nitiregno, setNitiregno] = useState("");
  const [logo, setLogo] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [fowError, setFfowError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ngo, setNgo] = useState({
    name: "",
    fow: "",
    description: "",
    nitiregno: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const validateFirstname = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{3,16}$/;
    if (!ngo.name) {
      setFirstnameError("First name is required.");
    } else if (!firstnameRegex.test(ngo.name)) {
      setFirstnameError(
        "First name must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };

  const validateFOW = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{8,30}$/;
    if (!ngo.fow) {
      setFfowError("Field of Work is required.");
    } else if (!firstnameRegex.test(ngo.fow)) {
      setFfowError(
        "Field of work must be 8-30 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validateDescription = () => {
    const descriptionRegex = /^[a-zA-Z0-9_-\s]{5,100}$/;
    if (!ngo.description) {
      setDescriptionError("Description is required.");
    } else if (!descriptionRegex.test(ngo.description)) {
      setDescriptionError(
        "Descrition must be 5-100 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validateRegistrationNumber = () => {
    const registrationNumberRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!ngo.nitiregno) {
      setRegistrationNumberError("First name is required.");
    } else if (!registrationNumberRegex.test(ngo.nitiregno)) {
      setRegistrationNumberError(
        "First name must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!ngo.password) {
      setPasswordError("Password is required.");
    } else if (!passwordRegex.test(ngo.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!ngo.email) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(ngo.email)) {
      setEmailError("Invalid email format.");
    }
  };

  useEffect(() => {
    setNgo({
      name: name,
      fow: fow,
      description: description,
      nitiregno: nitiregno,
      email: email,
      password: password,
    });
  }, []);

  const showToastMessage = (message) => {
    if (message === "success") {
      toast.success("NGO registered sucessfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Failed to Register! Try again...", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  function sendData(event) {
    console.log(ngo);
    console.log(logo);

    event.preventDefault();
    formRef.current.classList.add("was-validated");
    validateFirstname();
    validateFOW();
    validateDescription();
    validateRegistrationNumber();
    validateEmail();
    validatePassword();

    const formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    let url = "http://localhost:8888/api/v1/auth/register/ngologo";
    // let url = "http://localhost:9191/image/ngologo";
    let formData = new FormData();
    formData.append("logo", logo);
    formData.append("ngo", JSON.stringify(ngo));
    console.log(JSON.stringify(ngo));
    console.log(logo);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.role !== "NGO") {
          swal(
            "Email/ Niti Aayog registration no",
            "already registered!",
            "Error ❌"
          );
        } else if (response.status === 200 && response.data.role === "NGO") {
          console.log(response.data);
          swal("Registered!", "Success");
          setNgo({
            name: "",
            fow: "",
            description: "",
            nitiregno: "",
            email: "",
            password: "",
          });
          setLogo("");
          navigate("/login", { replace: true });
        } else {
          showToastMessage("error");
        }
      })
      .catch(() => showToastMessage(""));
  }
  //
  return (
    <div>
      {/* <Navbar /> */}

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm={8} md={6} lg={4}>
            <h3 className="mb-4 text-center mt-5">
              Register Your NGO with Helping Hands
            </h3>
            <h6 style={{ color: "red" }}>
              NOTE* to register, NGO should be registered with Government of
              India's Niti Aayog DERPAN
            </h6>

            <Form ref={formRef} className="needs-validation" noValidate>
              <Form.Group controlId="formName" className="mb-2">
                <Form.Label>NGO Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter NGO's Name"
                  className={`form-control ${
                    firstnameError ? "is-invalid" : ""
                  }`}
                  onBlur={validateFirstname}
                  //onChange={handlenameChange}
                  onChange={(e) => {
                    setFirstnameError("");
                    setNgo({ ...ngo, name: e.target.value });
                  }}
                  value={ngo.name}
                />
                {firstnameError && (
                  <div className="invalid-feedback">{firstnameError}</div>
                )}
              </Form.Group>
              <Form.Group controlId="formFow" className="mb-2">
                <Form.Label>Field of Work</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter NGO's Field of Work"
                  className={`form-control ${fowError ? "is-invalid" : ""}`}
                  onBlur={validateFOW}
                  onChange={(e) => {
                    setNgo({ ...ngo, fow: e.target.value });
                    setFfowError("");
                  }}
                  value={ngo.fow}
                />
                {fowError && <div className="invalid-feedback">{fowError}</div>}
              </Form.Group>
              <Form.Group controlId="formDesc" className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Write your oraganizations vison and mission."
                  as="textarea"
                  rows="4"
                  className={`no-border, form-control ${
                    descriptionError ? "is-invalid" : ""
                  }`}
                  onBlur={validateDescription}
                  onChange={(e) => {
                    setNgo({ ...ngo, description: e.target.value });
                    setDescriptionError("");
                  }}
                  name="text"
                  value={ngo.description}
                  style={{
                    border: "solid 1px lightgrey",
                    boxShadow: "none",
                    width: "100%",
                    resize: "none",
                  }}
                />
                {descriptionError && (
                  <div className="invalid-feedback">{descriptionError}</div>
                )}
              </Form.Group>
              <Form.Group controlId="formRegno" className="mb-2">
                <Form.Label>Registartion Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter DARPAN Reg.No"
                  className={`form-control ${
                    registrationNumberError ? "is-invalid" : ""
                  }`}
                  onBlur={validateRegistrationNumber}
                  onChange={(e) => {
                    setRegistrationNumberError("");
                    setNgo({ ...ngo, nitiregno: e.target.value });
                  }}
                  value={ngo.nitiregno}
                />
                {registrationNumberError && (
                  <div className="invaid-feedback">
                    {registrationNumberError}
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="formlogo" className="mb-2">
                <Form.Label>LOGO</Form.Label>
                <Form.Control
                  required
                  type="file"
                  multipart
                  accept="image/png"
                  onChange={(e) => {
                    setLogo(e.target.files[0]);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter email"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  onBlur={validateEmail}
                  onChange={(e) => {
                    setEmailError("");
                    setNgo({ ...ngo, email: e.target.value });
                  }}
                  value={ngo.email}
                />
                {emailError && (
                  <div className="validate-feedback">{emailError}</div>
                )}
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&%^*]).{8,}"
                  required
                  placeholder="Password"
                  className={`form-control${
                    passwordError ? "is-invalid" : " "
                  }`}
                  onBlur={validatePassword}
                  onChange={(e) => {
                    setPasswordError("");
                    setNgo({ ...ngo, password: e.target.value });
                  }}
                  value={ngo.password}
                />
                {passwordError && (
                  <div className="validate-feedback">{passwordError}</div>
                )}
              </Form.Group>
              <div className="text-center">
                <br></br>
                <button
                  className="btn btn-warning"
                  type="submit"
                  onClick={sendData}
                >
                  Register
                </button>
              </div>
              <ToastContainer />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NgoRegForm;
