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

function Section2() {
  return (
    <div>
      <div className="site-section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="media block-6">
                <div className="icon">
                  <span className="ion-ios-bulb" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Our Mission</h3>
                  <p>
                    Empower NGOs by providing a robust & collaborative platform
                    that fosters connection, knowledge exchange, and resource
                    sharing.
                  </p>
                  <p>
                    <a href="#" className="link-underline">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="media block-6">
                <div className="icon">
                  <span className="ion-ios-cash" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Make Donations</h3>
                  <p>
                    We are committed to driving positive change by empowering
                    NGOs to collaborate and amplify their impact. Your support
                    can make a significant difference.
                  </p>
                  <p>
                    <a href="#" className="link-underline">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="media block-6">
                <div className="icon">
                  <span className="ion-ios-contacts" />
                </div>
                <div className="media-body">
                  <h3 className="heading">We Need Volunteers</h3>
                  <p>
                    If you believe in the power of collective action, we invite
                    you to become a part of our mission. Volunteer with us
                    today!
                  </p>
                  <p>
                    <a href="#" className="link-underline">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
