import React from "react";
import "./Footer.css";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#eee",
    padding: "20px 0",
  };

  const socialIconStyle = {
    fontSize: "2em",
    marginRight: "10px",
    color: "#eee",
  };

  return (
    <>
      <div className="footer1 full-width" style={footerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Policies--</h3>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/data-security-practice.php">
                  Data security Practice
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/terms-and-conditions.php">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/privacy-policy.php">
                  Privacy Policy
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/refund-and-cancellation-policy.php">
                  Refund & Cancellation Policy
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/legal-policy.php">
                  Legal Disclaimer
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/company-private-policy.php">
                  Company Pvt. Policy
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/copyright.php">
                  Copyright Policy
                </a>
              </p>
            </div>

            <div className="col-md-3 ">
              <h3>Contact--</h3>
              <p>
                <i className="fa fa-angle-right "></i>{" "}
                <a href="/contactus">Contact Us</a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/business-partners.php">
                  Business partners
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/franchise.php">For franchise</a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/advertise.php">
                  Advertise with us
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="javascript:bookmarksite('Rajput Jain & Associates', 'http://www.carajput.com')">
                  Add to favorites
                </a>
              </p>
            </div>

            <div className="col-md-3">
              <h3>Support--</h3>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/appointment.php">Appointment</a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/free-trail-offer.php">
                  Free Trial Offer
                </a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/contact-us.php">Help</a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/how-we-work.php">How we work</a>
              </p>
              <p>
                <i className="fa fa-angle-right"></i>{" "}
                <a href="https://carajput.com/accreditation.php">
                  Accreditations
                </a>
              </p>
            </div>

            <div className="col-md-3">
              <h3>Get In Touch--</h3>
              <p>
                <b>Helping Hands </b>
                <br />
                <b>Add:</b> NMMC Head Office:- Plot No. 1,2, Sector - 15A,
                Govardhani Chowk, Belapur, Navi Mumbai.
              </p>
              <p>
                <b>Email:</b>{" "}
                <a href="mailto:vishal.devops@gmail.com">
                  vishal.devops@gmail.com
                </a>
              </p>
              <p>
                <b>Phone:</b> <a href="tel:+919527313746">9527313746</a>
              </p>
            </div>

            <div className="col-md-12">
              <h3>Legal Disclaimer--</h3>
              <p>
                The information contained on this website merely provides
                details of our NGO (HELPING HANDS) to persons who have shown
                interest in knowing more about us and is not intended to solicit
                work or advertise our capabilities in any manner. The
                information provided on this website is general in nature and
                should not be used as a basis of decision-making without further
                professional advice. The third party site links are only
                provided for ready reference of the users and HELPING HANDS NGO
                neither controls their content nor undertakes any responsibility
                regarding them.
              </p>
              <p>© 2023 Helping-hands. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* <div className="footer1 full-width" style={footerStyle}>
        <div className="container">
          <section className="mb-2 mt-2">
            <div className="container">
              <div className="footer2 full-width" style={footerStyle}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="copy">
                        © 2023 Helping-hands. All Rights Reserved |{" "}
                        <a
                          style={{ color: "#eee", textDecoration: "none" }}
                          href="https://yourwebsite.com/site-map"
                        >
                          Sitemap
                        </a>
                      </p>

                      <p className="social">
                        <a
                          href="https://www.facebook.com/yourfacebookpage"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fa fa-facebook-square"
                            style={socialIconStyle}
                          ></i>
                        </a>
                        <a
                          href="https://twitter.com/yourtwitterhandle"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fa fa-twitter-square"
                            style={socialIconStyle}
                          ></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
}

export default Footer;
