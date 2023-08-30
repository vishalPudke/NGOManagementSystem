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
// import './scss/style.scss';

function Section3() {
  return (
    <div>
      <div className="site-section fund-raisers bg-light">
        <div className="container">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Registered Ngo's</h2>
              <p className="lead">
                If you are a doner then you are on the correct platform ..
                select NGO from below list and donate easily.
              </p>
              <p>
                <a href="#" className="link-underline">
                  below is the list of all registered ngos
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {/* <div class="row"> */}
          <div className="col-md-12 block-11">
            <div className="nonloop-block-11 owl-carousel">
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_1.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Water Is Life. Clean Water In Urban Area</a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_7.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Need Shelter for Children in Africa</a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_3.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Children Needs Education</a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_4.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Refugees Needs Food</a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_6.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Voluteer </a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
              <div className="card fundraise-item">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/img_3.jpg"
                    alt="Image placeholder"
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#">Children Needs Food</a>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <span class="donation-time mb-3 d-block">Last donation 1w ago</span> */}
                  <div className="progress custom-progress-success">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <span class="fund-raised d-block">$12,000 raised of $30,000</span> */}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Section3;
