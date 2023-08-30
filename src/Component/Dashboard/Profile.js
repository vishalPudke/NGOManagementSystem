import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";
import axios from "axios";

function ProfileData() {
  const axiosPrivate = useAxiosPrivate();

  const { auth, setAuth } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [fileDataURL, setFileDataURL] = useState(
    "data:image/jpeg;base64," + auth.imageProfile
  );
  const [editedUser, setEditedUser] = useState({ ...auth });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setEditedUser((prevState) => ({
  //       ...prevState,
  //       imageProfile: URL.createObjectURL(file),
  //     }));
  //     setFileDataURL(URL.createObjectURL(file));
  //   }
  // };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      setFileDataURL(URL.createObjectURL(file));
      // var reader = new FileReader();
      // reader.onload = function (e) {
      //   let map = e.target.result;
      setEditedUser((prevState) => ({
        ...prevState,
        imageProfile: JSON.stringify(bytes),
      }));
      // };
      // reader.readAsBinaryString(file);
      console.log(typeof fileDataURL);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileUpdateClick = async () => {
    try {
      // let url = "http://localhost:8888/api/change/image/profile";
      let url = "http://localhost:8888/api/change/image";
      // let formData = new FormData();
      // const vauser = { ...editedUser, imageProfile: "" };
      // formData.append("user", JSON.stringify(editedUser));
      setEditedUser((prevState) => ({
        ...prevState,
        imageProfile: "",
      }));
      console.log(editedUser);
      // formData.append("imageProfile", editedUser.imageProfile);
      const response = await axios.post(url, editedUser, {
        headers: {
          // Authorization: axios.defaults.headers.common["Authorization"],
          // withCredentials: true,
        },
      });

      if (response.status === 200) {
        const updatedAuth = {
          ...auth,
          imageProfile: editedUser.imageProfile,
        };
        setAuth(updatedAuth);
        toast.success("Profile updated successfully");
        setIsEditing(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container justify-content-center">
      <div className="profile-container">
        <div className="profile-card justify-content-center">
          <img
            src={fileDataURL}
            style={{ width: "10rem" }}
            className="rounded-circle"
            alt="Avatar"
          />

          {/* <div className="image-input">
        {isEditing && (
          <>
            <label htmlFor="imageProfile">Profile Image:</label>
            <input
              type="file"
              id="imageProfile"
              name="imageProfile"
              accept="image/*"
              onChange={handleImageChange}
            />
          </>
        )}
      </div> */}

          <div className="profile-content">
            {isEditing ? (
              <div className="edit-profile">
                <div className="form-group">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control w-100"
                    value={editedUser.firstname}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form-control w-100"
                    value={editedUser.lastname}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control w-100"
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    className="form-control w-100"
                    value={editedUser.contactNumber}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control w-100"
                    value={editedUser.address}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="edit-button save-button"
                  onClick={handleProfileUpdateClick}
                >
                  Save Profile
                </button>
              </div>
            ) : (
              <div>
                <div className="profile-details justify-contents-center">
                  <h1>
                    {editedUser.firstname} {editedUser.lastname}
                  </h1>

                  <p>
                    <strong>Email:</strong> {editedUser.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {editedUser.role}
                  </p>
                  <p>
                    <strong>Contact Number:</strong> {editedUser.contactNumber}
                  </p>
                  <p>
                    <strong>Address:</strong> {editedUser.address}
                  </p>
                </div>
                <div className="profile-buttons">
                  <button
                    className="edit-button edit-profile-button"
                    onClick={handleEditClick}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ProfileData;
