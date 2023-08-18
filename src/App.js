import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import RequireAuth from "./Component/RequireAuth";
import ContactUs from "./Component/ContactUs";
import Unauthorized from "./Component/Unauthorized";
import Users from "./Component/Users";
const ROLES = {
  Admin: "ADMIN",
  Volunteer: "VOLUNTEER",
};
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<Users />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="user" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
