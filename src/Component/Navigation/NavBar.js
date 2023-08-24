// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "./logo.jpg";
// import useAuth from "../../hooks/useAuth";

// function NavBar({ userRole }) {
//   const authState = useAuth();
//   console.log("User Profile Name:", authState.auth.firstname);
//   console.log("NavBar.js : ", userRole);
//   return (
//     <Navbar
//       bg="dark"
//       variant="dark"
//       expand="lg"
//       fixed="top"
//       className="fixed-top"
//       margin="0px"
//       padding="0px"
//     >
//       <Container>
//         <Navbar.Brand
//           as={Link}
//           to="/"
//           className="fw-bold fs-2 text-warning d-flex align-items-center"
//           style={{ padding: "5px 0", marginRight: "5px" }}
//         >
//           <img
//             src={logo}
//             alt="NGO Management Logo"
//             width="60"
//             height="60"
//             className="d-inline-block align-top me-2"
//           />{" "}
//           NGO Management
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               as={Link}
//               to="/registration"
//               className="fs-4 fw-medium text-warning"
//             >
//               Sign Up
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/login"
//               className="fs-4 fw-medium text-warning"
//             >
//               Sign In
//             </Nav.Link>
//             {/* /********************************************* */}
//             {userRole === "ADMIN" && (
//               <Nav.Link
//                 as={Link}
//                 to="/dashboard"
//                 className="fs-4 fw-medium text-warning"
//               >
//                 Dashboard
//               </Nav.Link>
//             )}
//             {/* /************************************************ */}
//             <Nav.Link
//               as={Link}
//               to="/contactus"
//               className="fs-4 fw-medium text-warning"
//             >
//               Contact Us
//             </Nav.Link>
//             {userRole === "ADMIN" && (
//               <Nav.Link
//                 as={Link}
//                 to="/user"
//                 className="fs-4 fw-medium text-warning"
//               >
//                 Demo
//               </Nav.Link>
//             )}
//             {(userRole === "ADMIN" || userRole === "DONER") && (
//               <>
//                 <Navbar.Brand
//                   as={Link}
//                   to="/profile"
//                   className="fw-bold fs-2 text-warning d-flex align-items-center"
//                   style={{ paddingLeft: "15px" }}
//                 >
//                   <img
//                     src={authState.auth.imageProfile}
//                     alt="USER"
//                     width="65"
//                     height="65"
//                     style={{
//                       borderRadius: "50%",
//                       border: "2px solid #fff",
//                       boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
//                       marginRight: "10px",
//                     }}
//                     className="d-inline-block align-top me-2 "
//                   />{" "}
//                 </Navbar.Brand>
//                 <Nav.Link
//                   as={Link}
//                   to="/logout"
//                   className="fs-4 fw-medium text-warning ms-4"
//                 >
//                   Logout
//                 </Nav.Link>
//               </>
//             )}
//             {/* <Nav.Link
//               as={Link}
//               to="/profile"
//               className="fs-4 fw-medium text-warning ms-4"
//             >
//               {auth.firstname}
//             </Nav.Link> */}
//             {/* {authState.isAuthenticated ? (
//               <Nav.Link
//                 as={Link}
//                 to="/profile"
//                 className="fs-4 fw-medium text-warning ms-4"
//               >
//                 {authState.auth.firstname}
//               </Nav.Link>
//             ) : (
//               <Nav.Link
//                 as={Link}
//                 to="/profile"
//                 className="fs-4 fw-medium text-warning ms-4"
//               >
//                 userProfile
//               </Nav.Link>
//             )} */}
//             {/* {authState.isAuthenticated && (
//               <Link to="/profile">
//                 {" "}
//                 <div className="profile-image-container">
//                   <img
//                     src={authState.auth.profileImage || profilePhoto}
//                     alt="Profile"
//                     className="profile-image"
//                   />
//                 </div>
//               </Link>
//             )} */}
//             <Nav.Link
//               as={Link}
//               to="/payment"
//               className="fs-4 fw-medium text-warning"
//             >
//               Donate
//             </Nav.Link>{" "}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import useAuth from "../../hooks/useAuth";

function NavBar({ userRole }) {
  const authState = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-2 text-warning d-flex align-items-left"
        >
          <img
            src={logo}
            alt="NGO Management Logo"
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
          />
          NGO Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/registration"
              className="fs-4 fw-medium text-warning "
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="fs-4 fw-medium text-warning"
            >
              Sign In
            </Nav.Link>
            {userRole === "ADMIN" && (
              <>
                <Nav.Link
                  as={Link}
                  to="/dashboard"
                  className="fs-4 fw-medium text-warning"
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/user"
                  className="fs-4 fw-medium text-warning"
                >
                  Demo
                </Nav.Link>
              </>
            )}
            <Nav.Link
              as={Link}
              to="/contactus"
              className="fs-4 fw-medium text-warning"
            >
              Contact Us
            </Nav.Link>
            {(userRole === "ADMIN" || userRole === "DONER") && (
              <Nav.Link
                as={Link}
                to="/profile"
                className="fs-4 fw-medium text-warning"
              >
                Profile
              </Nav.Link>
            )}
            {(userRole === "ADMIN" || userRole === "DONER") && (
              <Nav.Link
                as={Link}
                to="/logout"
                className="fs-4 fw-medium text-warning"
              >
                Logout
              </Nav.Link>
            )}
            <Nav.Link
              as={Link}
              to="/payment"
              className="fs-4 fw-medium text-warning"
            >
              Donate
            </Nav.Link>{" "}
            <Nav.Link
              as={Link}
              to="/donate"
              className="fs-4 fw-medium text-warning"
            >
              Pay
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
