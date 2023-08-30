import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar({ userRole }) {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  console.log("NAVBAR :", auth.firstname);

  return (
    <Navbar
      bg="#4682A9"
      variant="#4682A9"
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#1D5B79", borderRadius: "1%" }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="fw-bold fs-2 text-warning d-flex align-items-left navbtn justify-content-end"
      >
        <img
          src="threelogo-removebg-preview.png"
          alt="NGO Management Logo"
          width="60"
          height="60"
          className="d-inline-block align-top me-2 navbtn"
        />
        Helping Hands
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav "
        style={{
          border: "3px solid yellowgreen",
          borderBlockStyle: "groove",
        }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pe-5 ">
          {userRole === undefined && (
            <Nav.Link
              as={Link}
              to="/registration"
              className="fs-4 fw-medium text-warning navbtn pe-5"
            >
              Register
            </Nav.Link>
          )}
          {userRole === undefined && (
            <Nav.Link
              as={Link}
              to="/login"
              className="fs-4 fw-medium text-warning navbtn  pe-5"
            >
              Login
            </Nav.Link>
          )}
          <Nav.Link
            as={Link}
            to="/abtus"
            className="fs-4 fw-medium text-warning navbtn  pe-5"
          >
            AboutUs
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/paymentpage"
            className="fs-4 fw-medium text-warning navbtn  pe-5"
          >
            Donate
          </Nav.Link>{" "}
          {userRole === "ADMIN" && (
            <>
              <Nav.Link
                as={Link}
                to="/dashboard"
                className="fs-4 fw-medium text-warning navbtn  pe-5"
              >
                Dashboard
              </Nav.Link>
            </>
          )}
          {userRole === "DONER" && (
            <>
              <Nav.Link
                as={Link}
                to="/dashboarddoner"
                className="fs-4 fw-medium text-warning navbtn  pe-5"
              >
                Dashboard
              </Nav.Link>
            </>
          )}
          {userRole === "NGO" && (
            <>
              <Nav.Link
                as={Link}
                to="/dashboardngo"
                className="fs-4 fw-medium text-warning navbtn  pe-5"
              >
                Dashboard
              </Nav.Link>
            </>
          )}
          {(userRole === "ADMIN" || userRole === "DONER") && (
            <>
              <Nav.Link
                as={Link}
                to="/profile"
                className="fs-4 fw-medium text-warning navbtn  pe-5"
              >
                Profile
              </Nav.Link>
            </>
          )}
          {(userRole === "ADMIN" ||
            userRole === "DONER" ||
            userRole === "NGO") && (
            <Nav.Link
              as={Link}
              // to="/logout"
              onClick={async () => {
                try {
                  const response = await axiosPrivate.post(
                    "/api/v1/auth/logout"
                  );
                  console.log("Logout Response:", response.data);
                  console.log("Logout Successfully");
                  setAuth({});
                } catch (error) {
                  console.error("Logout Error:", error);
                } finally {
                  navigate("/login", {
                    state: { from: location },
                    replace: true,
                  });
                }
              }}
              className="fs-4 fw-medium text-warning navbtn  pe-5"
            >
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
