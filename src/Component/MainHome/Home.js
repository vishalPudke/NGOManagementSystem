import React from "react";
import MainCarousel from "./MainCarousel";
import NgoRegDiv from "./NgoRegDiv";
import ContactUs from "./ContactUs";
// import Navbar from "../Navigation/Navbar";
// import RenderImage from "../RenderImage";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <MainCarousel />
      <NgoRegDiv />
      <ContactUs />
      {/* <RenderImage /> */}
    </div>
  );
}

export default Home;
