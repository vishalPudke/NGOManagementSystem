import React from 'react'
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/fancybox.min.css';
import './css/bootstrap.css';
import './css/style.css';

function Section7() {
  return (
    <div>
          <div
        className="featured-section overlay-color-2"
        style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src="images/bg_2.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 pl-md-5">
              <div className="form-volunteer">
                <h2>Be A Volunteer Today</h2>
                <form action="#" method="post">
                  <div className="form-group">
                    {/* <label for="name">Name</label> */}
                    <input
                      type="text"
                      className="form-control py-2"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label for="email">Email</label> */}
                    <input
                      type="text"
                      className="form-control py-2"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label for="v_message">Email</label> */}
                    <textarea
                      name="v_message"
                      id=""
                      cols={30}
                      rows={3}
                      className="form-control py-2"
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                    {/* <input type="text" class="form-control py-2" id="email"> */}
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-white px-5 py-2"
                      defaultValue="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7