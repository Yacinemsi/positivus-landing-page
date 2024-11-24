import React from "react";
import Hero from "./Hero";
import LogoBanniere from "./LogoBanniere";
import ListCards from "./ListCards";
import CaseStudies from "./CaseStudies";
import OurWorkingProcess from "./OurWorkingProcess";
import Team from "./Team";

const Main = () => {
  return (
    <main>
      <Hero />
      <LogoBanniere />
      <ListCards />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
    </main>
  );
};

export default Main;
