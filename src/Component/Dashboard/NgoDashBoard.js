import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "./NgoDashboard.css";

function NgoDashBoard() {
  const { auth, setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const id = auth.userId;
  let formRef = useRef();
  let formRef2 = useRef();
  const [email, setEmail] = useState("");
  const [nitiregno, setNitiregno] = useState("");
  const [logo, setLogo] = useState("");

  const [name, setName] = useState("");
  const [fow, setFow] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [tagline, setTagline] = useState("");
  const [ddescription, setDdescription] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [aboutusimg, setAboutusImg] = useState("");
  const [homeimg, setHomeImg] = useState("");
  const [extrainfo, setExtraInfo] = useState("");

  const [firstnameError, setFirstnameError] = useState("");
  const [fowError, setFfowError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [ddescriptionError, setdDescriptionError] = useState("");
  const [aboutusError, setAboutusError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [tagError, setTagError] = useState("");
  const [extrainfoError, setExtrainfoError] = useState("");

  const [ngodata, setNgodata] = useState({
    email: "",
    nitiregno: "",
    name: "",
    fow: "",
    description: "",
    phone: "",
    tagline: "",
    ddescription: "",
    aboutus: "",
    extrainfo: "",
    id: id,
  });

  const validateFirstname = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{3,16}$/;
    if (!ngodata.name) {
      setFirstnameError("First name is required.");
    } else if (!firstnameRegex.test(ngodata.name)) {
      setFirstnameError(
        "First name must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validateFOW = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{8,100}$/;
    if (!ngodata.fow) {
      setFfowError("Field of Work is required.");
    } else if (!firstnameRegex.test(ngodata.fow)) {
      setFfowError(
        "Field of work must be 8-30 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validateDescription = () => {
    const descriptionRegex = /^[a-zA-Z0-9_-\s]{5,500}$/;
    if (!ngodata.description) {
      setDescriptionError("Description is required.");
    } else if (!descriptionRegex.test(ngodata.description)) {
      setDescriptionError(
        "Descrition must be 5-100 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validatedDescription = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{5,1000}$/;
    if (!ngodata.ddescription) {
      setdDescriptionError("Required field.");
    } else if (!firstnameRegex.test(ngodata.ddescription)) {
      setdDescriptionError(
        "Must be 3-1000 characters. Only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validateaboutus = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{3,500}$/;
    if (!ngodata.aboutus) {
      setAboutusError("Required.");
    } else if (!firstnameRegex.test(ngodata.aboutus)) {
      setAboutusError(
        "3-500 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };
  const validatePhone = () => {
    const firstnameRegex = /^[0-9]{10}$/;
    if (!ngodata.phone) {
      setPhoneError("Required.");
    } else if (!firstnameRegex.test(ngodata.phone)) {
      setPhoneError("enter 10 digit no.");
    }
  };
  const validatetag = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{3,100}$/;
    if (!ngodata.tagline) {
      setTagError("Required.");
    } else if (!firstnameRegex.test(ngodata.tagline)) {
      setTagError("must be in 3-100 characters only");
    }
  };
  const validateExtrainfo = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-\s]{3,300}$/;
    if (!ngodata.extrainfo) {
      setExtrainfoError("Required.");
    } else if (!firstnameRegex.test(ngodata.extrainfo)) {
      setExtrainfoError("must be in 3-300 characters only");
    }
  };

  useEffect(() => {
    getNgoFromId();
  }, []);

  let getNgoFromId = async () => {
    let url = `http://localhost:9191/image/ngowhole?id=${id}`;
    await axios
      .post(url)
      .then((response) => {
        console.log(response.data);
        setNgodata({ ...response.data, logo: "", aboutusimg: "", homeimg: "" });
        setLogo(response.data.logo);
      })
      .catch((err) => console.log(err));
  };

  const showToastMessage = (message) => {
    if (message === "success") {
      toast.success("Data Saved", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Unable to save! Try again...", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  function sendData(event) {
    event.preventDefault();

    formRef.current.classList.add("was-validated");
    validateFOW();
    validateExtrainfo();
    validatePhone();
    validateaboutus();
    validateFirstname();
    validateDescription();
    validatetag();
    validatedDescription();

    formRef2.current.classList.add("was-validated");
    validateFOW();
    validateExtrainfo();
    validatePhone();
    validateaboutus();
    validateFirstname();
    validateDescription();
    validatetag();
    validatedDescription();

    const formStatus = formRef.current.checkValidity();
    const formStatus2 = formRef2.current.checkValidity();
    console.log(formStatus);
    console.log(formStatus2);
    if (!formStatus || !formStatus2) {
      console.log("inside if");
      return;
    }

    let url = "http://localhost:9191/image/ngodataforregistartion";
    let formData = new FormData();
    formData.append("abtusimg", aboutusimg);
    formData.append("homeimg", homeimg);
    formData.append("ngodata", JSON.stringify(ngodata));
    console.log(JSON.stringify(ngodata));
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log(response.data);
          showToastMessage("success");
        } else {
          showToastMessage("error");
        }
      })
      .catch(() => showToastMessage(""));
  }
  let navigate = useNavigate();
  async function deleteaccount(id) {
    if (window.confirm("Do you really want to delete your account?")) {
      let url = `http://localhost:9191/image/delete?id=${id}`;
      await axios
        .get(url)
        .then((response) => {
          navigate("/");
        })
        .catch(() => showToastMessage("error"));
    }
  }

  const deleteNgoHandler = async () => {
    try {
      console.log("Delete USerId : ", auth.userId);
      const response = await axiosPrivate.post(
        "/image/delete/ngo",
        auth.userId,
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        swal("User Deleted Successfully");
        navigate("/");
      } else {
        swal("Failed to Delete User");
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <div
          className="featured-section overlay-color-2"
          style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* <img
                src="images/bg_3.jpg"
                alt="Image placeholder"
                className="img-fluid"
              /> */}

                <img
                  src={"data:image/jpeg;base64," + `${logo}`}
                  alt="Ngo Image"
                  className=" img-thumbnail"
                />
              </div>
              <div className="col-md-6 pl-md-5">
                <span
                  className="featured-text d-block mb-3"
                  // value={ngodata.name}
                >
                  <h2
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                      fontWeight: "bolder",
                    }}
                  >
                    {" "}
                    {ngodata.name}{" "}
                  </h2>
                </span>

                <h2>Thank you for collaborating wtih Helping Hands❤️</h2>
                <p>
                  <h4 className="mb-6 " style={{ color: "white" }}>
                    "Empowering compassion through Helping Hands: Together, we
                    touch lives, inspire change, and create a brighter
                    tomorrow."
                  </h4>
                </p>

                <span className="fund-raised d-block mb-5">
                  We have raised $100,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 text-dark bg-opacity-25">
        {/* <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
          }}
        >
          <img
            src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv"
            style={{
              position: "relative",
              top: 0,
              left: 0,
              border: "1px solid #000000",
              opacity: 0.7,
            }}
          />
          <img
            src={"data:image/jpeg;base64," + `${logo}`}
            alt=""
            style={{
              position: "absolute",
              top: "75%",
              left: "35%",
              border: "1px solid #000000",
              marginRight: "10px",
              width: "30vw",
            }}
            className="rounded-circle"
          />
        </div> */}
        <Container className="mt-5">
          <Row
            className="justify-content-center align-items-center form-container"
            // style={{ backgroundColor: "yellowgreen" }}
          >
            <Col
              sm={8}
              md={6}
              lg={5}
              className="form-column form-column-left"
              // style={{ backgroundColor: "yellow-200" }}
            >
              <Form
                className="form-floating needs-validation"
                ref={formRef}
                noValidate
              >
                <Form.Group controlId="formfow" className="mb-2">
                  <Form.Label>
                    <strong>Field of Work</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter NGO's Field of Work"
                    className={`form-control ${fowError ? "is-invalid" : ""}`}
                    onBlur={validateFOW}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, fow: e.target.value });
                      setFfowError("");
                    }}
                    value={ngodata.fow}
                  />
                  {fowError && (
                    <div className="invalid-feedback">{fowError}</div>
                  )}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-2">
                  <Form.Label>
                    <strong>Email address</strong>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    disabled="isReadOnly"
                    placeholder="Enter email"
                    value={ngodata.email}
                  />
                </Form.Group>

                <Form.Group controlId="form" className="mb-2">
                  <Form.Label>
                    <strong>About Orgnization</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Write your oraganizations About us."
                    as="textarea"
                    rows="4"
                    required
                    className={`no-border, form-control ${
                      aboutusError ? "is-invalid" : ""
                    }`}
                    onBlur={validateaboutus}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, aboutus: e.target.value });
                      setAboutusError("");
                    }}
                    name="text"
                    value={ngodata.aboutus}
                    style={{
                      border: "solid 1px lightgrey",
                      boxShadow: "none",
                      width: "100%",
                      resize: "none",
                    }}
                  />
                  {aboutusError && (
                    <div className="invalid-feedback">{aboutusError}</div>
                  )}
                </Form.Group>
                <Form.Group controlId="formRegno" className="mb-2">
                  <Form.Label>
                    <strong>Contact Number of Org</strong>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    required
                    placeholder="Enter phone number"
                    className={`form-control ${phoneError ? "is-invalid" : ""}`}
                    onBlur={validatePhone}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, phone: e.target.value });
                      setPhoneError("");
                    }}
                    value={ngodata.phone}
                  />
                  {phoneError && (
                    <div className="invalid-feedback">{phoneError}</div>
                  )}
                </Form.Group>

                <Form.Group controlId="formabtusimg" className="mb-2">
                  <Form.Label>
                    <strong>Aboutus Image</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="file"
                    multipart
                    accept="image/png"
                    onChange={(e) => setAboutusImg(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group controlId="form" className="mb-2">
                  <Form.Label>
                    <strong>Extra information</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Write Extra information."
                    as="textarea"
                    rows="4"
                    required
                    className={`no-border, form-control ${
                      extrainfoError ? "is-invalid" : ""
                    }`}
                    onBlur={validateExtrainfo}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, extrainfo: e.target.value });
                      setExtrainfoError("");
                    }}
                    name="text"
                    value={ngodata.extrainfo}
                    style={{
                      border: "solid 1px lightgrey",
                      boxShadow: "none",
                      width: "100%",
                      resize: "none",
                    }}
                  />
                  {extrainfoError && (
                    <div className="invalid-feedback">{extrainfoError}</div>
                  )}
                </Form.Group>
                {/* <ToastContainer /> */}
              </Form>
            </Col>
            <Col sm={8} md={6} lg={5} className="form-column form-column-right">
              <Form
                className="form-floating needs-validation"
                ref={formRef2}
                noValidate
              >
                <Form.Group controlId="formName" className="mb-2">
                  <Form.Label for="floatingInputInvalid">
                    <strong>NGO Name</strong>
                  </Form.Label>
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
                      setNgodata({ ...ngodata, name: e.target.value });
                    }}
                    value={ngodata.name}
                  />
                  {firstnameError && (
                    <div className="invalid-feedback">{firstnameError}</div>
                  )}
                </Form.Group>

                <Form.Group controlId="formDesc" className="mb-2">
                  <Form.Label>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Write your oraganizations vison and mission."
                    as="textarea"
                    rows="4"
                    className={`no-border, form-control ${
                      descriptionError ? "is-invalid" : ""
                    }`}
                    onBlur={validateDescription}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, description: e.target.value });
                      setDescriptionError("");
                    }}
                    name="text"
                    value={ngodata.description}
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
                  <Form.Label>
                    <strong>Registartion Number</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter DARPAN Reg.No"
                    disabled="isReadOnly"
                    value={ngodata.nitiregno}
                  />
                </Form.Group>

                <Form.Group controlId="formtagline" className="mb-2">
                  <Form.Label>
                    <strong>Tag line/ Vision</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter Tag line"
                    className={`form-control ${tagError ? "is-invalid" : ""}`}
                    onBlur={validatetag}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, tagline: e.target.value });
                      setTagError("");
                    }}
                    value={ngodata.tagline}
                  />
                  {tagError && (
                    <div className="invalid-feedback">{tagError}</div>
                  )}
                </Form.Group>
                <Form.Group controlId="formddes" className="mb-2">
                  <Form.Label>
                    <strong>Detailed Description</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    required
                    placeholder="Enter Detailed Description"
                    className={`no-border, form-control ${
                      ddescriptionError ? "is-invalid" : ""
                    }`}
                    onBlur={validatedDescription}
                    onChange={(e) => {
                      setNgodata({ ...ngodata, ddescription: e.target.value });
                      setdDescriptionError("");
                    }}
                    value={ngodata.ddescription}
                    name="text"
                    style={{
                      border: "solid 1px lightgrey",
                      boxShadow: "none",
                      width: "100%",
                      resize: "none",
                    }}
                  />
                  {ddescriptionError && (
                    <div className="invalid-feedback">{ddescriptionError}</div>
                  )}
                </Form.Group>

                <Form.Group controlId="formhomeimg" className="mb-2">
                  <Form.Label>
                    <strong>HomePage Image</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="file"
                    multipart
                    accept="image/png"
                    onChange={(e) => setHomeImg(e.target.files[0])}
                  />
                </Form.Group>
                <ToastContainer />
              </Form>
            </Col>
            <div className="text-center">
              <br></br>
              <button className="btn-success " type="submit" onClick={sendData}>
                <b>Update Details</b>
              </button>
            </div>
          </Row>
        </Container>
        <div className="container-fluid">
          <button className="btn btn-danger" onClick={deleteNgoHandler}>
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default NgoDashBoard;
