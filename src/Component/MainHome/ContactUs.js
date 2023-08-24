import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Styles from "./Style.module.css";

function ContactUs() {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    email: "",
    countryCode: "India +91",
    mobileNumber: "",
    city: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name) {
      validationErrors.name = "Name is required.";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email address.";
    }
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber = "Mobile number is required.";
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = "Invalid mobile number.";
    }
    if (!formData.city) {
      validationErrors.city = "City is required.";
    }
    if (!formData.message) {
      validationErrors.message = "Message is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Simulate form submission success
      alert("Form submitted successfully!");
      navigate("/success");
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${Styles.formContainer}`}
        style={{ border: "1px solid #ccc" }}
      >
        <div
          className={`info p-3 ${Styles.formBorder}`}
          style={{
            border: "2px solid #f0ad4e",
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",

            transition: "border-color 0.3s, transform 0.3s",
          }}
        >
          <h2 className="text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* Mobile Number field */}
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <div className="row">
                <div className="col-4">
                  <select
                    name="countryCode"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.countryCode}
                  >
                    <option>India +91</option>
                  </select>
                </div>
                <div className="col-8">
                  <input
                    name="mobileNumber"
                    type="text"
                    placeholder="Mobile number"
                    className={`form-control ${
                      errors.mobileNumber ? "is-invalid" : ""
                    }`}
                    id="mobileNumber"
                    onChange={handleChange}
                    value={formData.mobileNumber}
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {errors.mobileNumber}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* City field */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                name="city"
                type="text"
                placeholder="City"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                id="city"
                onChange={handleChange}
                value={formData.city}
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Requirement/Message</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                placeholder="Enter your requirement or message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-warning d-block mx-auto mt-3"
              id="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
