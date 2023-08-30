import React from "react";
import MainCarousel from "./MainCarousel";
import NgoRegDiv from "./NgoRegDiv";
import ContactUs from "./ContactUs";
import NgoCards from "./NgoCards";
import Hero from "../MainHome/components/Hero";
import Section1 from "../MainHome/components/Section1";
import Section2 from "../MainHome/components/Section2";
import Section3 from "../MainHome/components/Section3";
import Section4 from "../MainHome/components/Section4";
import Section5 from "../MainHome/components/Section5";
import Section6 from "../MainHome/components/Section6";
import Section7 from "../MainHome/components/Section7";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <MainCarousel />
      <div>
        <Section3 />
      </div>
      <NgoCards />
      <div>
        <Section1 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section2 />
      </div>

      <div>
        <Section6 />
      </div>
      <div>
        <Section7 />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
