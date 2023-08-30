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

function Section4() {
  return (
    <div>
         <div className="site-section fund-raisers">
        <div className="container">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Latest Donations</h2>
              <p className="lead">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="mb-5">
                <a href="#" className="link-underline">
                  View All Donations
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="person-donate text-center">
                <img
                  src="images/person_1.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="donate-info">
                  <h2>Jorge Smith</h2>
                  <span className="time d-block mb-3">Donated Just now</span>
                  {/* <p>Donated <span class="text-success">$252</span> <br> <em>for</em> <a href="#" class="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="person-donate text-center">
                <img
                  src="images/person_2.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="donate-info">
                  <h2>Christine Charles</h2>
                  <span className="time d-block mb-3">Donated 1 hour ago</span>
                  {/* <p>Donated <span class="text-success">$400</span> <br> <em>for</em> <a href="#" class="link-underline fundraise-item">Children Needs Education</a></p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="person-donate text-center">
                <img
                  src="images/person_3.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="donate-info">
                  <h2>Albert Sluyter</h2>
                  <span className="time d-block mb-3">Donated 4 hours ago</span>
                  {/* <p>Donated <span class="text-success">$1,200</span> <br> <em>for</em> <a href="#" class="link-underline fundraise-item">Need Shelter for Children in Africa</a></p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="person-donate text-center">
                <img
                  src="images/person_4.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="donate-info">
                  <h2>Andrew Holloway</h2>
                  <span className="time d-block mb-3">Donated 9 hours ago</span>
                  {/* <p>Donated <span class="text-success">$100</span> <br> <em>for</em> <a href="#" class="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4