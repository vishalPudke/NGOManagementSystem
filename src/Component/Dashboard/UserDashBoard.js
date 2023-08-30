import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";

function UserDashBoard() {
  const { auth } = useAuth();
  const [user, setAuth] = useState({ ...auth });
  const [userDeleted, setUserDeleted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate();

  async function deleteaccount(id) {
    console.log("user_acc with id " + id + " will be deleted");
    // if (Window.confirm("Confirm Account Delete Request.")) {
    {
      let url = `http://localhost:8888/api/change/delete/user`;

      await axiosPrivate
        .post(url, id, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  // const deleteHandler = async () => {
  //   try {
  //     console.log("Delete userId : ", auth.userId);
  //     const response = await axiosPrivate.post(
  //       "/api/change/delete/user",
  //       auth.userId,
  //       {
  //         headers: {
  //           "content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       swal("User Deleted Successfully");

  //     } else {
  //       swal("Failed to Delete User");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (userDeleted) {
      handleLogoutAndRedirect();
    }
  }, [userDeleted]);

  const handleLogoutAndRedirect = async () => {
    try {
      const response = await axiosPrivate.post("/api/v1/auth/logout");
      console.log("Logout Response:", response.data);
      console.log("Logout Successfully");
      setAuth({});
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const deleteHandler = async () => {
    try {
      console.log("Delete userId: ", auth.userId);
      const response = await axiosPrivate.post(
        "/api/change/delete/user",
        auth.userId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        swal("User Deleted Successfully");
       
      } else {
        swal("Failed to Delete User");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      UserDashBoard
      <button className="btn btn-danger" onClick={deleteHandler}>
        Delete My Account
      </button>
    </div>
  );
}

export default UserDashBoard;
