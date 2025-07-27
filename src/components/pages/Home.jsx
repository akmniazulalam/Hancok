import React from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Popular from "../layouts/Popular";
import Tournament from "../layouts/Tournament";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Popular/>
      <Tournament/>
    </>
  );
};

export default Home;
