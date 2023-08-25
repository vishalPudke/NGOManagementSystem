import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import profilePhoto from "../images/Photo-Vishal.jpg";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";

function Profile() {
  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useAuth();
  const [image, setImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    ...auth,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleProfileUpdateClick = async () => {
    try {
      let url = "http://localhost:8888/api/change/image";
      let formData = new FormData();
      formData.append("User", JSON.stringify(editedUser));
      formData.append("imageProfile", image);

      const updatedAuth = { ...auth, imageProfile: editedUser.imageProfile };
      setAuth(updatedAuth);

      const response = await axiosPrivate.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
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
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src={"data:image/jpeg;base64," + `${editedUser.imageProfile}`}
            alt="Profile"
            className="profile-image"
          />
          {isEditing && (
            <input
              required
              type="file"
              accept="image/png"
              encType="multipart/form-data"
              //value={editedUser.imageProfile}
              onChange={handleImageChange}
            />
          )}
        </div>

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
                {/* Add more input fields for other profile info */}
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
              <div className="profile-details">
                <h1>Welcome to Your Profile, {editedUser.firstname}!</h1>
                <p>
                  <strong>Email:</strong> {editedUser.email}
                </p>
                <p>
                  <strong>Role:</strong> {editedUser.role}
                </p>
                <p>
                  <strong>User Name:</strong> {editedUser.firstname}{" "}
                  {editedUser.lastname}
                </p>
                {/* Display other profile info */}
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
    </div>
  );
}

export default Profile;
