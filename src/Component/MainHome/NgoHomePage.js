import React, { useState } from "react";
import { json, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Payment from "../Transaction/Payment";
import useAuth from "../hooks/useAuth";
import NgoHomeSection from "./components/NgoHomeSection";

import "../MainHome/components/css/open-iconic-bootstrap.min.css";
import "../MainHome/components/css/animate.css";
import "../MainHome/components/css/owl.carousel.min.css";
import "../MainHome/components/css/owl.theme.default.min.css";
import "../MainHome/components/css/magnific-popup.css";
import "../MainHome/components/css/aos.css";
import "../MainHome/components/css/ionicons.min.css";
import "../MainHome/components/css/bootstrap-datepicker.css";
import "../MainHome/components/css/jquery.timepicker.css";
import "../MainHome/components/css/flaticon.css";
import "../MainHome/components/css/icomoon.css";
import "../MainHome/components/css/fancybox.min.css";
import "../MainHome/components/css/bootstrap.css";
import "../MainHome/components/css/style.css";

function NgoHomePage() {
  const location = useLocation();
  console.log(location.state);
  const data = JSON.parse(localStorage.getItem("ngohome"));
  console.log(data);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="site-section section-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 welcome-text">
              <h2 className="display-4 mb-3">Who Are We?</h2>
              <p className="lead">
                {data.aboutus} {data.description}
                {data.ddescription}
              </p>
              <p className="mb-4">Regisration Date: {data.regDate}</p>
              <p className="mb-0">
                <a
                  href="#"
                  className="btn btn-primary px-3 py-2"
                  onClick={() => setModalShow(true)}
                >
                  Donate
                </a>
              </p>
            </div>

            <div className="col-md-6 pr-5">
              <img
                src={"data:image/jpeg;base64," + `${data.homeimg}`}
                alt="Image placeholder"
                className="img-fluid"
                style={{ borderRadius: "20%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // state={localStorage.getItem("ngohome")}
      />
      {/* <NgoHomeSection data={localStorage.getItem("ngohome")} /> */}
      <NgoHomeSection />
    </div>
  );
}

export default NgoHomePage;

function MyVerticallyCenteredModal(props) {
  const { auth, setauth } = useAuth();
  console.log(props);
  const data = JSON.parse(localStorage.getItem("ngohome"));
  console.log(data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Donate to {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {auth.userId ? (
          <Payment ngoid={data.id} />
        ) : (
          <>
            <h2>Please Login First to Continue</h2>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
