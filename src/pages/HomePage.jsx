import React from "react";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Product from "../components/Product";
import PlaneRequest from "../components/PlaneRequest";
import Articles from "../components/Articles";
import Videoes from "../components/Videoes";

function HomePage() {
  return (
    <>
      <Intro />
      <div className="container">
        <Services />
        <Product />
        
        <PlaneRequest />
        <Videoes/>
        <Articles />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default HomePage;
