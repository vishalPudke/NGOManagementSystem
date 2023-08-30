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

function NgoHomeSection(props) {
  const data = JSON.parse(localStorage.getItem("ngohome"));
  return (
    <div>
      <div
        className="featured-section overlay-color-2"
        style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={"data:image/jpeg;base64," + `${data.aboutusimg}`}
                alt="Image placeholder"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 pl-md-5">
              <span className="featured-text d-block mb-3">{data.name}</span>
              <h2>{data.tagline}</h2>
              <p className="mb-3">
                You can contact us through <br />
                contact no: +91 {data.phone} or <br />
                through email : {data.email}
              </p>
              <span className="fund-raised d-block mb-5">{data.extrainfo}</span>
              <p>
                <a
                  href="#"
                  className="btn btn-success btn-hover-white py-3 px-5"
                >
                  Visit
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoHomeSection;
