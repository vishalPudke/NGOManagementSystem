import React from "react";
import useAuth from "../hooks/useAuth";
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
