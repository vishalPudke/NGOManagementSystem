import React from "react";
import "./css/open-iconic-bootstrap.min.css";
import "./css/animate.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/magnific-popup.css";
import "./css/aos.css";
import "./css/ionicons.min.css";
import "./css/bootstrap-datepicker.css";
import "./css/jquery.timepicker.css";
import "./css/flaticon.css";
import "./css/icomoon.css";
import "./css/fancybox.min.css";
import "./css/bootstrap.css";
import "./css/style.css";

import NgoRegDiv from "../NgoRegDiv";
import { Link, useNavigate } from "react-router-dom";

function Section1() {
  const navigate = useNavigate();
  return (
    <div className="site-section section-counter ">
      <div className="container text-bg-light p-3">
        <div className="row text-bg-light p-3">
          <div className="col-md-6 pr-5">
            <div className="block-48">
              <span className="block-48-text-1">Connected to 1234 Ngos.</span>
              <div className="block-48-counter ftco-number" />
              <span className="block-48-text-1 mb-4 d-block">
                Register your NGO today itself.
              </span>
              <p className="mb-0">
                <NgoRegDiv />
              </p>
            </div>
          </div>
          <div className="col-md-6 welcome-text">
            <h2 className="display-4 mb-3">Who Are We?</h2>
            <p className="lead">
              Our Platform Facilitation Initiative is a dynamic and innovative
              ecosystem that empowers and supports non-governmental
              organizations (NGOs) by providing them with a robust and
              collaborative platform to optimize their operations and amplify
              their impact. This initiative serves as a centralized hub where
              NGOs can connect, collaborate, and access a wide range of
              resources, tools, and expertise to enhance their efficiency,
              effectiveness, and sustainability.
            </p>
            <p className="mb-4">
              If you want to know more about our initiative and vision then
              visit out About us page
            </p>
            <p className="mb-0">
              <Link to="/abtus" className="btn btn-primary px-3 py-2">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
