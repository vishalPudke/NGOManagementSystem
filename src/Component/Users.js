import React from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetUsers = async () => {
    try {
      const response = await axiosPrivate.get("/api/v1/demo-controller");
      console.log("Secure API Hit : ", response.data);
    } catch (err) {
      console.error(err);
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return (
    <article>
      <h1>Hello, You did it!</h1>
      <button onClick={handleGetUsers}>Get Users</button>
    </article>
  );
};

export default Users;
