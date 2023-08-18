import { useRef, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Styles from "./Style.module.css";
function Registration() {
  let formRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactnumberError, setContactnumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  let navigate = useNavigate();
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
  });

  const handleFirstnameChange = (e) => {
    const newUser = { ...user, firstname: e.target.value };
    setUser(newUser);
    setFirstnameError("");
  };

  const handleLastnameChange = (e) => {
    const newUser = { ...user, lastname: e.target.value };
    setUser(newUser);
    setLastnameError("");
  };

  const handleEmailChange = (e) => {
    const newUser = { ...user, email: e.target.value };
    setUser(newUser);
    setEmailError("");
  };

  const handleContactNumberChange = (e) => {
    const newUser = { ...user, contactNumber: e.target.value };
    setUser(newUser);
    setContactnumberError("");
  };

  const handlePasswordChange = (e) => {
    const newUser = { ...user, password: e.target.value };
    setUser(newUser);
    setPasswordError("");
  };

  const handleAddressChange = (e) => {
    const newUser = { ...user, address: e.target.value };
    setUser(newUser);
    setAddressError("");
  };

  const validateFirstname = () => {
    const firstnameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!user.firstname) {
      setFirstnameError("First name is required.");
    } else if (!firstnameRegex.test(user.firstname)) {
      setFirstnameError(
        "First name must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };

  const validateLastname = () => {
    const lastnameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!user.lastname) {
      setLastnameError("Last name is required.");
    } else if (!lastnameRegex.test(user.lastname)) {
      setLastnameError(
        "Last name must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens."
      );
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!user.password) {
      setPasswordError("Password is required.");
    } else if (!passwordRegex.test(user.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(user.email)) {
      setEmailError("Invalid email format.");
    }
  };

  const validateContactNumber = () => {
    const mobileRegex = /^\d{10}$/;
    if (!user.contactNumber) {
      setContactnumberError("Contact number is required.");
    } else if (!mobileRegex.test(user.contactNumber)) {
      setContactnumberError("Invalid contact number. It should be 10 digits.");
    }
  };
  const validateAddress = () => {
    if (!user.address) {
      setAddressError("Address is required");
    }
  };
  const registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      const formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        validateFirstname();
        validateLastname();
        validateEmail();
        validateContactNumber();
        validatePassword();
        validateAddress();
        return;
      }

      const url = "http://localhost:8888/api/v1/auth/register";

      const newUser = { ...user };
      console.log(newUser);

      axios.post(url, newUser).then(() => {
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          contactNumber: "",
          password: "",
          address: "",
        });

        formRef.current.classList.remove("was-validated");
        alert("USER REGISTERED SUCCESSFULLY");
        setIsSuccess(true);
        console.log(newUser);
        navigate("/", { replace: true });
      });
    } catch (err) {
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Navbar.Brand href="#home">NGO Management System</Navbar.Brand>
        </Navbar>
      </header>
      <div>
      <section
        className={`container mt-1 ${Styles.welcome_section}`}
        style={{ backgroundColor: "rgb(149, 233, 136)" }}
      >
        <h1>Welcome !!!</h1>
        <p>NGO Management</p>
      </section>
      {/* Registration Form Section */}
      <div
        className={`registration_page ${isHovered ? "hovered" : ""}`}
        style={{
          background: "linear-gradient(45deg, #00B4DB, #0083B0)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <div className={Styles.registration_form}>
            <h2 className={Styles.registration_title}>Registration Form</h2>
            <form ref={formRef} className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`form-control ${
                    firstnameError ? "is-invalid" : ""
                  }`}
                  value={user.firstname}
                  onChange={handleFirstnameChange}
                  onBlur={validateFirstname}
                  required
                />
                {firstnameError && (
                  <div className="invalid-feedback">{firstnameError}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`form-control ${
                    lastnameError ? "is-invalid" : ""
                  }`}
                  value={user.lastname}
                  onChange={handleLastnameChange}
                  onBlur={validateLastname}
                  required
                />
                {lastnameError && (
                  <div className="invalid-feedback">{lastnameError}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  className={`form-control ${
                    contactnumberError ? "is-invalid" : ""
                  }`}
                  value={user.contactNumber}
                  onChange={handleContactNumberChange}
                  onBlur={validateContactNumber}
                  required
                />
                {contactnumberError && (
                  <div className="invalid-feedback">{contactnumberError}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form-control ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  value={user.password}
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  required
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  value={user.email}
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  address
                </label>
                <input
                  type="text"
                  id="address"
                  className={`form-control ${addressError ? "is-invalid" : ""}`}
                  value={user.address}
                  onChange={handleAddressChange}
                  onBlur={validateAddress}
                  required
                />
                {addressError && (
                  <div className="invalid-feedback">{addressError}</div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="w-100 btn btn-primary btn-lg"
                  onClick={registerAction}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
