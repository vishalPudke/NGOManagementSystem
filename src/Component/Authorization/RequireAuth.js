import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allowedRoles, children }) {
  const { auth } = useAuth();
  console.log("Role :", auth.role);
  console.log("Allowed Roles : ", allowedRoles);

  if (!auth || !auth.role || !allowedRoles.includes(auth.role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default RequireAuth;

// import React from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();
//   console.log("User Roles:", auth?.role);
//   return auth &&
//     auth.role &&
//     auth.role.find(function (role) {
//       console.log("Role ", allowedRoles);
//       return allowedRoles && allowedRoles.includes(role);
//     }) ? (
//     <Outlet />
//   ) : auth ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;
