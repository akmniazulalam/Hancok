import React from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Popular from "../layouts/Popular";
import Tournament from "../layouts/Tournament";
import Sale from "../layouts/Sale";
import Store from "../layouts/Store";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Popular/>
      <Tournament/>
      <Sale/>
      <Store/>
    </>
  );
};

export default Home;
