import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ContactUs() {
  return (
    <>
      <div className="row justify-content-center mt-3">
        <div className="col-sm-12 col-md-10">
          <iframe
            width="1399"
            height="438"
            src="https://www.youtube.com/embed/monISkguw8Q"
            title="Auto Insurance Animated Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <section id="contact" className="contact mb-2 mt-2">
        <form id="myform">
          <div className="container">
            <div className="section-title">
              <h2 className="heading">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                ad esse rem facere officia, nam dolor praesentium quod eius
                fugiat rerum doloremque soluta, ex id est deleniti. Commodi, ab
                omnis.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-5 col-sm-12 d-flex align-items-stretch">
                <div className="info">
                  <div style={{ marginRight: 50 }}>
                    <div className="address">
                      <h4>Location:</h4>
                      <p>CDAC, Khaghar, Navi Mumbai</p>
                    </div>
                    <div className="email">
                      <h4>Email:</h4>
                      <p>cdac@insurance.com</p>
                    </div>
                    <div className="phone">
                      <h4>Call:</h4>
                      <p>+91 9000 450 456</p>
                    </div>
                  </div>
                  <iframe
                    id="vishal"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.3793050435437!2d73.05379074438072!3d19.026067986048865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1686496283010!5m2!1sen!2sin"
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-lg-7 col-sm-12 d-flex align-items-stretch">
                <div
                  className="d-flex justify-content-center  align-items-stretch"
                  style={{ height: "85vh", width: "70vw" }}
                >
                  <div className="info p-3">
                    <div>
                      <div>
                        <div className="form-group d-flex text-start">
                          <div className="col-12 ">
                            <label
                              htmlFor="name"
                              className="mb-2 fs-normal fw-medium"
                            >
                              Name
                            </label>
                            <input
                              name="name"
                              type="text"
                              placeholder="Your name"
                              className="form-control mb-1"
                              id="name"
                            />
                            <span id="spname" />
                          </div>
                        </div>
                        <div className="form-group text-start mb-2">
                          <div className="label-left">
                            <label htmlFor="email" className="mb-2 fw-medium">
                              Email
                            </label>
                          </div>
                          <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="form-control mb-1"
                            id="mail"
                          />{" "}
                          <span id="spmail" />
                        </div>
                        <div className="form-group text-start mb-2">
                          <div className="label-left">
                            <label htmlFor="mobile" className="mb-2 fw-medium">
                              Mobile Number
                            </label>
                          </div>
                          <div className="row">
                            <div className="col-4">
                              <select
                                name="country code"
                                className="form-control col-3"
                              >
                                <option selected>India +91</option>
                              </select>
                            </div>
                            <div className="col-8">
                              <input
                                name="mobno"
                                type="text"
                                placeholder="Mobile number"
                                className="form-control"
                                id="monum"
                              />
                              <span id="spmo" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group text-start mb-2">
                          <div className="label-left">
                            <label htmlFor="city" className="mb-2 fw-medium">
                              City
                            </label>
                          </div>
                          <input
                            name="city"
                            type="text"
                            placeholder="City"
                            className="form-control mb-1"
                          />
                        </div>
                        <div className="form-group text-start mb-2">
                          <div className="label-left">
                            <label htmlFor="message" className="mb-2 fw-medium">
                              Requirement/Message
                            </label>
                          </div>
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="Enter your requirement or message"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-warning d-block mx-auto mt-3"
                          id="sumbit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ContactUs;
