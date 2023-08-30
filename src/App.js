import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/Navigation/NavBar";
import Registration from "./Component/Authorization/Registration";
import Login from "./Component/Authorization/Login";
import RequireAuth from "./Component/Authorization/RequireAuth";
import ContactUs from "./Component/MainHome/ContactUs";
import Unauthorized from "./Component/UnAuthorizedError/Unauthorized";

import Logout from "./Component/Authorization/Logout";
import Payment from "./Component/Transaction/Payment";
import useAuth from "./Component/hooks/useAuth";
import Profile from "./Component/Dashboard/Profile";
import Home from "./Component/MainHome/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import NgoRegForm from "./Component/Authorization/NgoRegForm";
import NgoDashBoard from "./Component/Dashboard/NgoDashBoard";
import NgoHomePage from "./Component/MainHome/NgoHomePage";
import UserDashBoard from "./Component/Dashboard/UserDashBoard";
import About from "./Component/MainHome/About";
import PaymentPage from "./Component/MainHome/components/PaymentPage";

const ROLES = {
  Admin: "ADMIN",
  Volunteer: "VOLUNTEER",
  Donor: "DONER",
  Ngo: "NGO",
};
function App() {
  const { auth } = useAuth();
  console.log("App.jS ROLE : ", auth.role);
  const useRole = auth.role;
  return (
    <>
      <NavBar userRole={useRole} />
      <div className="content-container" style={{ paddingTop: "93px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ngohomepage" element={<NgoHomePage />} />
          <Route path="ngoreg" element={<NgoRegForm />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboarddoner" element={<UserDashBoard />} />
          <Route path="/dashboardngo" element={<NgoDashBoard />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="/abtus" element={<About />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route path="logout" element={<Logout />} />

          <Route path="ngodashboard" element={<NgoDashBoard />} />
          <Route path="userdashboard" element={<NgoDashBoard />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}></Route>

          <Route
            element={
              <RequireAuth
                allowedRoles={[ROLES.Admin, ROLES.Donor, ROLES.Ngo]}
              />
            }
          >
            <Route path="paymentpage" element={<PaymentPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboarddoner" element={<UserDashBoard />} />
            <Route path="/dashboardngo" element={<NgoDashBoard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
