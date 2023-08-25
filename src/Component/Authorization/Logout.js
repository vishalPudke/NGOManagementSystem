// import React, { useEffect } from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";

// function Logout() {
//   const axiosPrivate = useAxiosPrivate();
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const logoutMethod = async () => {
//       try {
//         const response = await axiosPrivate.post("/api/v1/auth/logout");
//         console.log("Logout Response:", response.data);
//         console.log("Logout SuccessFully");
//       } catch (error) {
//         console.error("Logout Error:", error);
//       } finally {
//         navigate("/login", { state: { from: location }, replace: true });
//       }
//     };

//     logoutMethod();
//   }, [axiosPrivate, navigate, location]);

//   return null;
// }

// export default Logout;

import React from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function Logout() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axiosPrivate.post("/api/v1/auth/logout");
      console.log("Logout Response:", response.data);
      console.log("Logout Successfully");
      setAuth({});
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
