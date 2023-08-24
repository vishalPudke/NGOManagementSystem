import React from "react";
import C1 from "../Component/images/car5.png";
import C2 from "../Component/images/car4.jpg";
import C3 from "../Component/images/car2.png";
import Footer from "./MainHome/Footer";

function HomePage() {
  return (
    <>
      <MyAppCarousel />

      <div className="row justify-content-center mt-3">
        <div className="col-md-10 col-sm-12 text-center">
          <div className="alert alert-warning" role="alert">
            <strong className="fs-4"> Types of Car Insurance </strong>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function MyAppCarousel() {
  return (
    <div classname="row justify-content-center">
      <div classname="col-sm-12 col-md-10">
        <div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-sm-12">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={C1}
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={C2}
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={C3}
                      className="d-block w-100"
                      style={{ height: 400 }}
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
