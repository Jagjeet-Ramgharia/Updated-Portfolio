import React from "react";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import Particle from "../components/Partical";
import ReviewSection from "../components/ReviewSection";
import ServiceSection from "../components/ServiceSection";
import Title from "../components/Title";
import { MainLayOut } from "../styles/Layout";

const About = () => {
  return (
    <MainLayOut>
      <ABOUT>
        <div className="p-particle-js">
          <Particle />
          <Particle />
        </div>
        <Title title={"about me"} span={"about me"} />
        <ImageSection />
        <ServiceSection />
        <ReviewSection />
      </ABOUT>
    </MainLayOut>
  );
};

const ABOUT = styled.section`
  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default About;
