import React, { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const LOGIN_URL = "/api/v1/auth/authenticate";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.state?.from?.pathname || "/";
  const formRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
    setPasswordError("");
  };

  useEffect(() => {
    formRef.current.reset();

    setErrMsg("");
  }, [user]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(user.email)) {
      setEmailError("Invalid email format.");
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

  const loginAction = async (e) => {
    e.preventDefault();

    try {
      formRef.current.classList.add("was-validated");
      validateEmail();
      validatePassword();

      if (emailError || passwordError) {
        return;
      }

      const response = await axios.post(LOGIN_URL, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const {
        access_token,
        refresh_token,
        role,
        userId,
        firstname,
        lastname,
        imageProfile,
      } = response.data;
      setAuth({
        access_token,
        refresh_token,
        role,
        email: user.email,
        userId,
        firstname,
        lastname,
        imageProfile,
      });

      setUser({
        email: "",
        password: "",
      });

      formRef.current.reset();
      formRef.current.classList.remove("was-validated");

      alert("USER LOGIN SUCCESSFULLY");

      console.log(JSON.stringify(response?.data));

      console.log("Access Token : ", response?.data?.access_token);
      console.log("Role :", response?.data?.role);
      console.log("UserID :", response?.data?.userId);
      console.log("FirstName :", response?.data?.firstname);
      console.log("LastName :", response?.data?.lastname);
      console.log("Refresh Token : ", response?.data?.refresh_token);

      navigate(home);
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/de/07/d8/de07d87e44a4c4e1179b957d2df985af.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section className="login-container">
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form ref={formRef} className="needs-validation" noValidate>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={handleEmailChange}
              value={user.email}
              onBlur={validateEmail}
              required
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordChange}
              value={user.password}
              onBlur={validatePassword}
              required
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>

          <div className="text-center">
            <button
              type="button"
              className="w-100 btn btn-primary btn-lg"
              onClick={loginAction}
            >
              Log In
            </button>
          </div>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to="/registration">Sign Up</Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
