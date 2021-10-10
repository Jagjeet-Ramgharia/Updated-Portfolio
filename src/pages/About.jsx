import React from "react";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import ReviewSection from "../components/ReviewSection";
import ServiceSection from "../components/ServiceSection";
import Title from "../components/Title";
import { MainLayOut } from "../styles/Layout";

const About = () => {
  return (
    <MainLayOut>
      <ABOUT>
        <Title title={"about me"} span={"about me"} />
        <ImageSection />
        <ServiceSection />
        <ReviewSection />
      </ABOUT>
    </MainLayOut>
  );
};

const ABOUT = styled.section``;

export default About;
