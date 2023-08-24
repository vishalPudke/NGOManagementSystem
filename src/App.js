import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/Navigation/NavBar";
import Registration from "./Component/Authorization/Registration";
import Login from "./Component/Authorization/Login";
import RequireAuth from "./Component/Authorization/RequireAuth";
import ContactUs from "./Component/MainHome/ContactUs";
import Unauthorized from "./Component/UnAuthorizedError/Unauthorized";
import Users from "./Component/Users";
import HomePage from "./Component/HomePage";
import Logout from "./Component/Authorization/Logout";
import Payment from "./Component/Transaction/Payment";
import useAuth from "./hooks/useAuth";
import Profile from "./Component/Dashboard/Profile";

import Home from "./Component/MainHome/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import NgoRegForm from "./Component/Authorization/NgoRegForm";
import Donate from "./Component/Transaction/Donate";

const ROLES = {
  Admin: "ADMIN",
  Volunteer: "VOLUNTEER",
  Donor: "DONOR",
};
function App() {
  const { auth } = useAuth();
  console.log("App.jS ROLE : ", auth.role);
  const useRole = auth.role;
  return (
    <>
      <NavBar userRole={useRole} />
      <div className="content-container" style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="ngoreg" element={<NgoRegForm />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="contactus" element={<ContactUs />} />

          <Route path="unauthorized" element={<Unauthorized />} />

          <Route path="logout" element={<Logout />} />
          <Route path="user" element={<Users />} />
          <Route path="donate" element={<Donate />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}></Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Donor]} />}
          >
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
