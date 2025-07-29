import React from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Popular from "../layouts/Popular";
import Tournament from "../layouts/Tournament";
import Sale from "../layouts/Sale";
import Store from "../layouts/Store";
import Team from "../layouts/Team";
import Faq from "../layouts/Faq";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Popular/>
      <Tournament/>
      <Sale/>
      <Store/>
      <Team/>
      <Faq/>
    </>
  );
};

export default Home;
